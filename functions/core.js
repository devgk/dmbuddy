//The moment you try to simply the technologies, its becomes more complicated!

//If you spend too much time thinking about a thing, you’ll never get it done.

window.onload = function(){startScript();};
function startScript(){
try {
hammer();
}catch(err) {}
try {
chapter1(01);
}catch(err) {}
setTimeout(removeLoading, 100);
}

function startLoading(){
document.getElementById("loadingScreen").style.display = "block";
}
function removeLoading(){setTimeout(noLoad, 100);}
function noLoad(){
document.getElementById('loadingScreen').style.opacity = '0';
setTimeout(endLoading, 150); 
}
function endLoading(){
document.getElementById("loadingScreen").style.display = "none";
document.getElementById('loadingScreen').style.opacity = '1';
}

function hammer(){
var bodyBase = document.getElementById('bodyBase');
var mc = new Hammer(bodyBase);
mc.on("swiperight", function() {
setTimeout(toggleMenu, 10, 1);
});
mc.on("swipeleft", function() {
setTimeout(toggleMenu, 10, 0);
});
}

function toggleMenu(num){
y = num;

if (y == 1){ 

var i = 1;                     
function openMenu () {
   setTimeout(function () { document.getElementById('bodyBase').style.marginLeft = (i*5) + "px";
      i++;                    
      if (i < 55) {  
          openMenu();   
      }
   }, 1)
}
openMenu();

document.getElementById("draw").className = "navMenuLeft is-open";
document.getElementById('draw').onclick = function () { toggleMenu(0) };
}
if (y == 0){

var i = 54;                     
function closeMenu () {
   setTimeout(function () { document.getElementById('bodyBase').style.marginLeft = (i*5) + "px";
      --i;                    
      if (i >= 0) {  
          closeMenu();   
      }
   }, 1)
}
closeMenu();
    
document.getElementById("draw").className = "navMenuLeft is-closed";
document.getElementById('draw').onclick = function () { toggleMenu(1) };
}
}
function toggleSubMenu(num){
x = num;
if (x == 1){
document.getElementById('subMenu').style.display = 'block';
document.getElementById('plus').style.webkitTransform = 'rotate(45deg)';
document.getElementById('plus').style.backgroundColor = '#E36C46';
document.getElementById('subMenuCont').onclick = function () { toggleSubMenu(0) };
}
if (x == 0){
document.getElementById('subMenu').style.display = 'none';
document.getElementById('plus').style.webkitTransform = 'rotate(0)';
document.getElementById('plus').style.backgroundColor = '#FBD75B';
document.getElementById('subMenuCont').onclick = function () { toggleSubMenu(1) };
}
}