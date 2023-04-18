// RENDERIZO LOS PRODUCTOS AL HTML A TRAVÉS DE UN OBJETO EN JS.
// BURGERS SIMPLES
var burgersSimples = {
    1: {
        name: "¡NUEVA! Chili Pepper Simple",
        description: "Medallon de 125gr, cheddar, sriracha en la coccion, BBQ de Jalapeños, bacon y cebolla salteada",
        price: 2500
    },
    2: {
        name: "Bropper Simple con papas",
        description: "Medallon de 125gr, cheddar. bacon, cebolla, pepinos, lechuga, tomate, ketchup y mayonesa",
        price: 2500
    },
    3: {
        name: "Texas Simple con papas",
        description: "Medallon de 125gr, cheddar, barbacoa y cebolla crispy",
        price: 2500
    },
    4: {
        name: "Picante Simple con papas",
        description: "Medallon de 125gr, jalapeños, cebolla morada, mayo picante y sriracha, cheddar",
        price: 2400
    },
    5: {
        name: "Bacon Butter Simple con papas",
        description: "Medallon de 125gr, bacon, cheddar, cebolla caramelizada, manteca",
        price: 2600
    },
    6: {
        name: "Bacon Cheeseburger Simple con papas",
        description: "Medallon de 125gr, bacon, cheddar, salsa mil islas, cebolla picada.",
        price: 2400
    },
    7: {
        name: "Cheeseburger Simple con papas",
        description: "Medallon de 125gr, cheddar, cebolla picada, salsa mil islas.",
        price: 2200
    },
    8: {
        name: "Royale Simple con papas",
        description: "Medallon de 125gr, cheddar, ketchup, mostaza, cebolla picada.",
        price: 2200
    },
    9: {
        name: "Royale 2.0 Simple con papas",
        description: "Medallon de 125gr, cheddar, cebolla picada, ketchup, mostaza, bacon y pepinos.",
        price: 2400
    },
    10: {
        name: "Big Baby Simple con papas",
        description: "Medallon de 125gr, cheddar, cebolla salteada, pepinos, ketchup y mostaza",
        price: 2200
    },
    11: {
        name: "Crispy Onion Simple con papas",
        description: "Medallon de 125gr, cheddar, bacon, cebolla crispy, salsa mil islas.",
        price: 2500
    },
    12: {
        name: "American Simple con papas",
        description: "Medallon de 125gr, cheddar, pepinos, lechuga, tomate, cebolla picada, salsa mil islas",
        price: 2300
    },
    13: {
        name: "Big R Simple con papas",
        description: "Medallon de 125gr, cheddar, lechuga, cebolla picada, pepinos, salsa tipo big mac.",
        price: 2300
    },
    14: {
        name: "Stacker Simple con papas",
        description: "Medallon de 125gr, cheddar, bacon, salsa stacker.",
        price: 2400
    },
    15: {
        name: "Roque Simple con papas",
        description: "Medallon de 125gr, roquefort, caramelizada y queso dambo",
        price: 2400
    },
    16: {
        name: "Br Cheese Simple con papas",
        description: "Medallon de 125gr, cheddar x4, cebolla morada, pepinos, salsa mil islas",
        price: 2400
    },
    17: {
        name: "Biguru Simple con papas",
        description: "Medallon de 125gr, cheddar, alioli, cebolla caramelizada",
        price: 2300
    },
    18: {
        name: "Travis Simple con papas",
        description: "Medallon de 125gr, cheddar, bacon, lechuga, cebolla salteada, pepinos, ketchup y mostaza",
        price: 2400
    }
};

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
          <button class="addToCart">Añadir al Carrito</button>
        </div>
      `;

        // Agregar el elemento del producto al contenedor HTML
        burgersSimplesElement.appendChild(productElement);
    }
};

// BURGERS DOBLES
var burgersDobles = {
    1: {
        name: "¡NUEVA! Chili Pepper Doble",
        description: "Doble medallon de 125gr, cheddar, sriracha en la coccion, BBQ de Jalapeños, bacon y cebolla salteada",
        price: 2800
    },
    2: {
        name: "Bropper Doble con papas",
        description: "Doble Medallon de 125gr, cheddar, bacon, lechuga, tomate, cebolla, pepino, ketchup y mayonesa",
        price: 2800
    },
    3: {
        name: "Texas Doble con papas",
        description: "Doble Medallon de 125gr, cheddar, barbacoa, cebolla crispy y bacon",
        price: 2800
    },
    4: {
        name: "Picante Doble con papas",
        description: "Doble Medallon de 125gr, jalapeños, cebolla morada, mayo picante sriracha, cheddar",
        price: 2700
    },
    5: {
        name: "Bacon Butter Doble con papas",
        description: "Doble Medallon de 125gr, bacon, cheddar, cebolla caramelizada, manteca",
        price: 2900
    },
    6: {
        name: "Bacon Cheeseburger Doble con papas",
        description: "Doble medallon de 125gr, cheddar, bacon, cebolla picada, salsa mil islas.",
        price: 2700
    },
    7: {
        name: "Cheeseburger Doble con papas",
        description: "Doble medallon de 125gr, cheddar, cebolla picada, salsa mil islas.",
        price: 2500
    },
    8: {
        name: "Royale Doble con papas",
        description: "Doble medallon de 125gr cheddar, ketchup, mostaza, cebolla picada.",
        price: 2500
    },
    9: {
        name: "Royale 2.0 Doble con papas",
        description: "Doble medallon de 125gr, cheddar, cebolla picada, ketchup, mostaza, bacon y pepinos.",
        price: 2700
    },
    10: {
        name: "Big Baby Doble con papas",
        description: "Doble medallon de 125gr, cheddar, cebolla salteada, pepinos, ketchup y mostaza",
        price: 2500
    },
    11: {
        name: "Crispy Onion Doble con papas",
        description: "Doble medallon de 125gr, cheddar, bacon, cebolla crispy, salsa mil islas.",
        price: 2800
    },
    12: {
        name: "American Doble con papas",
        description: "Doble Medallon de 125gr, cheddar, pepinos, lechuga, tomate, cebolla picada, salsa mil islas",
        price: 2600
    },
    13: {
        name: "Big R Doble con papas",
        description: "Doble medallon de 125gr, cheddar, lechuga, cebolla picada, pepinos, salsa tipo big mac.",
        price: 2600
    },
    14: {
        name: "Stacker Doble con papas",
        description: "Doble medallon de 125gr, cheddar, bacon, salsa stacker.",
        price: 2700
    },
    15: {
        name: "Roque Doble con papas",
        description: "Doble medallon de 125gr, roquefort, cebolla caramelizada y queso dambo",
        price: 2700
    },
    16: {
        name: "BR Cheese Doble con papas",
        description: "Doble medallon de 125gr , cheddar x6, cebolla morada picada, pepinos, salsa mil islas",
        price: 2700
    },
    17: {
        name: "Biguru Doble con papas",
        description: "Doble medallon de 125g, cheddar, alioli, cebolla caramelizada",
        price: 2600
    },
    18: {
        name: "Travis Doble con papas",
        description: "Doble medallon de 125gr, cheddar, bacon, lechuga, cebolla salteada, pepinos, ketchup y mostaza",
        price: 2700
    },
    19: {
        name: "Triple Queso con papas",
        description: "Triple carne samsh de 80gr cada una, cheddar x4",
        price: 2500
    },
    20: {
        name: "Smash Onion con papas",
        description: "220gr de carne smash, cebolla salteada, cheddar y pepinos.",
        price: 2500
    }
};

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
          <button class="addToCart">Añadir al Carrito</button>
        </div>
      `;

        // Agregar el elemento del producto al contenedor HTML
        burgersDoblesElement.appendChild(productElement);
    }
};

// BURGERS VEGGIES
var burgersVeggies = {
    1: {
        name: "Falafel Burger Simple",
        description: "Medallon de Falafel, mayonesa de zanahoria, cebolla morada en aros, tomate, lechuga y queso dambo.",
        price: 2000
    },
    2: {
        name: "Falafel Burger Doble",
        description: "Doble medallon de Falafel, mayonesa de zanahoria, cebolla morada en aros, tomate, lechuga y queso dambo",
        price: 2500
    },
    3: {
        name: "Veggie Poroto Aduki con papas",
        description: "Medallon veggie de poroto aduki, quinoa y batata, queso, lechuga, cebolla, pepino, salsa tipo big mac",
        price: 2100
    },
    4: {
        name: "Veggie Arroz Yamani con papas",
        description: "Medallon veggie de arroz yamani, curry y garbanzos, queso, lechuga, cebolla, pepino, salsa tipo big mac.",
        price: 2100
    },
    5: {
        name: "Veggie Aduki Provo con papas",
        description: "Medallon veggie de poroto aduki, quinoa y batata, provoleta, cebolla salteada y alioli.",
        price: 2400
    },
    6: {
        name: "Veggie Yamani Provo con papas",
        description: "Medallon veggie de arroz yamani, curry y garbanzos, provoleta, cebolla salteada y alioli",
        price: 2400
    },
    7: {
        name: "American Simple con papas Aduki",
        description: "Medallon veggie de aduki, lechuga, tomate, cebolla morada, cheddar y salsa mil islas",
        price: 2100
    },
    8: {
        name: "American Simple con papas Yamani",
        description: "Medallon veggie de yamani, lechuga, tomate, cebolla morada, cheddar y salsa mil islas",
        price: 2100
    },
    9: {
        name: "Veggie Provo Simil Carne",
        description: "Medallon simil carne, provoleta, cebolla salteada y alioli",
        price: 2400
    }
};

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
          <button class="addToCart">Añadir al Carrito</button>
        </div>
      `;

        // Agregar el elemento del producto al contenedor HTML
        burgersVeggiesElement.appendChild(productElement);
    }
};

// ENTRADAS
var entradas = {
    1: {
        name: "Nuggets de pollo x10",
        price: 1200
    },
    2: {
        name: "Nuggets de pollo x20",
        price: 2000
    },
    3: {
        name: "Porcion de Aros de Cebolla x12",
        price: 1000
    },
    4: {
        name: "Porcion de Aros de Cebolla x24",
        price: 1800
    },
    5: {
        name: "Empanadas de Carne x1",
        price: 500
    },
    6: {
        name: "Bastones de Muzzarella x6",
        price: 1800
    },
    7: {
        name: "Porcion de Papas Extra (Chica)",
        price: 500
    },
    8: {
        name: "Porcion de Papas para Compartir",
        price: 1200
    }
};

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
          <p class="price"><strong>$${product.price}</strong></p>
          <button id="addToCart" class="addToCart">Añadir al Carrito</button>
        </div>
      `;

        // Agregar el elemento del producto al contenedor HTML
        entradasElement.appendChild(productElement);
    }
};
