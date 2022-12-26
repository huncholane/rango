import djangoLink from "./djangoLink";

type Data = {
  method?: string;
  body?: any;
  headers?: any;
};

const djangoRequest = (endpoint: string, data: Data) => {
  data.headers["Content-Type"] = "application/json";
  data.body = JSON.stringify(data.body ? data.body : {});
  return fetch(djangoLink(endpoint), data);
};

export default djangoRequest;
