export default function curseInfo() {
    const courses = document.querySelectorAll('.course');

    courses.forEach((course) => {
        const btn = course.querySelector('.course-info');
        const modal = document.createElement('div');
        const wrapper = document.createElement('div');

        console.log(course);

        wrapper.className = 'wrapper_custom';
        modal.className = 'modal_custom';
        modal.innerHTML = `<h1>LOLOLOLOOLO</h1>`;

        btn.addEventListener('click', () => {
            if (!modal.style.display && !wrapper.style.display) {
                modal.style.display = 'block';
                wrapper.style.display = 'block';
                document.body.appendChild(wrapper);
                document.body.appendChild(modal);
            } else {
                modal.style.display = '';
                wrapper.style.display = '';
                document.body.removeChild(wrapper);
                document.body.removeChild(modal);
            }
        });
        wrapper.addEventListener('click', e => {
            const target = e.target;
            const itsMenu = target == modal || modal.contains(target);
            if (!itsMenu && modal.style.display === 'block'){
                modal.style.display = '';
                wrapper.style.display = '';
                document.body.removeChild(wrapper);
                document.body.removeChild(modal);
            }

        });

    });
}