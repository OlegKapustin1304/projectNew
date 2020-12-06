(function() {
    'use strict';

}());

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const img = document.querySelectorAll('.promo__adv img'),
        poster = document.getElementsByClassName('promo__bg')[0],
        genre = document.querySelector('.promo__genre'),
        list = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector(".adding__input"),
        formCheckbox = addForm.querySelector('[type="checkbox"]');


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "Драма";
        poster.style.backgroundImage = "url('../img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function addMovies(moviesParent, listOfMovies) {
        moviesParent.innerHTML = '';
        sortArr(listOfMovies);

        listOfMovies.forEach((item, i) => {
            moviesParent.innerHTML += `</li>
                            <li class="promo__interactive-item">10${i+1} ${item}
                                <div class="delete"></div>
                            </li>`;
        });

        let dElement = document.querySelectorAll(".delete");

        dElement.forEach((item, i) => {
            item.addEventListener("click", (event) => {
                event.preventDefault();
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
                addMovies(list, movieDB.movies);
            });
        });
    }

    deleteAdv(img);
    makeChanges();
    addMovies(list, movieDB.movies);

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newMovie = addInput.value;
        const checkboxState = formCheckbox.checked;

        if (newMovie) {

            if (newMovie.length > 21) {
                newMovie = `${newMovie.substring(0, 22)}...`;
            }

            movieDB.movies.push(newMovie);
            movieDB.movies.sort();

            addMovies(list, movieDB.movies);
            //addInput.value = "";
            event.target.reset();

            if (checkboxState) {
                console.log("Добавляем любимый фильм");
            }
        }


    });

});