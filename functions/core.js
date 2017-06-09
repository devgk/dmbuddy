//The moment you try to simply the technologies, its becomes more complicated!
//If you spend too much time thinking about a thing, you’ll never get it done.
//I love you SAM. You are my life.

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


function startLoading() {
document.getElementById("loadingScreen").style.display = "block";
}
function removeLoading() {
    try {
        zoomimg();
    }catch (err){}
    setTimeout(noLoad, 200);
}
function noLoad() {
    document.getElementById('loadingScreen').style.opacity = '0';
    setTimeout(endLoading, 150);
}
function endLoading() {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById('loadingScreen').style.opacity = '1';
}

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
function createNav(n) {
    if (n == 1) {
        createLogo(1);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("innerMenu").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "nav1.data?_=" + new Date().getTime(), true);
        xhttp.send();
    }
    if (n == 2) {
        createLogo(2);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("innerMenu").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "nav2.data?_=" + new Date().getTime(), true);
        xhttp.send();
    }
    if (n == 3) {
        createLogo(3);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("innerMenu").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "nav3.data?_=" + new Date().getTime(), true);
        xhttp.send();
    }
}
function toggleMenu(num) {
    y = num;
    if (y == 1) {
        document.getElementById('innerContent').className = 'covered';
        document.getElementById("draw").className = "navMenuLeft is-open";
        document.getElementById('bodyBase').className = 'bodyBase fullCovered';
        document.getElementById('bodyBase').style.marginLeft = '270px';
        document.getElementById('draw').onclick = function () {
            toggleMenu(0)
        };
    }
    if (y == 0) {
        document.getElementById('innerContent').className = '';
        document.getElementById("draw").className = "navMenuLeft is-closed";
        document.getElementById('bodyBase').className = 'bodyBase';
        document.getElementById('bodyBase').style.marginLeft = '0px';
        document.getElementById('draw').onclick = function () {
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
        document.getElementById('plus01').style.backgroundColor = '#fece00';
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
        document.getElementById('plus02').style.backgroundColor = '#fece00';
        document.getElementById('subMenuCont02').onclick = function () {
            toggleSubMenu(2)
        };
    }
}       //Add Submenu

function resetObjective() {
    document.cookie = "userStatus=4;path=/";
    window.location = "/swt.html";
}

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
function continueFlow() {
    document.getElementById('selObj').style.display = "none";
    document.getElementById('continue').style.display = "block";
    document.getElementById('choice1').style.display = "none";
    document.getElementById('choice2').style.display = "none";
    document.getElementById('choice3').style.display = "none";
    removeLoading();
    setTimeout(showBase, 200);
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
function showBase() {
    document.getElementById('infoBase').style.opacity = "1";
}
function continueReading() {
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
function readCookie(cookieName) {
    var results = document.cookie.match(cookieName + '=(.*?)(;|$)');
    if (results) {
        return (results[1]);
    }
    else {
        return null;
    }
}
function business() {
    document.cookie = "userStatus=1;path=/";
    window.location = "/a1/home.html";
}
function blog() {
    document.cookie = "userStatus=2;path=/";
    window.location = "/a2/home.html";
}
function pro() {
    document.cookie = "userStatus=3;path=/";
    window.location = "/a3/home.html";
}

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
}     //Load Chat Script

function notify() {
    var n = readCookie("notify");
    if (n == v) {
        var m = readCookie("notifyRead");
        if (m == '0') {
            showNotify();
        }
        else {}
    }
    else {
        createNotify();
    }
}
function changePath() {
    window.location = "/nft.html";
}
function showNotify() {
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

//-----On Load Script
window.onload = function () {startScript();};
function startScript() {
try {
hammer();
}catch (err) {}   //Load Hammer
try {
loadChapter();
}catch (err) {}   //Load Chapter
notify();                   //Show Notification Message
gooa();                     //Load GA
objCheck();                 //Create Menu
}

//-----Extra Script
function hammer() {
    var bodyBase = document.getElementById('bodyBase');
    var mc = new Hammer(bodyBase);
    mc.on("swiperight", function () {
        setTimeout(toggleMenu, 10, 1);
    });
    mc.on("swipeleft", function () {
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

//-----Load Function------//
function ajaxload(string) {
str = string;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("innerContent").innerHTML =
        this.responseText;
    }
};
startLoading();
xhttp.open("GET", string + "?_=" + new Date().getTime(), true);
    
xhttp.send();
window.location = "#";
return null;
}