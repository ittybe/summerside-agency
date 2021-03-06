import css from "./styles.css"
import vars from "./variables.css"
import cssmobile from "./mobile-styles.css"
import cssdesktop from "./desktop-styles.css"

import brands from "../node_modules/@fortawesome/fontawesome-free/js/brands"
import fontawesome from "../node_modules/@fortawesome/fontawesome-free/js/fontawesome"
import solid from "../node_modules/@fortawesome/fontawesome-free/js/solid"

function showHideMenuHeader (){
    var menuBar = document.getElementsByClassName("menu-bar")[0]
    var menuSign = document.getElementsByClassName("menu-sign")[0]
    var properties = window.getComputedStyle(menuBar)
    var displayValue = properties.getPropertyValue("display")
    
    if (displayValue == 'none'){
        menuBar.style.display = "flex"
        menuSign.style.color = "rgba(255,255,255, 0.5)"
        
    }
    else if (displayValue == "flex"){
        menuBar.style.display = "none"
        menuSign.style.color = "rgba(255,255,255, 1)"
    }
}

function removeStyleAttrMenuHeader () {
    if (window.innerWidth >= 768) {
        var menuBar = document.getElementsByClassName("menu-bar")[0]
        var menuSign = document.getElementsByClassName("menu-sign")[0]

        menuBar.removeAttribute("style")
        menuSign.removeAttribute("style")
    }
}

document.getElementsByClassName("menu-sign")[0].addEventListener("click", showHideMenuHeader);
window.onresize = removeStyleAttrMenuHeader