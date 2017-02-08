function runChat(){
setTimeout(alterTawk, 999);
}

function alterTawk(){
try {
document.getElementsByTagName('iframe')[0].style.width = "100%";
document.getElementsByTagName('iframe')[0].style.height = "100%";
document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('formContainer').style.bottom = "0";
document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('formContainer').style.zIndex = "999999999999";
document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('chatPanel').style.zIndex = "999999999999";
setTimeout(removeLoading, 100);
}
catch(err) {
window.location = "/error.html";
}
}