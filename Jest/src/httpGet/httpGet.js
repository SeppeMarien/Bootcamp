import request from 'request';
import RequestError from './errors';

export default function httpGet(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new RequestError('Http Error', res.statusCode));
      }
      const extendedRes = Object.assign(res, {
        data: JSON.parse(res.body),
      });
      resolve(extendedRes);
    });
  });
}
