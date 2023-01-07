var navbar = document.getElementById("navbar");
var stickyN = navbar.offsetTop

var potpis = document.getElementById("potpis")
var nameReal = document.getElementById("name-real")

var video = document.getElementById("video")
var video2 = document.getElementById("video-first")

var container = document.getElementById("brand-container")

var text = document.getElementsByClassName("text");
var rows = document.getElementsByClassName("row");

var pictures = document.getElementsByClassName("img")
var text = document.getElementsByClassName("text")

var posters = document.getElementsByClassName("poster-img")
var posterThumbs = document.getElementsByClassName("poster-thumb")

var offset = updateOffset()

function textSticky() {
    if (window.pageYOffset >= stickyN) {
        for (let i = 0; i < text.length; i++) {
            text[i].classList.add("sticky-text")
        }
    }else{
        for (let i = 0; i < text.length; i++) {
            text[i].classList.remove("sticky-text")
        }
    }
}

function myFunction() {
    if (window.pageYOffset >= stickyN) {
        navbar.classList.add("sticky")
    }else {
        navbar.classList.remove("sticky");
        }
}

function myFunctionB(x) {
    x.text.classList.add("text-hover");
}

function myFunctionC(x) {
    x.text.classList.remove("text-hover");
}

function imgHover(x) {
    if(offset < 820){
        x.classList.add("unhovered");
    }
}

function imgDeHover(x) {
    if(offset < 820 || offset > 1400){
        x.classList.remove("unhovered");
    }
}

function rowHover(x) {
    if(offset < 820){
        parent = x.parentElement;
        parent.classList.add("hovered-row");
    }
}

function rowDeHover(x) {
    if(offset < 820 || offset > 1400){
    parent = x.parentElement;
        parent.classList.remove("hovered-row");
    }
}

function containerAdjust(x) {
    if(offset < 820){
        x.style.transition = 'all 1s'
        x.style.maxWidth = '50%'
    }
}

function containerDeadjust(x) {
    if(offset < 820 || offset > 1400){
        x.style.transition = 'all 1s'
        x.style.maxWidth = '100%'
    }
}

function textHover(x) {
    x.classList.add("text-hover");
}

function textDeHover(x) {
    x.classList.remove("text-hover");
}

function myFunctionV(x) {
    x.classList.remove("video-first");
    x.classList.add("video");
}

function updateOffset(){
    return window.pageYOffset
}

function hoverRegulate() {
    
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].addEventListener("mouseover", function() {textHover(text[i])})
        pictures[i].addEventListener("mouseout", function() {textDeHover(text[i])});
        
        pictures[i].addEventListener("mouseover", function() {hoverImg(pictures[i])})
        pictures[i].addEventListener("mouseout", function() {dehoverImg()})
        
        pictures[i].addEventListener("mouseover", function() {containerAdjust(container)})
        pictures[i].addEventListener("mouseout", function() {containerDeadjust(container)})
        
        pictures[i].addEventListener("mouseover", function() {rowHover(pictures[i])})
        pictures[i].addEventListener("mouseout", function() {rowDeHover(pictures[i])})
    }
}


function hoverImg(x) {
    for (let i = 0; i < pictures.length; i++) {
        imgHover(pictures[i])
    }imgDeHover(x)
}

function dehoverImg() {
    for (let i = 0; i < pictures.length; i++) {
        imgDeHover(pictures[i])
    }
}

function activate(x) {
    for (let i = 0; i < posters.length; i++) {
        textDeHover(posters[i])
    }textHover(x)
}

for (let i = 0; i < posters.length; i++) {
    posterThumbs[i].addEventListener("click", function() {activate(posters[i])})
}

video.addEventListener("mouseover", function() {myFunctionV(video)})

potpis.addEventListener("mouseover", function() {textHover(nameReal)})
potpis.addEventListener("mouseout", function() {textDeHover(nameReal)});

var dropdown = document.getElementsByClassName("menu");
var more = document.getElementsByClassName("more");
var stickyD = dropdown[0].offsetTop
dropdownShown = false

function showDropdown() {
    if(!dropdownShown){
        for (let i = 0; i < dropdown.length; i++) {
            dropdown[i].classList.remove("dropdown-hidden")
            more[0].classList.add("more-drop")
        }

        dropdownShown = true
    }else{
        for (let i = 0; i < dropdown.length; i++) {
            dropdown[i].classList.add("dropdown-hidden")
            more[0].classList.remove("more-drop")
        }

        dropdownShown = false
    }
}

function myFunctionDropdown() {
        if (window.pageYOffset >= 150) {
            dropdown[0].classList.add("sticky")
            more[0].classList.add("sticky")
        }else {
            dropdown[0].classList.remove("sticky");
            more[0].classList.remove("sticky");
        }
}

window.onscroll = function() {myFunction(), textSticky(); offset = updateOffset(); hoverRegulate(); myFunctionDropdown(); console.log(dropdown)};

