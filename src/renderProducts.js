// RENDERIZO LOS PRODUCTOS DINAMICAMENTE AL HTML A TRAVÉS DE UN OBJETO EN JS (products.js) + MODAL de EXTRAS

// BURGERS SIMPLES
const burgersSimplesElement = document.getElementById("burgers-simples");

for (var productId in burgersSimples) {
  if (burgersSimples.hasOwnProperty(productId)) {
    var product = burgersSimples[productId];

    // Crear un elemento HTML para el producto
    var productElement = document.createElement("div");
    productElement.classList.add("menu-dropdowns_card");
    productElement.innerHTML = `
      <div class="cards">
        <p class="title">
          <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" width="32px" height="30px" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path fill="darkred" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          ${product.name}
        </p>
        <p class="description">${product.description}</p>
        <p class="price"><strong>DESDE $${product.price}</strong></p>
        <button id="addToCart" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#simples-${productId}"> Añadir al Carrito </button>
        <!-- Modal -->
        <div class="modal fade" id="simples-${productId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" style="color:black" id="exampleModalLabel">Eligí una opción 👇</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <button type="button" class="btn btn-secondary">${extras[1].name} - $${product.price + extras[1].price}</button>
                <button type="button" class="btn btn-secondary">${extras[2].name} - $${product.price + extras[2].price}</button>
                <button type="button" class="btn btn-secondary">${extras[3].name} - $${product.price + extras[3].price}</button>
                <button type="button" class="btn btn-secondary">${extras[4].name} - $${product.price + extras[4].price}</button>
                <button type="button" class="btn btn-secondary">${extras[5].name} - $${product.price + extras[5].price}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Agregar el elemento del producto al contenedor de productos
    burgersSimplesElement.appendChild(productElement);
  }
}


// BURGERS DOBLES

const burgersDoblesElement = document.getElementById("burgers-dobles");

for (var productId in burgersDobles) {
    if (burgersDobles.hasOwnProperty(productId)) {
        var product = burgersDobles[productId];

        // Crear un elemento HTML para el producto
        var productElement = document.createElement("div");
        productElement.classList.add("menu-dropdowns_card");
        productElement.innerHTML = `
        <div class="cards">
        <p class="title">
        <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" width="32px" height="30px" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path fill="darkred" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
          ${product.name}
        </p>
          <p class="description">${product.description}</p>
          <p class="price"><strong>DESDE $${product.price}</strong></p>
          <button type="button" class="btn btn-primary" id="addToCart" data-bs-toggle="modal" data-bs-target="#dobles-${productId}"> Añadir al Carrito </button>
          <!-- Modal -->
          <div class="modal fade" id="dobles-${productId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" style="color:black" id="exampleModalLabel">Eligí una opción 👇</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <button type="button" class="btn btn-secondary">${extras[1].name} - $${product.price + extras[1].price}</button>
                            <button type="button" class="btn btn-secondary">${extras[2].name} - $${product.price + extras[2].price}</button>
                            <button type="button" class="btn btn-secondary">${extras[3].name} - $${product.price + extras[3].price}</button>
                            <button type="button" class="btn btn-secondary">${extras[4].name} - $${product.price + extras[4].price}</button>
                            <button type="button" class="btn btn-secondary">${extras[8].name} - $${product.price + extras[8].price}</button>
                            <button type="button" class="btn btn-secondary">${extras[9].name} - $${product.price + extras[9].price}</button>
                            <button type="button" class="btn btn-secondary">${extras[5].name} - $${product.price + extras[5].price}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
        // Agregar el elemento del producto al contenedor HTML
        burgersDoblesElement.appendChild(productElement);
    }
};

// BURGERS VEGGIES

const burgersVeggiesElement = document.getElementById("burgers-veggies");

for (var productId in burgersVeggies) {
    if (burgersVeggies.hasOwnProperty(productId)) {
        var product = burgersVeggies[productId];

        // Crear un elemento HTML para el producto
        var productElement = document.createElement("div");
        productElement.classList.add("menu-dropdowns_card");
        productElement.innerHTML = `
        <div class="cards">
            <p class="title">
            <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" width="32px" height="30px" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path fill="darkred" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          ${product.name}
            </p>
          <p class="description">${product.description}</p>
          <p class="price"><strong>DESDE $${product.price}</strong></p>
          <button type="button" class="btn btn-primary" id="addToCart" data-bs-toggle="modal" data-bs-target="#veggies-${productId}"> Añadir al Carrito </button>
          <!-- Modal -->
          <div class="modal fade" id="veggies-${productId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" style="color:black" id="exampleModalLabel">Eligí una opción 👇</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <button type="button" class="btn btn-secondary">${extras[10].name} - $${product.price + extras[10].price}</button>
                                <button type="button" class="btn btn-secondary">${extras[11].name} - $${product.price + extras[11].price}</button>
                                <button type="button" class="btn btn-secondary">${extras[2].name}/Dambo - $${product.price + extras[2].price}</button>
                                <button type="button" class="btn btn-secondary">${extras[12].name} - $${product.price + extras[12].price}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
        // Agregar el elemento del producto al contenedor HTML
        burgersVeggiesElement.appendChild(productElement);
    }
};

// ENTRADAS

for (var productId in entradas) {
    if (entradas.hasOwnProperty(productId)) {
        var product = entradas[productId];

        // Crear un elemento HTML para el producto
        var productElement = document.createElement("div");
        productElement.classList.add("menu-dropdowns_card");
        productElement.innerHTML = `
        <div class="cards">
            <p class="title">
            <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" width="32px" height="30px" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path fill="darkred" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
             </svg>
           ${product.name}
            </p>
          <p class="price-entradas"><strong>$${product.price}</strong></p>
          <button type="button" id="addToCart"> Añadir al Carrito </button>
        </div>
      `;
        // Agregar el elemento del producto al contenedor HTML
        entradasElement.appendChild(productElement);
    }
};

// SALSAS

// Iterar a través de cada elemento en el objeto bebidas
for (var productId in salsas) {
  if (salsas.hasOwnProperty(productId)) {
    var product = salsas[productId];

    // Crear un elemento HTML para el producto
    var productElement = document.createElement("div");
    productElement.classList.add("menu-dropdowns_card");
    productElement.innerHTML = `
      <div class="cards">
        <p class="title">
          <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" width="32px" height="30px" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path fill="darkred" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          ${product.name}
        </p>
        <p class="description">${product.description}</p>
        <p class="price"><strong>$${product.price}</strong></p>
        <button type="button" class="addToCart" id="addToCart-${productId}" data-bs-toggle="modal" data-bs-target="#modal-2-${productId}"> Añadir al Carrito </button>
        <!-- Modal -->
        <div class="modal fade" id="modal-2-${productId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" style="color:black" id="exampleModalLabel">Eligí una opción 👇</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${product.options ? product.options.map(option => `
                  <button type="button" class="btn btn-secondary" data-option="${option}" data-price="${product.price}">${option} - $${product.price}</button>
                `).join('') : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Agregar el elemento del producto al contenedor HTML
    salsasElement.appendChild(productElement);
  }
};

// BEBIDAS

// Iterar a través de cada elemento en el objeto bebidas
for (var productId in bebidas) {
  if (bebidas.hasOwnProperty(productId)) {
    var product = bebidas[productId];

    // Crear un elemento HTML para el producto
    var productElement = document.createElement("div");
    productElement.classList.add("menu-dropdowns_card");
    productElement.innerHTML = `
      <div class="cards">
        <p class="title">
          <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" width="32px" height="30px" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path fill="darkred" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          ${product.name}
        </p>
        <p class="description">${product.description}</p>
        <p class="price"><strong>$${product.price}</strong></p>
        <button type="button" class="addToCart" id="addToCart-${productId}" data-bs-toggle="modal" data-bs-target="#modal-${productId}"> Añadir al Carrito </button>
        <!-- Modal -->
        <div class="modal fade" id="modal-${productId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" style="color:black" id="exampleModalLabel">Eligí una opción 👇</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${product.options ? product.options.map(option => `
                  <button type="button" class="btn btn-secondary" data-option="${option}" data-price="${product.price}">${option} - $${product.price}</button>
                `).join('') : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Agregar el elemento del producto al contenedor HTML
    bebidasElement.appendChild(productElement);
  }
};

// POSTRES

// Iterar a través de cada elemento en el objeto bebidas
for (var productId in postres) {
  if (postres.hasOwnProperty(productId)) {
    var product = postres[productId];

    // Crear un elemento HTML para el producto
    var productElement = document.createElement("div");
    productElement.classList.add("menu-dropdowns_card");
    productElement.innerHTML = `
      <div class="cards">
        <p class="title">
          <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" width="32px" height="30px" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path fill="darkred" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          ${product.name}
        </p>
        <p class="description">${product.description}</p>
        <p class="price"><strong>$${product.price}</strong></p>
        <button type="button" class="addToCart" id="addToCart-${productId}" data-bs-toggle="modal" data-bs-target="#modal-2-${productId}"> Añadir al Carrito </button>
        <!-- Modal -->
        <div class="modal fade" id="modal-2-${productId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" style="color:black" id="exampleModalLabel">Eligí una opción 👇</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${product.options ? product.options.map(option => `
                  <button type="button" class="btn btn-secondary" data-option="${option}" data-price="${product.price}">${option} - $${product.price}</button>
                `).join('') : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Agregar el elemento del producto al contenedor HTML
    postresElement.appendChild(productElement);
  }
};