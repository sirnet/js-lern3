/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Райя и последний...",
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
    
    
    
    
    
    const writeFilm = () => {
        movieDB.movies.sort();
        promoInteractive.innerHTML = "";
        movieDB.movies.forEach((film, i) => {
            promoInteractive.innerHTML += `
                <li class="promo__interactive-item">${i+1}.  ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    }
    
    writeFilm();
    
    /* Задания на урок:
    
    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    
    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"
    
    5) Фильмы должны быть отсортированы по алфавиту */
    
    const inpAdding = document.querySelector('.adding__input');
    const btn = document.querySelector('.add button');
    const checkbox = document.querySelector('[type="checkbox"]');
    const btnDelete = document.querySelectorAll('.delete');
    
    console.log(btnDelete);
    
    const btnSort = (e) => {
        let str = inpAdding.value;
        e.preventDefault();
        if(!str == "" || !str == null || !str == undefined) {
            if(str.length > 21){
                    let j = str.length-21
                    console.log(str.length);
                    str = str.slice(0, -j) + "...";
                writeDb(str);
            }
            else {
                writeDb(str);
            }
        }
    };
    
    const writeDb = (s) =>{
        movieDB.movies.push(s);
        let i = movieDB.movies.length
        writeFilm();
        inpAdding.value = "";
        if (checkbox.checked){
            console.log("Добавляем любимый фильм");
        }
    };
    
    btn.addEventListener('click', btnSort);
    
    
})

