window.onload = function(){startScript();};

function startScript(){
document.getElementById('loadingScreen').style.opacity = '0';
setTimeout(hammer,10);
setTimeout(accordanceCode, 50);
setTimeout(removeLoading, 150);
}

function removeLoading(){
var elem = document.getElementById("loadingScreen");
elem.parentNode.removeChild(elem);
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
document.getElementById('bodyBase').style.marginLeft = '220px';
document.getElementById("hamburger").className = "";
document.getElementById("hamburger").className = "navMenuLeft hamburglar is-open";
document.getElementById('hamburger').onclick = function () { toggleMenu(0) };
}
if (y == 0){
document.getElementById('bodyBase').style.marginLeft = '0px';
document.getElementById("hamburger").className = "";
document.getElementById("hamburger").className = "navMenuLeft hamburglar is-closed";
document.getElementById('hamburger').onclick = function () { toggleMenu(1) };
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

function expandSubMenu(){

}

function accordanceCode(){
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
     this.classList.toggle("active");
     this.nextElementSibling.classList.toggle("show");
  }
}
}