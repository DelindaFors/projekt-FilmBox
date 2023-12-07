const menuTlacitko = document.querySelector("#menu-tlacitko");
const menuPolozky = document.querySelector("#menu-polozky");

menuTlacitko.addEventListener ("click", () => {
    menuPolozky.innerHTML = "";
    menuPolozky.classList.toggle("show");
    
    const ikona = menuTlacitko.querySelector("i");
    if (menuPolozky.innerHTML === ""){
        ikona.classList.remove("fa-bars");
        ikona.classList.add("fa-xmark");
    } else {
        ikona.classList.remove("fa-xmark");
        ikona.classList.add("fa-bars");
    }

})


