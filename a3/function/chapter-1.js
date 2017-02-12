function loadChapter(){
chapter1(01);
}

function chapter1(num) {
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
    xhttp.open("GET", "chapter-1-1", true);
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
    xhttp.open("GET", "chapter-1-2", true);
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
    xhttp.open("GET", "chapter-1-3", true);
    xhttp.send();
}
if(x==04){
    startLoading();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("innerContent").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "chapter-1-4", true);
    xhttp.send();
}
if(x==05){
    startLoading();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("innerContent").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "chapter-1-5", true);
    xhttp.send();
}
return null;
}