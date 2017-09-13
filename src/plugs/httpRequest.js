import { apiServer } from '../common/setting';

function getUrl(path) {
  return `${apiServer}${path}`;
}

export function getImageUrl(path) {
  return `${apiServer}/img?url=${path}`;
}

export function get(path) {
  return fetch(getUrl(path))
    .then((resource) => {
      if (resource.status >= 200 && resource.status <= 304) {
        return resource.json();
      } else {
        let error = new Error(`服务器响应错误${resource.url}`);
        throw error;
      }
    })
    .then((result) => {
      if (result.success) {
        return result;
      } else {
        let error = new Error('数据请求错误');
        throw error;
      }
    });
}
