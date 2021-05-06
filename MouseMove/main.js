let thisH1 = document.getElementById('mouse_h1');
let thisP = document.getElementById('mouse_p');
let thisDiv = document.getElementById('mouse_div');

function mouseIn(){
    thisH1.innerHTML="你進來了";
}
function mouseOunt(){
    thisH1.innerHTML="你出去了";
    thisP.innerHTML="";
}
function mouseMove(e){
    thisP.innerHTML="你在裡面走來走去。位置:"+e.clientX+","+e.clientY;
}
thisDiv.addEventListener("mouseover",mouseIn);thisDiv.addEventListener("mouseout,museOut");

thisDiv.addEventListener("mouseout,museOut");

thisDiv.addEventListener("mousemove,mouseMove");
