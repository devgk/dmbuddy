window.onload = function(){startScript();};

function startScript(){
document.getElementById('loadingScreen').style.opacity = '0';
setTimeout(hammer,10);
setTimeout(accordanceCode, 50);
setTimeout(removeLoading, 150);
}

function hammer(){
var bodyBase = document.getElementById('bodyBase');
var mc = new Hammer(bodyBase);
mc.on("swiperight", function() {
setTimeout(openMenu, 10);
});
mc.on("swipeleft", function() {
setTimeout(closeMenu, 10);
});
}

function removeLoading(){
var elem = document.getElementById("loadingScreen");
elem.parentNode.removeChild(elem);
}

function openMenu(){
document.getElementById('bodyBase').style.marginLeft = '220px';
document.getElementById('closed').style.display = 'none';
document.getElementById('opened').style.display = 'block';
}

function closeMenu(){
document.getElementById('bodyBase').style.marginLeft = '0px';
document.getElementById('opened').style.display = 'none';
document.getElementById('closed').style.display = 'block';
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