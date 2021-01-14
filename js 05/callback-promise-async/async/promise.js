const fetch = require("node-fetch");

function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

function init() {
  getPosts().then((response) => {
    response.json().then((posts) => {
      console.log(posts);
    });
  });

  getPosts()
    .then((response) => response.json())
    .then((posts) => {
      console.log(posts);
    });
}

init();

// promise.then()
// promise.catch()
// promise.finally()

// new Promise()
// Promise.resolve()
// Promise.reject()

// Promise.all()
// Promise.race()
