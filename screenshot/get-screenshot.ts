import { createPuppeteerBrowser } from "./puppeteer";
import { ITargetUrl } from "./target-url";
import { ITimeout } from "./timeout";

const setTimeoutPromise = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

//run on heroku: https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-on-heroku

export const createGetScreenshot = async () => {
  const browser = await createPuppeteerBrowser();

  const getScreenshot = async ({
    timeout,
    originUrl,
    targetUrl,
  }: {
    originUrl?: string;
    timeout: ITimeout;
    targetUrl: ITargetUrl;
  }): Promise<{
    image?: Buffer | string | void;
    errors: {
      [key: string]: string;
    }[];
  }> => {
    // prevents infinite loop
    if (originUrl === targetUrl) {
      return {
        errors: [
          {
            message: "the originUrl can not equal the targetUrl",
            originUrl,
            targetUrl,
          },
        ],
      };
    }

    try {
      const page = await browser.newPage();

      await page.goto(targetUrl, {
        waitUntil: "networkidle2",
      });

      await setTimeoutPromise(timeout);

      const image = await page.screenshot({
        type: "png",
      });

      return {
        image,
        errors: [],
      };
    } catch (error) {
      //@ts-ignore
      const message = error?.toString?.();

      return {
        errors: [
          {
            message,
          },
        ],
      };
    }
  };

  return getScreenshot;
};