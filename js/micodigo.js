let pagina = 1
let numItems = 5
let totalPag = 1

const urldragon = `https://dragonball-api.com/api/characters`

const btnFirst = document.getElementById('btn-first')
const btnPrevious = document.getElementById('btn-previous')
const btnNext = document.getElementById('btn-next')
const btnLast = document.getElementById('btn-last')

btnFirst.addEventListener('click', () =>{
    pagina = 1
    personajes()
})



btnPrevious.addEventListener("click", () => {
    if (pagina > 1) {
        pagina--;
        personajes();
    } else {
        alert("No hay más personajes anteriores")
    }
});


btnNext.addEventListener('click', () =>{
    pagina++
    personajes()
})
btnLast.addEventListener('click', () =>{
    pagina = 12
    personajes()
})



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