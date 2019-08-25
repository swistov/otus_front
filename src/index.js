'use strict';

import getData from './modules/getData';
import renderCurces from './modules/renderCurces';
import courseInfo from './modules/courseInfo';

function changeBg(img) {
    if (confirm('Точно сменить фон?')) {
        document.body.style.backgroundImage = 'url(' + img.src + ')';
    } else {
        alert('Оставляю как и было');
    }
}

(async function () {
    const data = await getData();
    renderCurces(data);
    courseInfo();
}());
