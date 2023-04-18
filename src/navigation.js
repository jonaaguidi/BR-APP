//  Logica de Navegación
// Llamamos a la funcion "navigator" cuando "load/carga" la app y cuando haya un cambio en el "hash/hashchange".
window.addEventListener(`load`, navigator);
window.addEventListener(`hashchange`, navigator);

// Boton que me redirrecciona al hash pedido.
buttonApp.addEventListener("click", () => location.hash = "#app");

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
  cart.classList.remove("inactive");
};

function homePage() {
  body.classList.remove("inactive");
  app.classList.add("inactive");
  buttonToggle.classList.remove("inactive");
  navbar.classList.remove("inactive");
  cart.classList.add("inactive");
};


// DROPDOWNS 
// Dropdowns Burgers.
let mostrarDivs = false;

containerSubItems.addEventListener("click", function () {
  mostrarDivs = !mostrarDivs;
  if (mostrarDivs) {
    subItem1.classList.remove("inactive");
    subItem2.classList.remove("inactive");
    subItem3.classList.remove("inactive");
    arrow.classList.add("rotate");
  } else {
    subItem1.classList.add("inactive");
    subItem2.classList.add("inactive");
    subItem3.classList.add("inactive");
    simples.classList.add("inactive");
    dobles.classList.add("inactive");
    veggies.classList.add("inactive");
    arrow.classList.remove("rotate");
  }
});

// Dropdown Burgers Simples.
let mostrarDivs2 = false;

subItem1.addEventListener("click", function () {
  mostrarDivs2 = !mostrarDivs2;
  if (mostrarDivs2) {

    simples.classList.remove("inactive");
  } else {
    simples.classList.add("inactive");
  }
});

// Dropwdown Burgers Dobles.
let mostrarDivs3 = false;

subItem2.addEventListener("click", function () {
  mostrarDivs3 = !mostrarDivs3;
  if (mostrarDivs3) {
    dobles.classList.remove("inactive");
  } else {
    dobles.classList.add("inactive");
  }
});

// Dropwdown Burgers Veggies.
let mostrarDivs4 = false;

subItem3.addEventListener("click", function () {
  mostrarDivs4 = !mostrarDivs4;
  if (mostrarDivs4) {
    veggies.classList.remove("inactive");
  } else {
    veggies.classList.add("inactive");
  }
});

// Dropdowns Burgers.
let mostrarDivs5 = false;

entradasContainer.addEventListener("click", function () {
  mostrarDivs5 = !mostrarDivs5;
  if (mostrarDivs5) {
    entradasElement.classList.remove("inactive");
  } else {
    entradasElement.classList.add("inactive");
  }
});
