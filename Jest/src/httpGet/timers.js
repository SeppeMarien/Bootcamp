export default function expire(timeout) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout Error'));
    }, timeout);
  });
}
