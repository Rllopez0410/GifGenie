import "./style.scss";
const Dom = {
    image: document.querySelector("img"),
    btn: document.querySelector("button"),
    input: document.querySelector("input"),
    link: document.querySelector("a")
}

let click = false;

Dom.btn.addEventListener("click", fetchNewGif);

function fetchNewGif() {
    click = true;
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=BIZNCFPH907rY4wbnPHeYKQOrfZ9cyOH&s=' +  Dom.input.value, {mode: 'cors'})
.then(function(response) {
  return response.json();
}).then(function(response) {
    Dom.image.src = response.data.images.original.url;
    Dom.link.download = response.data.images.original.url;
    Dom.link.textContent = "Click Here!";
    Dom.input.value = null;
    console.log(response.data.images.original.url);
  });
}

fetch('https://api.giphy.com/v1/gifs/translate?api_key=BIZNCFPH907rY4wbnPHeYKQOrfZ9cyOH&s=hello', {mode: 'cors'}, fetchNew)
.then(function(response) {
  return response.json();
}).then(function(response) {
    Dom.image.src = response.data.images.original.url;
    if (click) {
      fetchNew();
      click = false;
    }
  });