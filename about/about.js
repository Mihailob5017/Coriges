var izbor=document.querySelectorAll("#choice > p");
var ostali=document.querySelectorAll("#frame > div")
//when one of the buttons is clicked,all others are reseted to their original color
function reset(){
    for(var i=0;i<izbor.length;i++)
    {
        izbor[i].setAttribute("style","color: white");
    }
}


for(var i=0;i<izbor.length;i++)
{
    izbor[i].addEventListener("click",function(){
        reset();
        this.style.color="darkred";
    });
}
function prikazi(tekst){
for(var i=0;i<ostali.length;i++)
{
    ostali[i].setAttribute("style","display: none");
}    
document.getElementById(tekst).style.display='inherit';
}