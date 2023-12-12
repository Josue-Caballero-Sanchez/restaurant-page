export function loadContact(){
    const container = document.querySelector("#container");

    const homeContainer = document.createElement("div");
    homeContainer.classList.toggle("home-container");
    container.appendChild(homeContainer);

    const homeBodyContainer = document.createElement("div");
    homeBodyContainer.classList.toggle("home-body-container");
    homeContainer.appendChild(homeBodyContainer);

    const homeHeadline = document.createElement("p");
    homeHeadline.textContent = "Contact";
    homeBodyContainer.appendChild(homeHeadline);

    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.toggle("menu-item-container");
    homeBodyContainer.appendChild(menuItemContainer);

    const menuItem1 = document.createElement("p");
    menuItem1.classList.toggle("menu-item");
    menuItem1.textContent = "Phone: 123 456 7891";
    menuItemContainer.appendChild(menuItem1);

    const menuItem2 = document.createElement("p");
    menuItem2.classList.toggle("menu-item");
    menuItem2.textContent = "Address: 1234 w conch street";
    menuItemContainer.appendChild(menuItem2);
}