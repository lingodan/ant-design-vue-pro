import axios from "axios";

let service = axios.create({
  timeout: 60000
});

service.defaults.headers.post["Content-Type"] = "application/json";
service.defaults.headers.put["Content-Type"] = "application/json";

service.interceptors.request.use(
  config => {
    if (config.method === "post" || config.method === "put") {
      config.data = JSON.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    let { data } = response;
    return data;
  },
  error => {
    let info = {},
      { status, statusText, data } = error.response;

    if (!error.response) {
      info = {
        code: 5000,
        msg: "Network Error"
      };
    } else {
      info = {
        code: status,
        data: data,
        msg: statusText
      };
    }
    return info;
  }
);

export default function() {
  return service;
}
