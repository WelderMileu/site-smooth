(function(){
    
    const bars  = document.querySelector(".bars");

    const expandir = () => {
        bars.addEventListener("click", () => {
            const links = document.querySelector(".menu");
            
            links.classList.remove("nav-remove");
            links.classList.toggle("nav-add");
            console.log("Funcioando");
            ocultar()
        });
    }

    const ocultar = () => {
        bars.addEventListener("click", () => {
            const links = document.querySelector(".menu");
            
            links.classList.toggle("nav-remove");
            links.classList.remove("nav-add");
            console.log("Funcioando");
            expandir()
        });
    }
    expandir()
})();