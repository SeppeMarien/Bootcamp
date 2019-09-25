import request from 'request';

export default function httpGet(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, res) => {
      if (err) {
        reject(new Error(`Error: ${err}`));
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Status code: ${res.statusCode}!`));
        return;
      }

      const extendedRes = Object.assign(res, {
        data: JSON.parse(res.body),
      });
      resolve(extendedRes);
    });
  });
}
