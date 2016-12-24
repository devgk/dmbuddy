window.onload = function(){startScript();};

function startScript(){
document.getElementById('loadingScreen').style.opacity = '0';
setTimeout(removeLoading, 150);
}

function removeLoading(){
var elem = document.getElementById("loadingScreen");
elem.parentNode.removeChild(elem);
}

function openMenu(){
    document.getElementById('bodyBase').style.marginLeft = '220px';
    document.getElementById('headerLeft').style.marginLeft = '0px';
    document.getElementById('closed').style.display = 'none';
    document.getElementById('opened').style.display = 'block';
}

function closeMenu(){
    document.getElementById('bodyBase').style.marginLeft = '0px';
    document.getElementById('headerLeft').style.marginLeft = '-220px';
    document.getElementById('opened').style.display = 'none';
    document.getElementById('closed').style.display = 'block';
}