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
    xhttp.open("GET", "chapter-1-1.txt", true);
    xhttp.send();
    setTimeout(startingEnd,10); //Start Chapter
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
    setTimeout(removeEnd,10); //close chapters
}
return null;
}

function startingEnd(){
document.getElementById('previousArticle').style.display = 'none';
document.getElementById('nextArticle').style.width = '98%';
}

function removeEnd(){
document.getElementById('nextArticle').style.display = 'none';
document.getElementById('previousArticle').style.width = '98%';
}