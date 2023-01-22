
//1.
let mul=document.querySelector('ul');
mul.style.listStyleType='decimal';

//2
let infodiv=document.querySelector(".info");
infodiv.classList.add("hide");

//3
let body=document.querySelector("body");
const csbody=window.getComputedStyle(body, null);
let mmargin=csbody.getPropertyValue("margin-left");
