document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.overview-section');
    const buttons = document.querySelectorAll('.nav-buttons img');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const currentSection = document.querySelector('.overview-section:not([style*="display: none"])');
            const nextSectionId = this.dataset.next;
            const prevSectionId = this.dataset.prev;

            console.log('Button clicked:', this.classList.contains('next-button') ? 'Next' : 'Prev');
            console.log('Current Section:', currentSection ? currentSection.id : 'None');
            console.log('Next Section ID:', nextSectionId);
            console.log('Previous Section ID:', prevSectionId);

            if (this.classList.contains('next-button') && nextSectionId !== 'none') {
                const nextSection = document.getElementById(nextSectionId);
                if (nextSection) {
                    currentSection.style.display = 'none';
                    nextSection.style.display = 'flex';
                }
            } else if (this.classList.contains('prev-button') && prevSectionId !== 'none') {
                const prevSection = document.getElementById(prevSectionId);
                if (prevSection) {
                    currentSection.style.display = 'none';
                    prevSection.style.display = 'flex';
                }
            }
        });
    });
});
