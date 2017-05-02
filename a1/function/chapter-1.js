function loadChapter(){
chapter1(01);
}

function chapter1(num) {
x=num;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("innerContent").innerHTML =
        this.responseText;
    }
};
    
if(x==01){
    startLoading();
    xhttp.open("GET", "chapter-1-1.htm?_=" + new Date().getTime(), true);
}
if(x==02){
    startLoading();
    xhttp.open("GET", "chapter-1-2.htm?_=" + new Date().getTime(), true);
}
if(x==03){
    startLoading();
    xhttp.open("GET", "chapter-1-3.htm?_=" + new Date().getTime(), true);
}
if(x==04){
    startLoading();
    xhttp.open("GET", "chapter-1-4.htm?_=" + new Date().getTime(), true);
}
if(x==05){
    startLoading();
    xhttp.open("GET", "chapter-1-5.htm?_=" + new Date().getTime(), true);
}
    
xhttp.send();
window.location = "#";
return null;
}