export default function curseInfo() {
    const courses = document.querySelectorAll('.course');

    courses.forEach((course) => {
        const btn = course.querySelector('.course-info');
        const modal = document.createElement('div');
        const wrapper = document.createElement('div');

        console.log(course);

        modal.className = 'wrapper';
        modal.innerHTML = `<h1>LOLOLOLOOLO</h1>`;
        wrapper.className = 'modal';

        btn.addEventListener('click', () => {
            if (!modal.style.display && !wrapper.style.display) {
                modal.style.display = 'block';
                wrapper.style.display = 'block';
                course.appendChild(modal);
            } else {
                modal.style.display = '';
                wrapper.style.display = '';
                course.removeChild(modal);
            }
        });

    });
}