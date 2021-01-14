const request = require("request");

function getPosts(callback) {
  return request(
    "https://jsonplaceholder.typicode.com/posts",
    (error, response, body) => {
      callback(JSON.parse(body), error);
    }
  );
}

function init() {
  getPosts((data, error) => {
    if (error)
      debugger;
      
    console.log(data);
  });
}

init();

/*
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
*/
