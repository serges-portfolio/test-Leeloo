var modal = document.getElementById("modal-window");
var widget = document.getElementById("widget");
var button = document.getElementById("show-modal-button");
var widgetShow = document.getElementById("show-widget");
var closeButton = document.getElementsByClassName("close")[0];
var closeX = document.getElementsByClassName("closex")[0];

button.onclick = function () {
    modal.style.display = "block";
};

closeButton.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


// for widget
widgetShow.onmouseenter = function () {
    widget.style.display = "block";

};

closeX.onclick = function () {
    widget.style.display = "none";
};

/*widgetShow.onmouseenter = function() {
    widgetShow.classList.add("invisible");
    widget.style.display = "block";
    widgetShow.onmouseleave = function () {
        widgetShow.style.display = "none";
    }
};*/


/*
window.onclick = function (event) {
    if (event.target == widget) {
        widget.style.display = "none";
    }
};*/
