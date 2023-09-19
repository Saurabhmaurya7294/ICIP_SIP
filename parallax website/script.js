window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        const yPos = section.offsetTop;

        if (scrollPosition >= yPos) {
            const offset = (scrollPosition - yPos) * 0.5; 
            section.querySelector('.fixed-img').style.transform = `translateY(${offset}px)`;
        }
    });
});
