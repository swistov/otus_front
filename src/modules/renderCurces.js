export default function renderCurces(data) {
    const goodsWrapper = document.querySelector('.courses');
    data.goods.forEach((good) => {
        const card = document.createElement('div');
        card.className = 'course';
        card.innerHTML = `
                <div class="card" data-category="${good.category}">
                    <div class="card-body justify-content-between">
                        <div class="card-price" style="float:right">${good.price} ₽</div><br>
                        <h5 class="card-title" style="height:50%">${good.title}</h5>
                        <div class="teacher" style="margin: 0px 10px 10px 0px">
                            <h7 class="teacher-info">Teacher: ${good.teacher}</h7>
                        </div>
                        <button class="btn btn-primary course-info" style="width:45%">О курсе</button>
                        <button class="btn btn-primary course-by" style="width:45%; float:right">Купить</button>
                    </div>
                </div>
        `;
        goodsWrapper.appendChild(card);
    });
}
