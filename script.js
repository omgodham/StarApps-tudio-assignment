const buttonElmnt = document.querySelector(".button");
const bodyElmnt = document.querySelector("body");
const leftElmnt = document.querySelector(".left-container");
const inputElmnt = document.querySelector("#input-image");
let buttonText = document.querySelector(".upload");

let imgElmnt = document.createElement("img");
let closeBtn = null;
imgElmnt.setAttribute("src", "./blue.png");
leftElmnt.appendChild(imgElmnt);
const handleColorClick = (elmnt) => {
  let elemntClassName = elmnt.classList[0];
  let currentColor = window.getComputedStyle(elmnt).backgroundColor;
  bodyElmnt.style.backgroundColor =
    "rgba(" + currentColor.slice(4, -1) + ", 0.5)";
  buttonElmnt.style.backgroundColor = currentColor;
  imgElmnt.setAttribute("src", `${elemntClassName}.png`);
};

const handleButtonClick = (elmnt) => {
  inputElmnt.click();
};

inputElmnt.addEventListener("change", (e) => {
  const file = inputElmnt.files[0];
  console.log(file);
  const imageUrl = URL.createObjectURL(file);
  buttonText.innerText = file.name;
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageElement.classList.add("logo-image");
  leftElmnt.appendChild(imageElement);
  let closeElmnt = document.createElement("span");
  closeElmnt.classList.add("close");
  closeElmnt.innerText = "X";
  buttonElmnt.appendChild(closeElmnt);
  closeBtn = buttonElmnt;
  buttonElmnt.addEventListener("click", (e) => {
    let temp = document.querySelector(".logo-image");
    if (temp) {
      temp.remove();
      closeElmnt.remove();
      buttonText.innerText = "UPLOAD LOGO";
    }
  });
});
