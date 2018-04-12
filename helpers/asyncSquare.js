export default function asyncSquare(x, callback) {
  setTimeout(() => {
    callback(x * x);
  }, 1000);
}
