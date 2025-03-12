let pagina = 1
let numItems = 5
let totalPag = 1

const urldragon = `https://dragonball-api.com/api/characters`

const btnPrevious = document.getElementById('btn-previous')

const btnUno = document.getElementById('btn-1')
const btnDos = document.getElementById('btn-2')
const btnTres = document.getElementById('btn-3')
const btnCuatro = document.getElementById('btn-4')
const btnCinco = document.getElementById('btn-5')
const btnSeis = document.getElementById('btn-6')
const btnSiete = document.getElementById('btn-7')
const btnOcho = document.getElementById('btn-8')
const btnNueve = document.getElementById('btn-9')
const btnDiez = document.getElementById('btn-10')
const btnOnce = document.getElementById('btn-11')
const btnDoce = document.getElementById('btn-12')

const btnNext = document.getElementById('btn-next')

btnPrevious.addEventListener("click", () => {
    if (pagina > 1) {
        pagina--;
        personajes();
    }
});

btnUno.addEventListener("click", ()=> {
    pagina = 1;
    personajes();
})
btnDos.addEventListener("click", ()=> {
    pagina = 2;
    personajes();
})
btnTres.addEventListener("click", ()=> {
    pagina = 3;
    personajes();
})
btnCuatro.addEventListener("click", ()=> {
    pagina = 4;
    personajes();
})
btnCinco.addEventListener("click", ()=> {
    pagina = 5;
    personajes();
})
btnSeis.addEventListener("click", ()=> {
    pagina = 6;
    personajes();
})
btnSiete.addEventListener("click", ()=> {
    pagina = 7;
    personajes();
})
btnOcho.addEventListener("click", ()=> {
    pagina = 8;
    personajes();
})
btnNueve.addEventListener("click", ()=> {
    pagina = 9;
    personajes();
})
btnDiez.addEventListener("click", ()=> {
    pagina = 10;
    personajes();
})
btnOnce.addEventListener("click", ()=> {
    pagina = 11;
    personajes();
})
btnDoce.addEventListener("click", ()=> {
    pagina = 12;
    personajes();
})


btnNext.addEventListener('click', () =>{
    if (pagina > 1) {
        pagina++;
        personajes();
    } else {
        alert("No hay más personajes")
    }
})

if(pagina == '12'){
    btnNext.disabled = true
}

// Configuración de la petición
const opciones = {
    method: 'GET',  // Es una petición GET
    headers: {
        'accept': '*/*'  // Este es el header que pide el curl
    }
};
function personajes(){
    // Realizamos la petición con fetch
    fetch(`${urldragon}?page=${pagina}&limit=${numItems}`, opciones)
    .then(response => {
        // Comprobamos si la respuesta es correcta (status 200-299)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        // Convertimos la respuesta a JSON (el cuerpo de la respuesta)
        return response.json();
    })
    .then(data => {
        
        console.log('Personajes:', data);
        const contenedor = document.getElementById('container-personajes');
        contenedor.innerHTML = '';
        totalPag = data.meta.totalPag
        
        let fila = document.createElement('div');
        fila.classList.add('row');
        contenedor.appendChild(fila);
        let contador = 0;

        data.items.forEach(element => {



            const columna = document.createElement('div');
            columna.classList.add('col-md-4', 'd-flex', 'flex-column');

            const card = document.createElement('div');
            card.classList.add('card', 'mb-5'); // Añadido d-flex y flex-column
            card.innerHTML = ``;

            const img = document.createElement('img');
            img.src = element.image;
            img.classList.add('card-img-top', 'altura-img'); // Añadir clase para imagen
            card.appendChild(img);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body', 'bg-secondary', 'bg-gradient'); // Añadir un contenedor para el cuerpo del card
            card.appendChild(cardBody);

            const titulo = document.createElement('h2');
            titulo.textContent = element.name;
            cardBody.appendChild(titulo);

            const ki = document.createElement('p');
            ki.textContent = `Ki: ${element.ki}`;
            ki.classList.add('text-danger', 'fs-2', 'fw-bold')
            cardBody.appendChild(ki);

            const genero = document.createElement('p')
            genero.textContent = `Genero: ${element.gender}`;
            genero.classList.add('text-success', 'fs-1', 'fw-bold')
            cardBody.appendChild(genero);
            
            columna.appendChild(card);
            fila.appendChild(columna);
            contador++;

            if (contador === 3) {
                contador = 0;
                fila = document.createElement('div');
                fila.classList.add('row');
                contenedor.appendChild(fila);
            }
            console.log(pagina)
        });
    })
    .catch(error => {
        console.error('Error al obtener los personajes:', error.message);
    })
    .finally(() => {
        console.log("Petición de dragon ball finalizada");
        if (pagina === 12) {
            btnNext.disabled = true;
        } else {
            btnNext.disabled = false; // Habilitar si no estamos en la página 12
        }
        if (pagina === 1) {
            btnPrevious.disabled = true;
        }else{
            btnPrevious.disabled = false; // Habilitar si no estamos en la página 1
        }
    });
}

    



const tranformar = document.getElementById('transforms')
tranformar.addEventListener('click', () => {
    const urltransformaciones = `https://dragonball-api.com/api/transformations`
    tranformar.classList.add('d-none')
    const options = {
        method: 'GET',  // Es una petición GET
        headers: {
            'accept': '*/*'  // Este es el header que pide el curl
        }
    };
    

    fetch(urltransformaciones, options)
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('container-personajes');

        const tittleTransform = document.createElement('h1')
        tittleTransform.textContent = 'Transformaciones'
        tittleTransform.classList.add('text-center', 'fs-1', 'fst-italic', 'bg-perso', 'p-5')
        contenedor.appendChild(tittleTransform)

        let fila = document.createElement('div');
        fila.classList.add('row');
        contenedor.appendChild(fila);
        let contador = 0;

        

        data.forEach(element =>{
            const columna = document.createElement('div');
            columna.classList.add('col-md-4', 'd-flex', 'flex-column');

            const card = document.createElement('div');
            card.classList.add('card', 'mb-5'); // Añadido d-flex y flex-column
            card.innerHTML = ``;

            const img = document.createElement('img');
            img.src = element.image;
            img.classList.add('card-img-top', 'altura-img'); // Añadir clase para imagen
            card.appendChild(img);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body', 'bg-secondary', 'bg-gradient'); // Añadir un contenedor para el cuerpo del card
            card.appendChild(cardBody);

            const titulo = document.createElement('h2');
            titulo.textContent = element.name;
            cardBody.appendChild(titulo);

            const ki = document.createElement('p');
            ki.textContent = `Ki: ${element.ki}`;
            ki.classList.add('text-danger', 'fs-2', 'fw-bold')
            cardBody.appendChild(ki);

            const genero = document.createElement('p')
            genero.textContent = `Genero: ${element.gender}`;
            genero.classList.add('text-success', 'fs-1', 'fw-bold')
            cardBody.appendChild(genero);
            
            columna.appendChild(card);
            fila.appendChild(columna);
            contador++;

            if (contador === 3) {
                contador = 0;
                fila = document.createElement('div');
                fila.classList.add('row');
                contenedor.appendChild(fila);
            }
            console.log(data)
        })
        
    })
    .catch(error => {
        console.error('Error al obtener los personajes:', error.message);
    })
    .finally(() => {
        console.log("Petición de dragon ball Transformaciones finalizada");
    });
});

personajes()