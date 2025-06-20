document.addEventListener('DOMContentLoaded', () => {
    console.log("Strona została załadowana poprawnie.");

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseout', () => {
            link.style.textDecoration = 'none';
        });
    });
});