let numbetOfFilms;

function start (){
    numbetOfFilms = +prompt('How many films have you already watched?', '');

    while (numbetOfFilms == '' || numbetOfFilms == null || isNaN(numbetOfFilms)) {
        numbetOfFilms = +prompt('How many films have you already watched?', '');
    }
}
start();

const personalMovieDatabase = {
    count: numbetOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('One of the last movies you watched',
             'The Shawshank Redemption'),
              b = prompt('How much would you rate it', 'form 1 to 10');
    
        if (a != null && b !=null && a != '' && b != '' && a.length < 50){
            personalMovieDatabase.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
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
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDatabase);
    }
}
showMyDB(personalMovieDatabase.privat);

function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDatabase.geners[i - 1] = prompt (`Your favorite genre is numbered ${i}`);
    }
}
writeYourGeners();