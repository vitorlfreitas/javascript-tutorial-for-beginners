// Challenge from the JavaScript - Fundamentals course by Code with Mosh 

// Site oficial of the Course [https://codewithmosh.com/]

// Chaining methods

/* Challenge:
To filter the movies by their ratings, them sort them in a reverse way and finish by displaying only the titles. */

// Skills: Manipulating arrays and objects

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'e', year: 2017, rating: 4.6 },
    { title: 'b', year: 2018, rating: 4.7 },
]

const titles = movies
        .filter((movie) => movie.rating > 4 )
        .sort((movie1, movie2) => movie1.rating - movie2.rating)
        .reverse()
        .map(movie => movie.title);

console.log(titles);

// End of the challenge