
//2
let h1=document.createElement('h1');
document.body.prepend(h1);

//3.
const newdiv=document.createElement("div");
newdiv.setAttribute("class","info");
newdiv.innerText = "Hello!!";

const currentdiv=document.querySelector("description");
document.body.insertBefore(newdiv, currentDiv);


let ul=document.querySelector("ul");
for (i=0; i<2;i++){
    const li=document.createElement("li");
    ul.appendChild(li);
}