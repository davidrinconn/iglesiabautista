// Array de imágenes y detalles
const images = [
    { src: "imagesninos/465267608_861079116225616_7083709171821123886_n.jpg", title: "Niños 1", description: "Momento especial en la enseñanza cristiana para niños." },
    { src: "imagesninos/465852226_865090522491142_2365649472264882147_n.jpg", title: "Niños 2", description: "Actividades interactivas para el aprendizaje cristiano de los niños." },
    { src: "imagesninos/467353010_872454928421368_6816778885126159034_n.jpg", title: "Niños 3", description: "Jugando con alegría y fe." },
    { src: "imagesninos/467568472_872665685066959_1277936795486526905_n.jpg", title: "Niños 4", description: "Participando en dinámicas cristianas." },
    { src: "imagesninos/467588315_872665778400283_5817259383515211412_n.jpg", title: "Niños 4", description: "Participando en dinámicas cristianas." },
    // Agregar más imágenes si es necesario
];

// Función para generar la galería
function loadGallery() {
    const galleryContainer = document.getElementById('gallery');
    
    images.forEach((image, index) => {
        // Crear tarjeta de imagen
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        card.innerHTML = `
            <div class="card shadow-lg rounded">
                <img src="${image.src}" class="card-img-top" alt="${image.title}" data-bs-toggle="modal" data-bs-target="#imgModal${index}">
                <div class="card-body">
                    <h5 class="card-title">${image.title}</h5>
                    <p class="card-text">${image.description}</p>
                </div>
            </div>

            <!-- Modal para la imagen -->
            <div class="modal fade" id="imgModal${index}" tabindex="-1" aria-labelledby="imgModalLabel${index}" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <img src="${image.src}" class="img-fluid" alt="${image.title}">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        galleryContainer.appendChild(card);
    });
}

// Llamar a la función para cargar la galería al cargar la página
document.addEventListener('DOMContentLoaded', loadGallery);



