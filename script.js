const observerOptions = {
    threshold: 0.05
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .feature-item, .stack-box').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(25px)";
    el.style.transition = "all 0.5s ease-out";
    observer.observe(el);
});

console.log("AutoCheck OCR: Sistema de Auditoría Avanzado Inicializado.");