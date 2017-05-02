function guide(num) {
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
    xhttp.open("GET", "wp-1.htm?_=" + new Date().getTime(), true);
}
if(x==02){
    startLoading();
    xhttp.open("GET", "wp-2.htm?_=" + new Date().getTime(), true);
}
if(x==03){
    startLoading();
    xhttp.open("GET", "wp-3.htm?_=" + new Date().getTime(), true);
}
if(x==04){
    startLoading();
    xhttp.open("GET", "wp-4.htm?_=" + new Date().getTime(), true);
}
if(x==05){
    startLoading();
    xhttp.open("GET", "wp-5.htm?_=" + new Date().getTime(), true);
}
if(x==06){
    startLoading();
    xhttp.open("GET", "wp-6.htm?_=" + new Date().getTime(), true);
}
if(x==07){
    startLoading();
    xhttp.open("GET", "wp-7.htm?_=" + new Date().getTime(), true);
}
if(x==08){
    startLoading();
    xhttp.open("GET", "wp-8.htm?_=" + new Date().getTime(), true);
}
if(x==09){
    startLoading();
    xhttp.open("GET", "wp-9.htm?_=" + new Date().getTime(), true);
}
if(x==10){
    startLoading();
    xhttp.open("GET", "wp-10.htm?_=" + new Date().getTime(), true);
}
if(x==11){
    startLoading();
    xhttp.open("GET", "wp-11.htm?_=" + new Date().getTime(), true);
}
if(x==12){
    startLoading();
    xhttp.open("GET", "wp-12.htm?_=" + new Date().getTime(), true);
}
if(x==13){
    startLoading();
    xhttp.open("GET", "wp-13.htm?_=" + new Date().getTime(), true);
}
    
xhttp.send();
window.location = "#";
return null;
}