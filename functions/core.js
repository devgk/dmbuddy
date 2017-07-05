//Created by Gaurav Kumar
//Version: 2.0
//core.js >> Core Java Script File
//Copyrighted: DM Buddy | www.webenfolds.com
//The moment you try to simplify the technologies, its becomes more complicated!

//Create Notification
function createNotify() {
document.cookie = "notify=6;path=/";
document.cookie = "notifyRead=0;path=/";
changePath();
}
//Defining Variables
//n and m is a local variable
var g; //Handles chat Loading
var s; //Handles chat Rendering
var v = '6'; //Notify Variable
var check = 0;
//Read Objective Status
function readCookie(cookieName) {
    var results = document.cookie.match(cookieName + '=(.*?)(;|$)');
    if (results) {
        return (results[1]);
    }
    else {
        return null;
    }
}

//Read URL
function getUrlElement(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//Ajax Load
function ajaxload(string, base, quee) { 
    startLoading();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {        
            document.getElementById(base).innerHTML =
            this.responseText;
        }
    };
    xhttp.open("GET", string + "?_=" + new Date().getTime(), true);  
    xhttp.send();
    xhttp.addEventListener("load", function(){transferComplete(quee);}, false);
    window.location = "#";
    return null;
}
function transferComplete(quee){
    if(quee == "topicList"){
        setTimeout(loadTopicList, 99);
    }
    else if(quee == "trackChapterList"){
        setTimeout(trackChapterList, 99);
    }
    else if(quee == "MTList"){
        setTimeout(loadMTList, 99);
    }
    else if(quee == "bindImages"){
        setTimeout(bindImages, 99);
    }
    else{
        setTimeout(removeLoading, 99);
    }
}

//Load Chapter
var chapterNumber;
var topicNumber;
function loadChapter(){
    topicNumber = 1;
    for(i=1;i<=99;i++){
        var chapter = "chapter-" + i + ".html";
        if(window.location.href.indexOf(chapter) > -1) {
            chapterNumber = i;
            break;
        }
        if(i == 99){
            return null;
        }
    }
    var firstTopic = "chapter-" + chapterNumber + "-1.htm"
    
    window.load = ajaxload(firstTopic, "innerContent", "topicList");
}               //Load First Chapter
function loadWPGuide(){
if(window.location.href.indexOf("wp.html") > -1) {
window.load = ajaxload("chapter-1-1.htm", "innerContent", "topicList");
chapterNumber = 1;
}
else{
return null;
}
}               //Load Guide
function loadTopicList(){
var chapterTopicList = "chapter-" + chapterNumber + "-tl.dhtml";
window.onload = ajaxload(chapterTopicList, "listBase", "trackChapterList");
}             //Loading Chapter Topic List

//Tracking Topic
function trackChapterList(){
window.onload = trackList();
}
function trackList(){
var topicTab = "tl" + topicNumber;
for(i=0; i<99; i++){
    try{
        var tempTopicTab = "tl" + i;
        document.getElementById(tempTopicTab).className = "topicList";
    }catch (err) {}
}
document.getElementById(topicTab).className = "topicList active";
window.onload = removeLoading();
}

//Navigate Chapter Topic
function next(){
topicNumber++;
var subtopic = "chapter-" + chapterNumber + "-" + topicNumber + ".htm";
ajaxload(subtopic, "innerContent", "topicList");
}
function back(){
topicNumber--;
var subtopic = "chapter-" + chapterNumber + "-" + topicNumber + ".htm";
ajaxload(subtopic, "innerContent", "topicList");
}
function loadTopic(num){
topicNumber = num;
var subtopic = "chapter-" + chapterNumber + "-" + topicNumber + ".htm";
ajaxload(subtopic, "innerContent", "topicList");
}

//Start Loading
function startLoading() {
document.getElementById("loadingScreen").style.display = "block";
}

//Mislaneous Topic List
function loadMTList(){
    MTListNav(1);
}

//Advance Loading
function loadQuerry(){
    if(window.location.href.indexOf("/hot.html") > -1 ||
       window.location.href.indexOf("/dmp.html") > -1) {
        loadSubTopic();
    }
    else{
        return null;
    }
}
function loadSubTopic(){
    var subTopic = getUrlElement('topic_code');
    var topicCode;
    if(subTopic == null){
        window.location = "/index.html";
    }
    else if(subTopic == ""){
        window.location = "/index.html";
    }
    else{
        topicCode = subTopic + ".htm";
        window.onload = ajaxload(topicCode, "fullScreenContent", "bindImages");
    }
}
function bindImages(){
    window.onload = zoomimg();
}

//Topicl List Navaigation [HOT - DMP]
function MTListNav(data){
    switch(data){
        case 1:
        ajaxload("all-topic-list.dhtml", "subContent", "stop");
        document.getElementById("MTList-1").className = "active";
        document.getElementById("MTList-2").className = "dark";
        document.getElementById("MTList-3").className = "dark";
        document.getElementById("MTList-4").className = "dark";
        document.getElementById("MTList-5").className = "dark";
        document.getElementById("MTList-6").className = "dark";
        break;
        case 2:
        ajaxload("wp-topic-list.dhtml", "subContent", "stop");
        document.getElementById("MTList-1").className = "dark";
        document.getElementById("MTList-2").className = "active";
        document.getElementById("MTList-3").className = "dark";
        document.getElementById("MTList-4").className = "dark";
        document.getElementById("MTList-5").className = "dark";
        document.getElementById("MTList-6").className = "dark";
        break;
        case 3:
        ajaxload("sm-topic-list.dhtml", "subContent", "stop");
        document.getElementById("MTList-1").className = "dark";
        document.getElementById("MTList-2").className = "dark";
        document.getElementById("MTList-3").className = "active";
        document.getElementById("MTList-4").className = "dark";
        document.getElementById("MTList-5").className = "dark";
        document.getElementById("MTList-6").className = "dark";
        break;
        case 4:
        ajaxload("seo-topic-list.dhtml", "subContent", "stop");
        document.getElementById("MTList-1").className = "dark";
        document.getElementById("MTList-2").className = "dark";
        document.getElementById("MTList-3").className = "dark";
        document.getElementById("MTList-4").className = "active";
        document.getElementById("MTList-5").className = "dark";
        document.getElementById("MTList-6").className = "dark";
        break;
        case 5:
        ajaxload("ad-topic-list.dhtml", "subContent", "stop");
        document.getElementById("MTList-1").className = "dark";
        document.getElementById("MTList-2").className = "dark";
        document.getElementById("MTList-3").className = "dark";
        document.getElementById("MTList-4").className = "dark";
        document.getElementById("MTList-5").className = "active";
        document.getElementById("MTList-6").className = "dark";
        break;
        case 6:
        ajaxload("other-topic-list.dhtml", "subContent", "stop");
        document.getElementById("MTList-1").className = "dark";
        document.getElementById("MTList-2").className = "dark";
        document.getElementById("MTList-3").className = "dark";
        document.getElementById("MTList-4").className = "dark";
        document.getElementById("MTList-5").className = "dark";
        document.getElementById("MTList-6").className = "active";
        break;
    }
}

//Remove Loading
function continueFlow() {
    document.getElementById('selObj').style.display = "none";
    document.getElementById('continue').style.display = "block";
    document.getElementById('choice1').style.display = "none";
    document.getElementById('choice2').style.display = "none";
    document.getElementById('choice3').style.display = "none";
    removeLoading();
    setTimeout(showBase, 200);
}
function removeLoading() {
    if (document.readyState === "complete") {
        window.onload = noLoad();
    }else{
        setTimeout(removeLoading, 99);
    }
}
function noLoad() {
    document.getElementById('loadingScreen').style.opacity = '0';
    myMsgStatus();
    setTimeout(endLoading, 150);
}
function endLoading() {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById('loadingScreen').style.opacity = '1';
}

//Create Logo
function createLogo(n) {
    if (n == 1) {
        var UID = {
            _current: 0
            , getNew: function () {
                this._current++;
                return this._current;
            }
        };
        HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
            var _this = this;
            var _sheetId = "pseudoStyles";
            var _head = document.head || document.getElementsByTagName('head')[0];
            var _sheet = document.getElementById(_sheetId) || document.createElement('style');
            _sheet.id = _sheetId;
            var className = "pseudoStyle" + UID.getNew();
            _this.className += " " + className;
            _sheet.innerHTML += "\n." + className + ":" + element + "{" + prop + ":" + value + "}";
            _head.appendChild(_sheet);
            return this;
        };
        var logo = document.getElementById("logo");
        try{
        logo.pseudoStyle("after", "content", "'BUSINESS PROMOTION'");
        }catch(err) {}
    }
    if (n == 2) {
        var UID = {
            _current: 0
            , getNew: function () {
                this._current++;
                return this._current;
            }
        };
        HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
            var _this = this;
            var _sheetId = "pseudoStyles";
            var _head = document.head || document.getElementsByTagName('head')[0];
            var _sheet = document.getElementById(_sheetId) || document.createElement('style');
            _sheet.id = _sheetId;
            var className = "pseudoStyle" + UID.getNew();
            _this.className += " " + className;
            _sheet.innerHTML += "\n." + className + ":" + element + "{" + prop + ":" + value + "}";
            _head.appendChild(_sheet);
            return this;
        };
        var logo = document.getElementById("logo");
        try{
        logo.pseudoStyle("after", "content", "'MAKE MONEY ONLINE'");
        }catch(err) {}
    }
    if (n == 3) {
        var UID = {
            _current: 0
            , getNew: function () {
                this._current++;
                return this._current;
            }
        };
        HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
            var _this = this;
            var _sheetId = "pseudoStyles";
            var _head = document.head || document.getElementsByTagName('head')[0];
            var _sheet = document.getElementById(_sheetId) || document.createElement('style');
            _sheet.id = _sheetId;
            var className = "pseudoStyle" + UID.getNew();
            _this.className += " " + className;
            _sheet.innerHTML += "\n." + className + ":" + element + "{" + prop + ":" + value + "}";
            _head.appendChild(_sheet);
            return this;
        };
        var logo = document.getElementById("logo");
        try{
        logo.pseudoStyle("after", "content", "'BECOME A WEBMASTER'");
        }catch(err) {}
    }
}
//Create Navigation Menu
function createNav(n) {
    if (n == 1) {
        createLogo(1);
        try {
            ajaxload("nav1.data", "innerMenu", "stop");
        } catch (err) {}
    }
    if (n == 2) {
        createLogo(2);
        try {
            ajaxload("nav2.data", "innerMenu", "stop");
        } catch (err) {}
    }
    if (n == 3) {
        createLogo(3);
        try {ajaxload(
            "nav3.data", "innerMenu", "stop");
        } catch (err) {}
    }
}
//Toggle Menu
function toggleMenu(num) {
    y = num;
    if (y == 1) {
        document.getElementById("navigation").style.transitionDuration = "0.15s";
        document.getElementById("drawer").style.backgroundColor = 'rgba(0,0,0,0.5)';
        document.getElementById("navigation").style.marginLeft = '0';
        document.getElementById("content").style.marginLeft = '270px';
        document.getElementById("cover").style.zIndex = '9';
        document.getElementById("cover").style.opacity = '1';
        document.getElementById("cover").style.marginLeft = '270px';
        document.getElementById('drawer').onclick = function () {
            toggleMenu(0)
        };
    }
    if (y == 0) {
        document.getElementById("navigation").style.transitionDuration = "0.6s";
        document.getElementById("drawer").style.backgroundColor = 'rgba(0,0,0,0.2)';
        document.getElementById("content").style.marginLeft = '0';
        document.getElementById("navigation").style.marginLeft = '-270px';
        document.getElementById("cover").style.zIndex = '-9';
        document.getElementById("cover").style.opacity = '0';
        document.getElementById("cover").style.marginLeft = '0';
        document.getElementById('drawer').onclick = function () {
            toggleMenu(1)
        };
    }
}
function toggleSubMenu(num) {
    x = num;
    //-------------menu1
    if (x == 1) {
        document.getElementById('subMenu01').style.display = 'block';
        document.getElementById('plus01').style.webkitTransform = 'rotate(45deg)';
        document.getElementById('plus01').style.backgroundColor = '#E36C46';
        document.getElementById('subMenuCont01').onclick = function () {
            toggleSubMenu(0)
        };
    }
    if (x == 0) {
        document.getElementById('subMenu01').style.display = 'none';
        document.getElementById('plus01').style.webkitTransform = 'rotate(0)';
        document.getElementById('plus01').style.backgroundColor = '#FFC800';
        document.getElementById('subMenuCont01').onclick = function () {
            toggleSubMenu(1)
        };
    }
    //-------------menu2
    if (x == 2) {
        document.getElementById('subMenu02').style.display = 'block';
        document.getElementById('subMenu03').style.display = 'block';
        document.getElementById('plus02').style.webkitTransform = 'rotate(45deg)';
        document.getElementById('plus02').style.backgroundColor = '#E36C46';
        document.getElementById('subMenuCont02').onclick = function () {
            toggleSubMenu(3)
        };
    }
    if (x == 3) {
        document.getElementById('subMenu02').style.display = 'none';
        document.getElementById('subMenu03').style.display = 'none';
        document.getElementById('plus02').style.webkitTransform = 'rotate(0)';
        document.getElementById('plus02').style.backgroundColor = '#FFC800';
        document.getElementById('subMenuCont02').onclick = function () {
            toggleSubMenu(2)
        };
    }
}

//Objective Management
function resetObjective() {
    document.cookie = "userStatus=4;path=/";
    window.location = "/swt.html";
}

//TFD Start
function autoChk() {
    var status = readCookie("userStatus");
    if (status == '1') {
        setTimeout(continueFlow, 10);
    }
    else if (status == '2') {
        setTimeout(continueFlow, 10);
    }
    else if (status == '3') {
        setTimeout(continueFlow, 10);
    }
    else {
        setTimeout(userSetup, 10);
    }
}
function userSetup() {
    document.getElementById('one').innerHTML = "Welcome to DM BUDDY";
    document.getElementById('welcomeNote').innerHTML = "Thanks for chosing <b>DM BUDDY</b>! Please select your objective, so that we can serve you the perfect digital marketing study materials.";
    document.getElementById('selObj').style.display = "block";
    document.getElementById('continue').style.display = "none";
    document.getElementById('choice1').style.display = "none";
    document.getElementById('choice2').style.display = "none";
    document.getElementById('choice3').style.display = "none";
    removeLoading();
    setTimeout(showBase, 100);
}

//TFD Management
function selectObj() {
    document.getElementById('one').innerHTML = "Select your objective";
    document.getElementById('welcomeNote').style.display = "none";
    document.getElementById('onNext').style.display = "none";
    document.getElementById('selObj').style.display = "none";
    document.getElementById('continue').style.display = "none";
    document.getElementById('choice1').style.display = "block";
    document.getElementById('choice2').style.display = "block";
    document.getElementById('choice3').style.display = "block";
}
function business() {
    document.cookie = "userStatus=1;path=/";
    continueReading();
}
function blog() {
    document.cookie = "userStatus=2;path=/";
    continueReading();
}
function pro() {
    document.cookie = "userStatus=3;path=/";
    continueReading();
}
function showBase() {
document.getElementById('infoBase').style.opacity = "1";
}
function continueReading() {
    notify();
    if(check == 1){
        var status = readCookie("userStatus");
        if (status == '1') {
            window.location = "/a1/home.html";
        }
        else if (status == '2') {
            window.location = "/a2/home.html";
        }
        else if (status == '3') {
            window.location = "/a3/home.html";
        }
    }
}

//Check Obejective
function objCheck() {
    try {
        var status = readCookie("userStatus");
        if (status == '1') {
            setTimeout(createNav, 1, 1);
        }
        else if (status == '2') {
            setTimeout(createNav, 1, 2);
        }
        else if (status == '3') {
            setTimeout(createNav, 1, 3);
        }
        else {
            window.location = "/tfd.html";
        }
    }
    catch (err) {}
}

//Load Home Pages
function loadHome(){
    if(window.location.href.indexOf("/home.html") > -1) {
        window.load = ajaxload("home.htm", "innerContent", "stop");
    }
    else if(window.location.href.indexOf("-home.html") > -1) {
        window.load = ajaxload("home.htm", "innerContent", "MTList");
    }
    else{
        return null;
    }
}

//Notification Management
function notify() {
    var n = readCookie("notify");
    if (n == v) {
        var m = readCookie("notifyRead");
        if (m == '0') {
            showNotify();
        }
        else {
            check = 1;
            return null;
        }
    }
    else {
        createNotify();
    }
}
function changePath() {
    window.location = "/nft.html";
}
function showNotify() {
    if(window.location.href.indexOf("nft.html") > -1) {
        document.cookie = "notifyRead=1;path=/";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("msgNotify").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", v, true);
        xhttp.send();
        showBase();
        removeLoading();
    }
    else {
        return null;
    }
return null;
}

//-----Extra Script
function hammer() {
    var bodyBase = document.getElementById('content');
    var coverBase = document.getElementById('cover');
    var mc = new Hammer(bodyBase);
    mc.on("swiperight", function () {
        setTimeout(toggleMenu, 10, 1);
    });
    var cc = new Hammer(coverBase);
    cc.on("swipeleft", function () {
        setTimeout(toggleMenu, 10, 0);
    });
}
function gooa() {
    try {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o)
                , m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-91432347-1', 'auto');
        ga('send', 'pageview');
    }
    catch (err) {}
}
function zoomimg(){
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

//MSG Management
function myMsgStatus(){
    if(window.location.href.indexOf("/dmp-home.html") > -1){
        myStatus('dmp-home');
    }
    else if(window.location.href.indexOf("a1/home.html") > -1){
        myStatus('a1-home');
    }
    else if(window.location.href.indexOf("a2/home.html") > -1){
        myStatus('a2-home');
    }
    else{
        return null;
    }
}
function myStatus(messageName){
    var cookieString = "msg-" + messageName;
    var status = readCookie(cookieString);
    if (status == '1') {
        document.getElementById(messageName).style.display = "none";
    }
}

function closeMsg(messageName){
var cookieString = "msg-" + messageName + "=1;path=/";
document.cookie = cookieString;
closingMsg(messageName);
}
function closingMsg(messageName){
document.getElementById("msgIMG").style.display = "none";
document.getElementById("msgP").style.display = "none";
document.getElementById("msgCLOSE").style.display = "none";
document.getElementById(messageName).style.opacity = "0";
document.getElementById(messageName).style.height = "0";
document.getElementById(messageName).style.padding = "0";
}


//load External Resource
function loadExternalResource(){
try{
    document.getElementById("appframe");
    document.getElementById("drawermenu").src = "../images/close.png";
    document.getElementById("drawer").onclick = continueReading;
}catch (err) {
return null;
}
}
 
//-----On Load Script
function startScript() {
try {
hammer();
}catch (err) {}   //Load Hammer
objCheck();                 //Create Menu
gooa();                     //Load GA
try {
    loadChapter();
}catch (err) {}   //Load Chapter
try {
    loadWPGuide();
}catch (err) {}   //Load Guide
try {
    loadHome();
}catch (err) {}   //Load Home Page
try {
    loadQuerry();
}catch (err) {}   //Load Querry
try {
    loadExternalResource();
}catch (err) {}   //Load External
}

//Chat Script
function runChat() {
    setTimeout(alterTk, 999);
    g = 0;
    s = 0;
}     //Run Chat Script
function evsec() {
    if (s < 7200) {
        document.getElementsByTagName('iframe')[0].style.width = "100%";
        document.getElementsByTagName('iframe')[0].style.height = "100%";
        document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('formContainer').style.bottom = "0";
        document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('formContainer').style.zIndex = "999999999999";
        document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('chatPanel').style.zIndex = "999999999999";
        s = s + 1;
    }
    if (s == 7200) {
        s = 0;
    }
    setTimeout(evsec, 500);
}       //Render Chat Script
function alterTk() {
    if (g < 8) {
        try {
            document.getElementsByTagName('iframe')[0].style.width = "100%";
            document.getElementsByTagName('iframe')[0].style.height = "100%";
            document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('formContainer').style.bottom = "0";
            document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('formContainer').style.zIndex = "999999999999";
            document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('chatPanel').style.zIndex = "999999999999";
            g = 9;
            setTimeout(removeLoading, 100);
            document.getElementById("drawermenu").src = "../images/close.png";
            document.getElementById("draw").onclick = continueReading;
            setTimeout(evsec, 500);
        }
        catch (err) {
            g = g + 1;
        }
        setTimeout(alterTk, 5999);
    }
    if (g == 8) {
        window.location = "/error.html";
    }
}  