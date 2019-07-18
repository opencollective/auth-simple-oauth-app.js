import getUserAgent from "universal-user-agent";
import { request } from "@octokit/request";

import { auth } from "./auth";
import { StrategyOptions } from "./types";
import { VERSION } from "./version";

export function createOAuthAppAuth(options: StrategyOptions) {
  return auth.bind(
    null,
    Object.assign(
      {
        request: request.defaults({
          baseUrl: "https://github.com",
          headers: {
            "user-agent": `octokit-auth-oauth-app.js/${VERSION} ${getUserAgent()}`
          }
        })
      },
      options
    )
  );
}
