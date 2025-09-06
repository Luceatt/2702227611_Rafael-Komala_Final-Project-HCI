document.addEventListener('DOMContentLoaded', function() {
    const frames = {
        S: document.getElementById('S-Class'),
        A: document.getElementById('A-Class'),
        B: document.getElementById('B-Class'),
        C: document.getElementById('C-Class'),
        D: document.getElementById('D-Class')
    };

    const buttons = document.querySelectorAll('.class-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            changeClass(this.id);
        });
    });

    function changeClass(className) {
        document.getElementById('class-title').textContent = className + ' Class';
        buttons.forEach(button => button.classList.remove('selected'));
        document.getElementById(className).classList.add('selected');

        Object.values(frames).forEach(frame => {
            frame.classList.remove('active');
            frame.style.display = 'none';
        });
        
        frames[className].style.display = 'flex';
        setTimeout(() => frames[className].classList.add('active'), 50);
    }

    changeClass('S');
});
