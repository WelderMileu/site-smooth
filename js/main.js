(function(){
    
    const bars  = document.querySelector(".bars");

    const expandir = () => {
        bars.addEventListener("click", () => {
            const links = document.querySelector(".menu");
            
            links.classList.remove("nav-remove");
            links.classList.toggle("nav-add");
            ocultar()
        });
    }

    const ocultar = () => {
        bars.addEventListener("click", () => {
            const links = document.querySelector(".menu");
            
            links.classList.toggle("nav-remove");
            links.classList.remove("nav-add");
            expandir()
        });
    }
    expandir();

    jQuery(function($){
        $('#cel').mask('(999)9999-9999');
        $('#tel').mask('(999)99999-9999');
    })
})();