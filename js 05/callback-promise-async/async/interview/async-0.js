function getData() {
  return Promise.reject(new Error("Oops"));
}

function main() {
  return Promise.resolve()
    .then(function () {
      return getData();
    })
    .then(function () {
      return 2 + 3;
    })
    .catch(function (err) {
      return err.message.length;
    })
    .then(function (x) {
      return x + 100;
    });
}

main().then(function (x) {
  console.log(x);
});

console.log('foo');