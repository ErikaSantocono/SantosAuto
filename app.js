// Variabili
let login_btn = document.getElementById  ('login_btn');
let login_form = document.getElementById('login_form');
let accesso = document.getElementById('accesso');
let closeBtn = document.getElementById('closeBtn');

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

const slider = document.getElementById('slider');
const leftArrow = document.querySelector('.slider-arrow.left');
const rightArrow = document.querySelector('.slider-arrow.right');
const modal = document.getElementById('cardModal');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close');

let currentIndex = 0; 
const images = slider.querySelectorAll('.clickable-image'); 
const totalImages = images.length; 

// Funzione per aggiornare la posizione dello slider
function updateSlider() 
{
    const sliderWidth = slider.clientWidth; 
    const offset = currentIndex * (images[0].clientWidth + 10); 
    slider.style.transform = `translateX(-${offset}px)`; 
}

// Gestione del clic sulla freccia sinistra
leftArrow.addEventListener('click', function () 
{
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1; // Torna all'ultima immagine se è alla prima
    updateSlider();
});

// Gestione del clic sulla freccia destra
rightArrow.addEventListener('click', function () 
{
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0; // Torna alla prima immagine se è all'ultima
    updateSlider();
});

// Mostra il form di login
login_btn.addEventListener('click', function () 
{
    login_form.style.display = 'block';
});

// Chiudi il form di login
closeBtn.addEventListener('click', function () 
{
    login_form.style.display = 'none';
});

// Gestione accesso
accesso.addEventListener('click', function () 
{
    if (username.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '') {
        alert('Per favore compila tutti i campi richiesti prima di cliccare "accesso"!');
    } else {
        localStorage.setItem('username', username.value.trim());
        localStorage.setItem('email', email.value.trim());
        localStorage.setItem('password', password.value.trim());
        window.location.href = "profilo.php";
    }
});

// Funzione per aprire la modale
images.forEach(image => {
    image.addEventListener('click', function () 
    {
        modal.style.display = 'block';
        modalImage.src = this.src; 
        modalDescription.textContent = this.getAttribute('data-description');
    });
});

// Chiudi la modale
closeModal.addEventListener('click', function () 
{
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) 
{
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Inizializza il caricamento della slider
updateSlider();
