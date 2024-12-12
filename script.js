//button elements
let  buttonone = document.querySelector('.buttonone');
let buttontwo = document.querySelector('.buttontwo');

let bed = document.querySelector('.bed');
let monster = document.querySelector('.monster');
    monster.style.display ="none";
let boy = document.querySelector('.boy');
    boy.style.display ="none";
let scared = document.querySelector('.scared');
scared.style.display = "none";
let yard = document.querySelector('.yard');
yard.style.display ="none";
let grass = document.querySelector('.grass');
grass.style.display ="none";
let house = document.querySelector('.house');
house.style.display ="none";
   //Text and stuffs
    let text = document.querySelector('.text');
let title = document.querySelector('h1');
//Events
buttonone.addEventListener('click', function() {
text.innerHTML = "You go check on your pet dog max to make sure that he's still outside. His tail is wagging and he looks up happily at you through the window. Double click to jump through the window or Drag the image to stay in the house. The rumbling is increasing. Choose fast!!!"
bed.style.display = "none";
yard.style.display = "block";
buttonone.style.display="none";
buttontwo.style.display="none";
});
yard.addEventListener('dblclick', function() {
yard.style.display = "none";
text.innerHTML ="As you jump through the window you fall onto the grassy yard. The greenery so lushish. The landing so soft. The house you once knew has collapsed into a hole in the ground. At least you made it out. Narrowly escaping  a shadowy fate."
grass.style.display ="block";
});
buttontwo.addEventListener('click', function() {
text.innerHTML = " You go downstairs and find yourself face to face with a gigantic ugly murderous monstrosity. Its head shifted to the right just slighltly. Pitch black eyes and a deformed body. After veiwing such a cursed being you question your humanity.Double click the picture to fight back or drag the image to run"
bed.style.display = "none";
monster.style.display ="block";
buttonone.style.display="none";
buttontwo.style.display="none";
});
yard.addEventListener('drag', function() {
yard.style.display = "none";
text.innerHTML ="As you move back from the window the rumbling from the house is too strong. You fall onto the floor hit your head. As you try and get up pieces of the floor begin to fall down into a dark pit of emptiness. As you try and exit your room through the door a whole opens up beneath you and you are swallowed up with the rest of the house. Never to see the light of day again"
house.style.display ="block";
});
monster.addEventListener('dblclick', function(){
monster.style.display ="none";
text.innerHTML = "In spite of all the fear this moment causes you, you try and run to the knife on the counter to defend yourself. As you turn around to point the knife at the monster you here a wet footstep. Then a crunch. You end up feeling like a void is collapsing around you. Your being swallowed into the monster. Being embraced by the emptiness. As you wake up you end up in the middle of nowhere. Where is your house? where is the monster? What will you do now?! Your scared alone and afraid. How will you get out of this predicament. You need to find a way home. And you became white??? How did this happen?"
boy.style.display ="block";
});
 
monster.addEventListener('drag', function(){
monster.style.display ="none";
text.innerHTML = "Your legs shake in fear as you try and decided whether you should run or flee. You cant stand to look at its disgusting appearance much longer so you run back to your room and lock the door. As you hide under your covers you cant decide what you want to do. So you just sit under the covers of your bed forever and forever. In fear that you will die if you are found by the monster in your kitchen. You have encountered the indecisive Ending."
scared.style.display ="block";
});