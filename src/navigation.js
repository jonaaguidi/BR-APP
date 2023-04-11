//  Logica de Navegación.
//  Location: Es una propiedad de JS en el browser, que nos permite leer la URL donde nos encontramos.
//  Hash navigation: "window.onhashchange o Element.addEventListener(`hashchange`, nameFunction);" nos permite ejecutar cierto codigo cada vez que cambie nuestro "hash".

// Llamamos a la funcion "navigator" cuando "load/carga" la app y cuando haya un cambio en el "hash/hashchange"
window.addEventListener(`load`, navigator);
window.addEventListener(`hashchange`, navigator);

// Hago que lo botones me redireccionen al hash pedido.
buttonApp.addEventListener("click", () => location.hash = "#app");

//  Lo que queremos hacer es "Leer" el "hash" donde nos encontramos y dependiendo ese "hash" mostrar cierta información que necesitemos.
//  Funcion "navigator" la llamare cuando inicie la app y cada vez que cambie el "hash". 
//  Dentro tendremos una validacion de las URLS donde si "location.hash.startswith(...)" el hash inicia con determinado parametro, realizara cierta acción, estas acciones son "Manipular el DOM y sus clases" para mostrar o ocultar determinados elementos.

function navigator() {
    location.hash.startsWith(`#app`) ? appPage() :
    location.hash.startsWith(``) ||
    location.hash.startsWith(`#header-navbar`) ||
    location.hash.startsWith(`#hero`) ||
    location.hash.startsWith(`#burgers`) ||
    location.hash.startsWith(`#testimonials`) ||
    location.hash.startsWith(`#local`) ?
    homePage() : null;
};


function appPage() {
    body.classList.add("inactive");
    app.classList.remove("inactive");
    buttonToggle.classList.add("inactive");
    navbar.classList.add("inactive");
};

function homePage() {
    body.classList.remove("inactive");
    app.classList.add("inactive");
    buttonToggle.classList.remove("inactive");
    navbar.classList.remove("inactive");
};