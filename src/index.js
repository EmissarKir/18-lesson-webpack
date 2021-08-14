import "../index.css";
import IMG from "../assets/js.jpg";

const imgContainer = document.querySelector(".img-container");

const imgHTML = document.createElement("img");
imgHTML.src = IMG;

const details = document.createElement("div");
details.className = "details";
const title = document.createElement("h2");
title.className = "details";
title.textContent = "I love JavaScript";
details.append(title);

imgContainer.append(imgHTML);
imgContainer.append(details);

console.log("Hello World!");
