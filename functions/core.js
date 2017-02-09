//The moment you try to simply the technologies, its becomes more complicated!

//If you spend too much time thinking about a thing, you’ll never get it done.

window.onload = function(){startScript();};
function startScript(){
try {
hammer();
}catch(err) {} //Load Hammer
try {
loadChapter();
}catch(err) {} //Load Chapter
try {
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-91432347-1', 'auto');
ga('send', 'pageview');
}catch(err) {} //Load GA
try {
function createMenu(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("innerMenu").innerHTML =
        this.responseText;
    }
    };
    xhttp.open("GET", "nav.txt", true);
    xhttp.send();
}
createMenu();
}catch(err) {} //Create Menu
}

function startLoading(){
document.getElementById("loadingScreen").style.display = "block";
}
function removeLoading(){setTimeout(noLoad, 10);}
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
document.getElementById('bodyBase').style.marginLeft = '270px';
document.getElementById("draw").className = "navMenuLeft is-open";
document.getElementById('draw').onclick = function () { toggleMenu(0) };
}
if (y == 0){
document.getElementById('bodyBase').style.marginLeft = '0px';
document.getElementById("draw").className = "navMenuLeft is-closed";
document.getElementById('draw').onclick = function () { toggleMenu(1) };
}
}
function toggleSubMenu(num){
x = num;
//-------------menu1
if (x == 1){
document.getElementById('subMenu01').style.display = 'block';
document.getElementById('plus01').style.webkitTransform = 'rotate(45deg)';
document.getElementById('plus01').style.backgroundColor = '#E36C46';
document.getElementById('subMenuCont01').onclick = function () { toggleSubMenu(0) };
}
if (x == 0){
document.getElementById('subMenu01').style.display = 'none';
document.getElementById('plus01').style.webkitTransform = 'rotate(0)';
document.getElementById('plus01').style.backgroundColor = '#FBD75B';
document.getElementById('subMenuCont01').onclick = function () { toggleSubMenu(1) };
}
//-------------menu2
if (x == 2){
document.getElementById('subMenu02').style.display = 'block';
document.getElementById('plus02').style.webkitTransform = 'rotate(45deg)';
document.getElementById('plus02').style.backgroundColor = '#E36C46';
document.getElementById('subMenuCont02').onclick = function () { toggleSubMenu(3) };
}
if (x == 3){
document.getElementById('subMenu02').style.display = 'none';
document.getElementById('plus02').style.webkitTransform = 'rotate(0)';
document.getElementById('plus02').style.backgroundColor = '#FBD75B';
document.getElementById('subMenuCont02').onclick = function () { toggleSubMenu(2) };
}
}

function resetObjective(){
document.cookie = "userStatus=4;path=/";
window.location = "/swt.html";
}