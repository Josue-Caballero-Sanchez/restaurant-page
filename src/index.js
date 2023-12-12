import { loadMenu } from "./menu";
import { pageLoad } from "./page-load";
import { loadContact } from "./contact";

const mainModule = (() =>{

    function initialize(){
        const header = document.createElement("h1");
    header.textContent = "Krusty Krab";
    header.classList.toggle("header");
    container.appendChild(header);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.toggle("button-container");
    container.appendChild(buttonsContainer);

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.classList.toggle("navigation-button");
    homeButton.classList.toggle("button-selected");
    homeButton.setAttribute("id", "home-button");
    buttonsContainer.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.toggle("navigation-button");
    menuButton.setAttribute("id", "menu-button");
    buttonsContainer.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.toggle("navigation-button");
    contactButton.setAttribute("id", "contact-button");
    buttonsContainer.appendChild(contactButton);
    }

    let selectedMenu = 1;

    initialize();
    pageLoad();

    let homeButton = document.querySelector("#home-button");
    let menuButton = document.querySelector("#menu-button");
    let contactButton = document.querySelector("#contact-button");
    let containerDiv = document.querySelector("#container");
    

    homeButton.addEventListener("click", homeButtonClickd);
    menuButton.addEventListener("click", menuButtonClicked);
    contactButton.addEventListener("click", contactButtonClicked);

    function homeButtonClickd(){
        if(selectedMenu === 1){
            return;
        }

        if(selectedMenu === 2){
            menuButton.classList.toggle("button-selected");
            homeButton.classList.toggle("button-selected");
        }

        else if(selectedMenu === 3){
            contactButton.classList.toggle("button-selected");
            homeButton.classList.toggle("button-selected");
        }

        clearPage();
        selectedMenu = 1;
        pageLoad();
    }

    function menuButtonClicked(){
        if(selectedMenu === 2){
            return;
        }

        if(selectedMenu === 1){
            homeButton.classList.toggle("button-selected");
            menuButton.classList.toggle("button-selected");
        }

        else if(selectedMenu === 3){
            contactButton.classList.toggle("button-selected");
            menuButton.classList.toggle("button-selected");
        }

        clearPage();
        selectedMenu = 2;
        loadMenu();
    }

    function contactButtonClicked(){
        if(selectedMenu === 3){
            return;
        }

        if(selectedMenu === 1){
            homeButton.classList.toggle("button-selected");
            contactButton.classList.toggle("button-selected");
        }

        else if(selectedMenu === 2){
            menuButton.classList.toggle("button-selected");
            contactButton.classList.toggle("button-selected");
        }

        clearPage();
        selectedMenu = 3;
        loadContact();
    }

    function clearPage(){
        let homeContainer = document.querySelector(".home-container");
        while(homeContainer.firstChild){
            homeContainer.removeChild(homeContainer.firstChild);
        }
        homeContainer.remove();
    }

})()