var facts=[' THE ROYAL FAMILY LOVES THE PEMBROKE WELSH CORGI.',
'. THE KENNEL CLUB ORIGINALLY LUMPED THE TWO BREEDS TOGETHER.',
'PEMBROKE WELSH CORGIS HAVE A CONSIDERABLE HISTORY AS WELL.',
'THE CARDIGAN WELSH CORGI IS THE OLDER BREED.',
'THERE ARE TWO DISTINCT BREEDS OF CORGIS.',
'CORGI MEANS "DWARF DOG" IN WELSH.'];






function pokreni(link,num){
//clearing out if there is more than one instance of this 
if(document.getElementById("main")!=undefined){
    document.getElementById("main").remove();
}


//declarations
num=num-1;
var mainimg=document.createElement("div");
var image=document.createElement("img");
var span=document.createElement("span");
var text=document.createElement("div");

//main div
mainimg.setAttribute("id","main");
document.body.appendChild(mainimg);
//image
image.setAttribute("src",link);
mainimg.appendChild(image);
//upper cross on the right
span.setAttribute("id","x");
span.innerHTML="X";
span.addEventListener("click",function(){
span.style.display="none";
span.parentElement.remove();  
})
mainimg.appendChild(span);

//text
text.setAttribute("id","text");
text.innerHTML=facts[num];
mainimg.appendChild(text);




//timeouts
setTimeout(function(){text.style.opacity=1;},500)



}