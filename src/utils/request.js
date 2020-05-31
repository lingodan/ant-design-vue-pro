import axios from "axios";
import { notification } from "ant-design-vue";

function request(options) {
  return axios
    .create({
      baseURL: "http://localhost:3080"
    })(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      notification.error({
        message: status,
        description: statusText
      });
      // 请求的时候，我们正确的回调里面，如果响应中返回的是Promise#reject,这样的话就不会进入到调用的then中了
      return Promise.reject(error);
    });
}

export default request;
