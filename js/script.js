/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



    // const ads = document.querySelector('.promo__adv');
    // const imgAds = ads.getElementsByTagName('img');
    // while (imgAds.length > 0)   {
    //     imgAds[0].remove();
    // }



    const ads = document.querySelectorAll('.promo__adv img');
    console.log(ads);
    ads.forEach(element => {
        element.remove();
    });



    const promo = document.querySelector('.promo__bg');
    promo.querySelector('.promo__genre').textContent = "ДРАМА";
    promo.style.backgroundImage = "url(../img/bg.jpg)";




// const promoInteractive = document.querySelectorAll('.promo__interactive-list li');
// movieDB.movies.sort();

// for (let i = 0; i <= movieDB.movies.length-1; i++) {
//     promoInteractive[i].innerHTML =i+1 + ". " + movieDB.movies[i] + "\n <div class=\"delete\"></div>\n";
//     console.log(promoInteractive[i].before.innerText);
// }



const promoInteractive = document.querySelector('.promo__interactive-list');

promoInteractive.innerHTML = "";

movieDB.movies.forEach((film, i) => {
    promoInteractive.innerHTML += `
        <li class="promo__interactive-item">${i+1}.  ${film}
            <div class="delete"></div>
        </li>
    `;
});