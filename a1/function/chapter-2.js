function loadChapter(){
chapter2(01);
}

function chapter2(num) {
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
    xhttp.open("GET", "chapter-2-01.htm?_=" + new Date().getTime(), true);
}
if(x==02){
    startLoading();
    xhttp.open("GET", "chapter-2-02.htm?_=" + new Date().getTime(), true);
}
if(x==03){
    startLoading();
    xhttp.open("GET", "chapter-2-03.htm?_=" + new Date().getTime(), true);
}
if(x==04){
    startLoading();
    xhttp.open("GET", "chapter-2-04.htm?_=" + new Date().getTime(), true);
}
if(x==05){
    startLoading();
    xhttp.open("GET", "chapter-2-05.htm?_=" + new Date().getTime(), true);
}
if(x==06){
    startLoading();
    xhttp.open("GET", "chapter-2-06.htm?_=" + new Date().getTime(), true);
}
if(x==07){
    startLoading();
    xhttp.open("GET", "chapter-2-07.htm?_=" + new Date().getTime(), true);
}
if(x==08){
    startLoading();
    xhttp.open("GET", "chapter-2-08.htm?_=" + new Date().getTime(), true);
}
if(x==09){
    startLoading();
    xhttp.open("GET", "chapter-2-09.htm?_=" + new Date().getTime(), true);
}
if(x==10){
    startLoading();
    xhttp.open("GET", "chapter-2-10.htm?_=" + new Date().getTime(), true);
}
if(x==11){
    startLoading();
    xhttp.open("GET", "chapter-2-11.htm?_=" + new Date().getTime(), true);
}
if(x==12){
    startLoading();
    xhttp.open("GET", "chapter-2-12.htm?_=" + new Date().getTime(), true);
}
    
xhttp.send();
window.location = "#";
return null;
}