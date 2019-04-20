//declarations
var klik=document.getElementById("imgrid");
var slike=klik.querySelectorAll(".grid_item > img");
var i=0;
var flag=0;
//adding a event listenr to every picture witch will show the picture in its full  size
for( i=0;i<slike.length;i++){
    slike[i].addEventListener('click',function(){
        document.getElementById('big_img').style.opacity=1;
        document.getElementById('background').style.display="inherit";
        flag=1;
        document.getElementById("big").setAttribute("src",this.getAttribute('src')); 
        document.getElementById('big_img').style.display="inherit";  
        document.getElementById('big_img').style.opacity=1; 
       
        
    });
}
//clicking the 'x' and exiting the big image 
document.getElementById("x").addEventListener("click",function(){
    flag=0;
    document.getElementById('big_img').style.opacity=0;
    setTimeout(function(){
        document.getElementById('big_img').style.display="none";
        document.getElementById('background').style.display="none";
        
    },700);
});
