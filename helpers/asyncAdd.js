export default function asyncAdd(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}
