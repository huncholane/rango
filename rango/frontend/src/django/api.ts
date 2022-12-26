import "whatwg-fetch";
import { paths } from "./schema";
import { Fetcher } from "openapi-typescript-fetch";
import { createProxyMiddleware } from "http-proxy-middleware";

const fetcher = Fetcher.for<paths>();
fetcher.configure({
  baseUrl: "http://localhost:8000",
  init: {
    headers: {},
  },
  use: [],
});

export default fetcher;
