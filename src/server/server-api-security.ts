import { Router } from "express";
import { IApiErrorBody } from "../shared/server-interface";
import env from "./dotenv";

export const getWhitelist = async () => {
  return env.URL_WHITELIST_CSV?.split(",").map((item) => item.trim()) ?? [];
};

const toHostname = (maybeUrl: string) => {
  try {
    return new URL(maybeUrl).hostname;
  } catch (_error) {
    return maybeUrl;
  }
};

export const isOnWhitelist = (whitelist: string[], item: string) => {
  return whitelist.some((whitelistedItem) => {
    return toHostname(whitelistedItem) === toHostname(item);
  });
};

export const useAPISecurity = async (router: Router) => {
  router.use(async (req, res, next) => {
    const whitelist = await getWhitelist();
    const clientUrl = req.headers.origin ?? req.headers.referer;

    if (!clientUrl) {
      const apiErrorBody: IApiErrorBody = [
        {
          message: `'origin' header is undefined or 'referer' header is undefined. One of these headers has to be defined so I can check if you are on the whitelist.`,
        },
      ];

      res.status(400).json(apiErrorBody).end();
      return;
    }

    if (isOnWhitelist(whitelist, clientUrl)) {
      next();
      return;
    }

    const apiErrorBody: IApiErrorBody = [
      {
        message: `You are not on the whitelist. Your url is ${clientUrl}. Whitelisted urls are: ${whitelist.join(
          ", "
        )} `,
      },
    ];

    res.status(400).json(apiErrorBody).end();
  });
};