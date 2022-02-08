const numbetOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDatabase = {
    count: numbetOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов',
         'The Shawshank Redemption'),
          b = prompt('На сколько оцените его', 'form 1 to 10');


    if (a != null && b !=null && a != '' && b != '' && a.length < 50){
        personalMovieDatabase.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovieDatabase.count < 10) {
    console.log('You watched few movies');
} else if (personalMovieDatabase.count >= 10 &&
    personalMovieDatabase.count < 30) {
    console.log('You are a great viewer');
} else if (personalMovieDatabase.count >= 30){
    console.log('You are a movie buff');
} else {
    console.log('Error');
}

console.log(personalMovieDatabase);