//Class - Movie
class Movie {
    constructor (title, studio, rating='PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getMoviesByRating(movies, rating){
        return movies.filter(movie => movie.rating === rating);
    }
}

const movies = [];

movies.push(
    new Movie('VTV','GVM','PG'),
    new Movie('KGF','HFF','PG-13'),
    new Movie('LCU','RKI','R'),
    new Movie('VTK','ARR','PG')
    );

let movie101 = new Movie('Casino Royale', 'Eon Productions', 'PG­13');

console.log(movie101.getMoviesByRating(movies, 'PG'));