document.body.style.background= 'grey';
//style objekt ima svojstva koja želimo promijeniti bordr fontfamily, shadow, border box

function myfunction(){
    document.body.style.background= 'azure';
}

//f-ja s parametrom
function changeColor(newColor){
const elem=document.getElementById('main');
elem.style.color=newColor;
// mogli smo napisat i ovako
//document.getElementByID('main').style.color=newColor;

}
function remove{
    document.getElementById('main').style.display='none';
}

function submit(){
const name=getElementByID('name').value;
const surname=getElementByID('surname').value;

}

function check(){
    const main =document.getElementByID('main');
    const tag=document.getElementsByTagName('button')
}

