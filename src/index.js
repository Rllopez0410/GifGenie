import "./style.scss";

const image = document.querySelector("img");
const btn = document.querySelector("button");

btn.addEventListener("click", fetchNew);

let click = false;

function fetchNew() {
  click = true;
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=BIZNCFPH907rY4wbnPHeYKQOrfZ9cyOH&s=dogs', {mode: 'cors'})
.then(function(response) {
  return response.json();
})
  .then(function(response) {
    image.src = response.data.images.original.url;
  });
}

fetch('https://api.giphy.com/v1/gifs/translate?api_key=BIZNCFPH907rY4wbnPHeYKQOrfZ9cyOH&s=dogs', {mode: 'cors'}, fetchNew)
.then(function(response) {
  return response.json();
})
  .then(function(response) {
    image.src = response.data.images.original.url;
    if (click) {
      fetchNew();
      click = false;
    }
  });