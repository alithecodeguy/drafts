const fetch = require("node-fetch");

async function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

async function init() {
  try {
    const response = await getPosts();
    const posts = await response.json();

    console.log(posts);
  }
  catch (error) {} 
  finally {}
}

init();
