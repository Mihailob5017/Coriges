//a list of all the facts 
var facts=[
'Beloved in England, Corgis have been part of the British Royal Family for over 70 years. Queen Elizabeth II has owned more than 30 Corgis since she was a young child',
'Don’t get confused by their stocky build! Corgis are one of the most athletic breeds, as they were originally herders. They’ve been known to be shockingly fast runners. ',
'You’d never guess by looking at them, but these squat dogs share a common ancestry with the formidable Siberian husky. They have less in common with dogs their size and more in common with their larger canine brethren',
'Vikings Loved Them. Cardigans are among the oldest herding breeds and over 3,000 years old! ',
'Some say that the corgi is an enchanted dog favored by fairies and elves. At night the magical creatures would use the dogs to pull their carriages and be their steeds in battle.',
'Under ancient Welsh law, one could face harsh punishments for stealing one of these dogs.',
'They are the 11th smartest dog breed. They are able to follow commands on the first try 85% of the time and learn commands in as short as five repetitions.',
'The two different breeds are known as the Pembroke Welsh Corgi and the Cardigan Welsh Corgi. Pembrokes have straighter legs and pointier ears.',
'They actually make great watchdogs. This is due to their attentive nature and loud bark.',
'South California Corgi Beach Day started in 2012. The first event only had 12 attendees while the last one had over 600. Some owners dress up their dogs in costumes - such as sharks.',
'Corgis swing their big booties left and right like they are in a perpetual rap music video, and it’s too cute to bear. They are the very definition of “thicc.” ',
' Corgis, are a cheerful bunch, and they are so excited about everything happening around them. They are like little buddhas constantly reminding you to live in the moment',
'They follow you all over the house, and when you go into the bathroom, they wait outside until you’re done',
'It’s a known trait of the breed, so long as everyone in the family still gives them plenty of attention. But kids love to play, and so do corgis, so it’s a match made in heaven.',
'They Usually Get Along With Other Animals'];






function pokreni(link,num){
//if there is a div already created,this is going to make sure it is removed before we add another one 
if(document.getElementById("main")!=undefined){
    document.getElementById("main").remove();
}

//declarations
num=num-1;
let mainimg=document.createElement("div");
let image=document.createElement("img");
let span=document.createElement("span");
let text=document.createElement("div");

//creating a main div that will show us the fact on click
mainimg.setAttribute("id","main");
document.body.appendChild(mainimg);
//adding the image to the main facts div
image.setAttribute("src",link);
mainimg.appendChild(image);
//adding the 'x' to the image 
span.setAttribute("id","x");
span.innerHTML="X";
//removing the picture
span.addEventListener("click",function(){
    span.parentElement.style.opacity=0;
    setTimeout(function(){
        span.style.display="none";
        span.parentElement.remove();  
},1000)
})
mainimg.appendChild(span);
//adding the facts to the image
text.setAttribute("id","text");
text.innerHTML=facts[num];
mainimg.appendChild(text);

//fade in effect
setTimeout(function(){text.style.opacity=1;},500)
}
