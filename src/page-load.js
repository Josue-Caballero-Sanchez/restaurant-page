export function pageLoad(){
    const container = document.querySelector("#container");

    //home body
    const homeContainer = document.createElement("div");
    homeContainer.classList.toggle("home-container");
    container.appendChild(homeContainer);

    const homeBodyContainer = document.createElement("div");
    homeBodyContainer.classList.toggle("home-body-container");
    homeContainer.appendChild(homeBodyContainer);

    const homeHeadline = document.createElement("p");
    homeHeadline.textContent = "Home of the Krabby Patty";
    homeBodyContainer.appendChild(homeHeadline);

    const homeHeadline2 = document.createElement("p");
    homeHeadline2.textContent = "Same secret formula since 1999"
    homeBodyContainer.appendChild(homeHeadline2);

    const homeImage = document.createElement("img");
    homeImage.classList.toggle("home-image");
    homeImage.src = "https://vignette3.wikia.nocookie.net/villains/images/3/31/Mr._Krabs.jpg/revision/latest?cb=20131119163828";
    homeBodyContainer.appendChild(homeImage);

    const homeHeadline3 = document.createElement("p");
    homeHeadline3.textContent = "Come visit us in Bikini Bottom";
    homeBodyContainer.appendChild(homeHeadline3);
}