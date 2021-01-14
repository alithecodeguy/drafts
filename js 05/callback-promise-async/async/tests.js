const foo = new Promise((resolve, reject) => {
  console.log("foo");

  setTimeout(() => {
    resolve("1");
  }, 2000);
});

const bar = new Promise((resolve, reject) => {
  console.log("bar");

  setTimeout(() => {
    resolve("2");
  }, 5000);
});

// foo
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.log("ERR");
//   })
//   .finally(() => {
//     console.log("Finaly");
//   });

foo.then((fooData) => {
  console.log("then foo");

  bar.then((barData) => {
    console.log(barData);
  });
});

// Promise.race([foo, bar]).then((data) => {
//   console.log(Date.now());
//   console.log(data);
// });

Promise.resolve(1);

new Promise((resolve) => {
  resolve(1);
});

async function foo() {}

console.log(foo());
