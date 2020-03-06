import btoa from "btoa-lite";

import {
  AnyResponse,
  EndpointOptions,
  RequestParameters,
  RequestInterface,
  Route,
  State
} from "./types";
import { EndpointDefaults } from "@octokit/types";

export async function hook(
  state: State,
  request: RequestInterface,
  route: Route | EndpointOptions,
  parameters?: RequestParameters
): Promise<AnyResponse> {
  let endpoint = request.endpoint.merge(
    route as string,
    parameters
  ) as EndpointDefaults & { url: string };
  endpoint.headers.authorization = `basic ${btoa(`${state.clientId}:${state.clientSecret}`)}`;
  return request(endpoint);
}
