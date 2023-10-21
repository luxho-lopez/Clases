function iniciarApp() {


    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria);
    
    const resultado = document.querySelector('#resultado');

    const modal = new bootstrap.Modal('#modal');


    obtenerCategorias();

    function obtenerCategorias() {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

        fetch(url)
            .then( result => result.json() )
            .then( data => mostrarCategorias(data.categories) )
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach( categoria => {

            const { strCategory } = categoria;

            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;

            selectCategorias.appendChild(option);
        })
    }

    function seleccionarCategoria(e) {
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        fetch(url)
            .then( result => result.json() )
            .then( data => mostrarRecetas(data.meals) )
    }

    function mostrarRecetas(recetas = []) {

        limpiarHTML(resultado);

        const heading = document.createElement('H5');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = `Mostrando: ${recetas.length} resultado(s)`;
        resultado.appendChild(heading);
        
        // Iterar en los resultados
        recetas.forEach(receta => {
            const { idMeal, strMeal, strMealThumb } = receta;

            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-3');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'md-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top')
            recetaImagen.alt = `Imagen de la receta ${strMeal}`;
            recetaImagen.src = strMealThumb;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = "Ver Receta";
            // recetaButton.dataset.bsTarget = "#modal";
            // recetaButton.dataset.bsToggle = "modal";
            recetaButton.onclick = function() {
                seleccionarReceta(idMeal);
            }
            
            
            // Inyectar en el HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);

        })

    }

    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        // console.log(url);
        fetch(url)
            .then(result => result.json())
            .then(data => mostrarRecetaModal(data.meals[0]))
    }
    
    function mostrarRecetaModal(receta) {
        console.log(receta);
        const { idMeal, strMeal, strInstructions, strMealThumb } = receta;
        
        // Añadir contenido a modal
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="Imagen de receta ${strMeal}">
            <h3 class="my-3">Instrucciones</h3>
            <p>${strInstructions}</p>
            <h5 class="my-3">Ingredientes</h5>
        `;

        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');
        // Mostrar cantidades e ingredientes
        for(let i = 1; i <= 20; i++) {
            if(receta[`strIngredient${i}`]) {
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${cantidad} - ${ingrediente}`;
                
                listGroup.appendChild(ingredienteLi);
            }
        }

        modalBody.appendChild(listGroup);


        // Muestra el modal
        modal.show();
    }

    function limpiarHTML(selector) {
        while(selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }

}

document.addEventListener('DOMContentLoaded', iniciarApp);