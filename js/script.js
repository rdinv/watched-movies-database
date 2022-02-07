const numbetOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDatabase = {
    count: numbetOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его', 'от 1 до 10'),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько оцените его', 'от 1 до 10');

personalMovieDatabase.movies[a] = b;
personalMovieDatabase.movies[c] = d;

console.log(personalMovieDatabase);