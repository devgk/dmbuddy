function runstep(){
document.getElementById("hotsteps").className = "bodyBase hotsteps";
document.getElementById("drawermenu").src = "../images/close.png";
document.getElementById("draw").onclick = closestep;
}
function closestep(){
document.getElementById("hotsteps").className = "bodyBase nohotsteps";
document.getElementById("drawermenu").src = "../images/drawer.png";
document.getElementById("draw").setAttribute('onClick', 'return toggleMenu(1);');
window.location = "#";
}
function zoomimg() {
try {
    var imagehd00 = document.getElementById('imghd00');
    var imz00 = new Hammer(imagehd00);
    imz00.on("doubletap", function () {
        document.getElementById("imgbase00").className = "imgbase";
        document.getElementById("imghd00").className = "imghd";
    });
    imz00.on("press", function () {
        document.getElementById("imgbase00").className = "noimgbase";
        document.getElementById("imghd00").className = "noimghd";
    });
} catch (err){}  //00 - image 1
try {
    var imagehd01 = document.getElementById('imghd01');
    var imz01 = new Hammer(imagehd01);
    imz01.on("doubletap", function () {
        document.getElementById("imgbase01").className = "imgbase";
        document.getElementById("imghd01").className = "imghd";
    });
    imz01.on("press", function () {
        document.getElementById("imgbase01").className = "noimgbase";
        document.getElementById("imghd01").className = "noimghd";
    });
} catch (err){}  //01 - image 2
try {
    var imagehd02 = document.getElementById('imghd02');
    var imz02 = new Hammer(imagehd02);
    imz02.on("doubletap", function () {
        document.getElementById("imgbase02").className = "imgbase";
        document.getElementById("imghd02").className = "imghd";
    });
    imz02.on("press", function () {
        document.getElementById("imgbase02").className = "noimgbase";
        document.getElementById("imghd02").className = "noimghd";
    });
} catch (err){}  //02 - image 3
try {
    var imagehd03 = document.getElementById('imghd03');
    var imz03 = new Hammer(imagehd03);
    imz03.on("doubletap", function () {
        document.getElementById("imgbase03").className = "imgbase";
        document.getElementById("imghd03").className = "imghd";
    });
    imz03.on("press", function () {
        document.getElementById("imgbase03").className = "noimgbase";
        document.getElementById("imghd03").className = "noimghd";
    });
} catch (err){}  //03 - image 4
try {
    var imagehd04 = document.getElementById('imghd04');
    var imz04 = new Hammer(imagehd04);
    imz04.on("doubletap", function () {
        document.getElementById("imgbase04").className = "imgbase";
        document.getElementById("imghd04").className = "imghd";
    });
    imz04.on("press", function () {
        document.getElementById("imgbase04").className = "noimgbase";
        document.getElementById("imghd04").className = "noimghd";
    });
} catch (err){}  //04 - image 5
try {
    var imagehd05 = document.getElementById('imghd05');
    var imz05 = new Hammer(imagehd05);
    imz05.on("doubletap", function () {
        document.getElementById("imgbase05").className = "imgbase";
        document.getElementById("imghd05").className = "imghd";
    });
    imz05.on("press", function () {
        document.getElementById("imgbase05").className = "noimgbase";
        document.getElementById("imghd05").className = "noimghd";
    });
} catch (err){}  //05 - image 6
try {
    var imagehd06 = document.getElementById('imghd06');
    var imz06 = new Hammer(imagehd06);
    imz06.on("doubletap", function () {
        document.getElementById("imgbase06").className = "imgbase";
        document.getElementById("imghd06").className = "imghd";
    });
    imz06.on("press", function () {
        document.getElementById("imgbase06").className = "noimgbase";
        document.getElementById("imghd06").className = "noimghd";
    });
} catch (err){}  //06 - image 7
try {
    var imagehd07 = document.getElementById('imghd07');
    var imz07 = new Hammer(imagehd07);
    imz07.on("doubletap", function () {
        document.getElementById("imgbase07").className = "imgbase";
        document.getElementById("imghd07").className = "imghd";
    });
    imz07.on("press", function () {
        document.getElementById("imgbase07").className = "noimgbase";
        document.getElementById("imghd07").className = "noimghd";
    });
} catch (err){}  //07 - image 8
try {
    var imagehd08 = document.getElementById('imghd08');
    var imz08 = new Hammer(imagehd08);
    imz08.on("doubletap", function () {
        document.getElementById("imgbase08").className = "imgbase";
        document.getElementById("imghd08").className = "imghd";
    });
    imz08.on("press", function () {
        document.getElementById("imgbase08").className = "noimgbase";
        document.getElementById("imghd08").className = "noimghd";
    });
} catch (err){}  //08 - image 9
try {
    var imagehd09 = document.getElementById('imghd09');
    var imz09 = new Hammer(imagehd09);
    imz09.on("doubletap", function () {
        document.getElementById("imgbase09").className = "imgbase";
        document.getElementById("imghd09").className = "imghd";
    });
    imz09.on("press", function () {
        document.getElementById("imgbase09").className = "noimgbase";
        document.getElementById("imghd09").className = "noimghd";
    });
} catch (err){}  //09 - image 10
}
function setupHot(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
        document.getElementById("hotContent").innerHTML =
        this.responseText;
}
};
xhttp.open("GET", "hot.hxx?_=" + new Date().getTime(), true);   
    
xhttp.send();
window.location = "#";
removeLoading();
return null;
}

function hot(num) {
x=num;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
        document.getElementById("hotcontent").innerHTML =
        this.responseText;
}
};
startLoading();
xhttp.open("GET", "hot-" + num + ".htm?_=" + new Date().getTime(), true);
    
xhttp.send();
window.location = "#";
return null;
}

function hotNav(data){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
        document.getElementById("hotContent").innerHTML =
        this.responseText;
}
};
startLoading();
if(data == 1){
xhttp.open("GET", "hot.hxx?_=" + new Date().getTime(), true);
document.getElementById("subTopic-1").className = "active";
document.getElementById("subTopic-2").className = "none";
document.getElementById("subTopic-3").className = "none";
document.getElementById("subTopic-4").className = "none";
document.getElementById("subTopic-5").className = "none";
document.getElementById("subTopic-6").className = "none";
}    
if(data == 2){
xhttp.open("GET", "hot-wp.hxx?_=" + new Date().getTime(), true);
document.getElementById("subTopic-1").className = "none";
document.getElementById("subTopic-2").className = "active";
document.getElementById("subTopic-3").className = "none";
document.getElementById("subTopic-4").className = "none";
document.getElementById("subTopic-5").className = "none";
document.getElementById("subTopic-6").className = "none";
}    
if(data == 3){
xhttp.open("GET", "hot-sm.hxx?_=" + new Date().getTime(), true);
document.getElementById("subTopic-1").className = "none";
document.getElementById("subTopic-2").className = "none";
document.getElementById("subTopic-3").className = "active";
document.getElementById("subTopic-4").className = "none";
document.getElementById("subTopic-5").className = "none";
document.getElementById("subTopic-6").className = "none";
}    
if(data == 4){
xhttp.open("GET", "hot-seo.hxx?_=" + new Date().getTime(), true);
document.getElementById("subTopic-1").className = "none";
document.getElementById("subTopic-2").className = "none";
document.getElementById("subTopic-3").className = "none";
document.getElementById("subTopic-4").className = "active";
document.getElementById("subTopic-5").className = "none";
document.getElementById("subTopic-6").className = "none";
}
if(data == 5){
xhttp.open("GET", "hot-ad.hxx?_=" + new Date().getTime(), true);
document.getElementById("subTopic-1").className = "none";
document.getElementById("subTopic-2").className = "none";
document.getElementById("subTopic-3").className = "none";
document.getElementById("subTopic-4").className = "none";
document.getElementById("subTopic-5").className = "active";
document.getElementById("subTopic-6").className = "none";
}
if(data == 6){
xhttp.open("GET", "hot-extra.hxx?_=" + new Date().getTime(), true);
document.getElementById("subTopic-1").className = "none";
document.getElementById("subTopic-2").className = "none";
document.getElementById("subTopic-3").className = "none";
document.getElementById("subTopic-4").className = "none";
document.getElementById("subTopic-5").className = "none";
document.getElementById("subTopic-6").className = "active";
}
    
xhttp.send();
window.location = "#";
removeLoading();
return null;
}