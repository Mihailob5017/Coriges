const next=document.getElementById("right");
const prev=document.getElementById("left");
//deklaracije 
var imgs=[];
var string;
var i;
//punimo slike sa linkovima
for(var i=1;i<=8;i++){
string="fullscreen/";
string=string.concat(i);
string=string.concat(".jpg");
imgs[i-1]=string;
}
//sets the default image to the current one 
i=3;
//slideshow buttons
next.addEventListener("click",nextim);
prev.addEventListener("click",previm);


//loads the previous image 
function previm(){
    i--;
    if(i==0)
    {i=imgs.length-1;}
    let img=document.getElementById('image');
    img.style.opacity=0;
    setTimeout(function(){img.setAttribute('src',imgs[i]); },1500);
    setTimeout(function(){img.style.opacity=1; },1500);
    }


//loads the next image 
function nextim(){
i++;
if(i==imgs.length-1)
{i=0;}
let img=document.getElementById('image');
img.style.opacity=0;
setTimeout(function(){img.setAttribute('src',imgs[i]); },1500);
setTimeout(function(){img.style.opacity=1; },1500);
}



