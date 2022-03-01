import { Application, Router } from "express";
import {
  API_ENDPOINT,
  GET_SCREENSHOT_ENDPOINT,
  IApiErrorBody,
  IGetScreenshotQueryParams,
} from "../shared/server-interface";
import {
  castImageType,
  castTargetUrl,
  castTimeoutMs,
  resultToErrors,
} from "./screenshot-data";
import {
  createPuppeteerBrowser,
  fetchScreenshot,
} from "./screenshot-data-access";
import { useAPISecurity } from "./server-api-security";

export const useAPI = async (app: Application) => {
  const browser = await createPuppeteerBrowser();

  const apiRouter = Router();

  useAPISecurity(apiRouter);

  apiRouter.get(GET_SCREENSHOT_ENDPOINT, async (req, res) => {
    const queryParams: IGetScreenshotQueryParams = req.query;

    const timeoutMsResult = castTimeoutMs(queryParams.timeoutMs);
    const targetUrlResult = castTargetUrl(queryParams.targetUrl);
    const imageTypeResult = castImageType(queryParams.imageType);

    if (
      !(
        timeoutMsResult.type === "success" &&
        targetUrlResult.type === "success" &&
        imageTypeResult.type === "success"
      )
    ) {
      const apiErrorBody: IApiErrorBody = [
        ...resultToErrors(timeoutMsResult),
        ...resultToErrors(targetUrlResult),
        ...resultToErrors(imageTypeResult),
      ];

      res.status(400).json(apiErrorBody);
      return;
    }

    const result = await fetchScreenshot(browser, {
      imageType: imageTypeResult.data,
      timeoutMs: timeoutMsResult.data,
      targetUrl: targetUrlResult.data,
    });

    if (result.type === "error") {
      const apiErrorBody: IApiErrorBody = result.errors;

      res.status(400).json(apiErrorBody).end();
      return;
    }

    const image = result.image;

    res
      .writeHead(200, {
        "Content-Type": image.type,
        "Content-Length": image.data.length,
      })
      .end(image.data);
  });

  app.use(API_ENDPOINT, apiRouter);
};
