import "./style.scss";

const Dom = {
    image: document.querySelector("img"),
    btn: document.querySelector("button"),
    input: document.querySelector("input"),
    errMes: document.getElementById("error-message"),
    closeBtn: document.getElementById("close-btn"),
    link: document.querySelector("a")
}

let click = false;

Dom.btn.addEventListener("click", fetchNewGif);
Dom.closeBtn.addEventListener("click", closeErrMes);

function closeErrMes() {
  Dom.errMes.style.top = "-250px";  
  Dom.input.removeAttribute("disabled", "");
}

async function fetchNewGif() {
  click = true;
  try {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=BIZNCFPH907rY4wbnPHeYKQOrfZ9cyOH&s=' +  Dom.input.value, {mode: 'cors'})
    const gifData = await response.json();
    Dom.image.src = gifData.data.images.original.url;
    Dom.link.href = gifData.data.images.original.url;
    Dom.link.textContent = Dom.image.src = gifData.data.images.original.url;;
    Dom.input.value = null;
  } catch (response) {
      if (!response.ok) {
        Dom.errMes.style.top = "0px";
        Dom.input.setAttribute("disabled", "");
        Dom.input.value = null;
      }

    }
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