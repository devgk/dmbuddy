var g;
var s;

function runChat(){
setTimeout(alterTawk, 999);
g = 0;
s = 0;
}

function evsec(){
if(s < 7200){
    document.getElementsByTagName('iframe')[0].style.width = "100%";
    document.getElementsByTagName('iframe')[0].style.height = "100%";
    document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('formContainer').style.bottom = "0";
    document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('formContainer').style.zIndex = "999999999999";
    document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('chatPanel').style.zIndex = "999999999999";
    s = s + 1;
}
if(s == 7200){
window.location = "z_ask.html";
}
setTimeout(evsec, 500);
}

function alterTawk(){
if(g < 8){
    try {
        document.getElementsByTagName('iframe')[0].style.width = "100%";
        document.getElementsByTagName('iframe')[0].style.height = "100%";
        document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('formContainer').style.bottom = "0";
        document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('formContainer').style.zIndex = "999999999999";
        document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('chatPanel').style.zIndex = "999999999999";
        g = 9;
        setTimeout(removeLoading, 100);
        setTimeout(evsec, 500);
        }
    catch(err) {
        g = g + 1;
        }
    setTimeout(alterTawk, 5999);
}
if(g == 8){
window.location = "/error.html";
}
}