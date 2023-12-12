export function loadMenu(){
    const container = document.querySelector("#container");

    const homeContainer = document.createElement("div");
    homeContainer.classList.toggle("home-container");
    container.appendChild(homeContainer);

    const homeBodyContainer = document.createElement("div");
    homeBodyContainer.classList.toggle("home-body-container");
    homeBodyContainer.classList.toggle("menu-container");
    homeContainer.appendChild(homeBodyContainer);

    const homeHeadline = document.createElement("p");
    homeHeadline.textContent = "Menu";
    homeBodyContainer.appendChild(homeHeadline);

    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.toggle("menu-item-container");
    homeBodyContainer.appendChild(menuItemContainer);

    const menuItem1 = document.createElement("p");
    menuItem1.classList.toggle("menu-item");
    menuItem1.textContent = "Krabby Patty...................................$1.25";
    menuItemContainer.appendChild(menuItem1);

    const menuItem2 = document.createElement("p");
    menuItem2.classList.toggle("menu-item");
    menuItem2.textContent = "Krabby Patty w/Sea Cheese..........$1.25";
    menuItemContainer.appendChild(menuItem2);

    const menuItem3 = document.createElement("p");
    menuItem3.classList.toggle("menu-item");
    menuItem3.textContent = "Double Krabby Patty.......................$2.00";
    menuItemContainer.appendChild(menuItem3);

    const menuItem4 = document.createElement("p");
    menuItem4.classList.toggle("menu-item");
    menuItem4.textContent = "Double Krabby Patty w/Sea Cheese........................$2.00";
    menuItemContainer.appendChild(menuItem4);

    const menuItem5 = document.createElement("p");
    menuItem5.classList.toggle("menu-item");
    menuItem5.textContent = "Triple Krabby Patty.........................$3.00";
    menuItemContainer.appendChild(menuItem5);

    const menuItem6 = document.createElement("p");
    menuItem6.classList.toggle("menu-item");
    menuItem6.textContent = "Triple Krabby Patty w/Sea Cheese........................$3.25";
    menuItemContainer.appendChild(menuItem6);

    const menuItem7 = document.createElement("p");
    menuItem7.classList.toggle("menu-item");
    menuItem7.textContent = "Coral Bits........................................$1.00";
    menuItemContainer.appendChild(menuItem7);

    const menuItem8 = document.createElement("p");
    menuItem8.classList.toggle("menu-item");
    menuItem8.textContent = "Kelp Rings......................................$1.00";
    menuItemContainer.appendChild(menuItem8);
}