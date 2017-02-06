function chapter2(num) {
x=num;    
if(x==01){
    startLoading();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("innerContent").innerHTML =
        this.responseText;
    }
    };
    xhttp.open("GET", "chapter-1-1.txt", true);
    xhttp.send();
}
if(x==02){
    startLoading();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("innerContent").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "chapter-1-2.txt", true);
    xhttp.send();
}
if(x==03){
    startLoading();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("innerContent").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "chapter-1-3.txt", true);
    xhttp.send();
}
return null;
}