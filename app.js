const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const txt = document.querySelector(".text");
const btn = document.querySelector('.btn');
btn.addEventListener("click", function(){
let hexcolor="#";
for(let i=0;i<6;i++){
hexcolor+=hex[randno()];
}

document.body.style.backgroundColor=hexcolor;
txt.textContent ="Color-Code: "+hexcolor;
});

function randno(){
return Math.floor(Math.random()*hex.length);
}
