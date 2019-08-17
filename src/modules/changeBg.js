export default function changeBg(img){
    if (confirm('Точно сменить фон?')) {
            document.body.style.backgroundImage = 'url(' + img.src + ')';
    } else {
        alert('Оставляю как и было');
    }
}
