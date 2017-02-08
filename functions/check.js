function autoChk(){
var status = readCookie("userStatus");
if(status == '1'){
setTimeout(continueFlow, 10);
}
else if(status == '2'){
setTimeout(continueFlow, 10);
}
else if(status == '3'){
setTimeout(continueFlow, 10);
}
else{setTimeout(userSetup, 10);}
}

function continueFlow(){
document.getElementById('selObj').style.display="none";
document.getElementById('continue').style.display="block";
document.getElementById('choice1').style.display="none";
document.getElementById('choice2').style.display="none";
document.getElementById('choice3').style.display="none";
removeLoading();
setTimeout(showBase, 200);
}

function userSetup(){
document.getElementById('one').innerHTML = "Welcome to DM BUDDY";
document.getElementById('welcomeNote').innerHTML = "Thanks for chosing <b>DM BUDDY</b>! Please select your objective, so that we can serve you the perfect digital marketing study materials.";
document.getElementById('selObj').style.display="block";
document.getElementById('continue').style.display="none";
document.getElementById('choice1').style.display="none";
document.getElementById('choice2').style.display="none";
document.getElementById('choice3').style.display="none";
removeLoading();
setTimeout(showBase, 100);
}

function selectObj(){
document.getElementById('one').innerHTML = "Select your objective";
document.getElementById('welcomeNote').style.display="none";
document.getElementById('selObj').style.display="none";
document.getElementById('continue').style.display="none";
document.getElementById('choice1').style.display="block";
document.getElementById('choice2').style.display="block";
document.getElementById('choice3').style.display="block";
}

function showBase(){
document.getElementById('base').style.opacity="1";
}
function continueReading(){
var status = readCookie("userStatus");
if(status == '1'){
window.location = "/a1/home.html";
}
else if(status == '2'){
window.location = "../a2.html";
}
else if(status == '3'){
window.location = "../a3.html";
}
}
function readCookie(cookieName){
var results = document.cookie.match(cookieName + '=(.*?)(;|$)');
if(results){return(results[1]);}
else{return null;}
}
function business(){
document.cookie = "userStatus=1;path=/";
window.location = "/a1/home.html";
}
function blog(){
document.cookie = "userStatus=2;path=/";
window.location = "../a2.html";
}
function pro(){
document.cookie = "userStatus=3;path=/";
window.location = "../a3.html";
}