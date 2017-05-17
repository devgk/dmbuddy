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
startLoading();
xhttp.open("GET", "chapter-2-" + num + ".htm?_=" + new Date().getTime(), true);
    
xhttp.send();
window.location = "#";
return null;
}