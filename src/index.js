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
    Dom.link.href = response.data.images.original.url;
    Dom.link.textContent = "Click Here!";
    Dom.input.value = null;
  }).catch((response) => {
    if (!response.ok) {
      throw new Error("what the fuck");
    }
  })
}

fetch('https://api.giphy.com/v1/gifs/translate?api_key=BIZNCFPH907rY4wbnPHeYKQOrfZ9cyOH&s=hello', {mode: 'cors'}, fetchNewGif)
.then(function(response) {
  return response.json();
}).then(function(response) {
    Dom.image.src = response.data.images.original.url;
    if (click) {
      fetchNewGif();
      click = false;
    }
  });