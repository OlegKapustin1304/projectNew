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

let img = document.querySelectorAll('.promo__adv img'),
    poster = document.getElementsByClassName('promo__bg')[0],
    genre = document.querySelector('.promo__genre'),
    list = document.querySelector('.promo__interactive-list');




img.forEach(item => {
    item.remove();
});

genre.textContent = "Драма";

poster.style.backgroundImage = "url('../img/bg.jpg')";


movieDB.movies.sort();
list.innerHTML = '';

movieDB.movies.forEach((item, i) => {
    list.innerHTML += `</li>
                        <li class="promo__interactive-item">10${i+1} ${item}
                            <div class="delete"></div>
                        </li>`;
});