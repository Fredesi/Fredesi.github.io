// Copiar email al portapapeles
function copiarEmail() {
    navigator.clipboard.writeText('luduenafederico00@gmail.com');
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Navegación con dots activa
const dots = document.querySelectorAll('.nav-dot');
const slides = document.querySelectorAll('.slide');

// Función para actualizar los dots según la sección visible
function updateActiveDot() {
    let current = '';
    
    slides.forEach((slide) => {
        const slideTop = slide.offsetTop;
        const slideHeight = slide.clientHeight;
        
        if (window.scrollY >= slideTop - slideHeight / 3) {
            current = slide.getAttribute('id');
        }
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('data-section') === current) {
            dot.classList.add('active');
        }
    });
}

// Escuchar el evento scroll
window.addEventListener('scroll', updateActiveDot);

// Smooth scroll para los dots de navegación
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = dot.getAttribute('data-section');
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Agregar evento click a la tarjeta de email
document.getElementById('emailCard').addEventListener('click', (e) => {
    e.preventDefault();
    copiarEmail();
});

// Inicializar el dot activo al cargar la página
window.addEventListener('load', updateActiveDot);