import btoa from "btoa-lite";

import { State, AuthOptions, Authentication } from "./types";

export async function auth(
  state: State,
  authOptions: AuthOptions
): Promise<Authentication> {
  return {
    type: "oauth-app",
    clientId: state.clientId,
    clientSecret: state.clientSecret,
    headers: {
      authorization: `basic ${btoa(`${state.clientId}:${state.clientSecret}`)}`
    }
  };
}
