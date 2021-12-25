const movies = [
    {
        _id:"1",
        title:"Terminator",
        genre:{_id:"1_1",name:"Action"},
        nuberInStock:6,
        dailyRentalRate:2.5,
        publishDate:"2018-01-03T19:04:28.809z",
    },
    {
        _id:"2",
        title:"Die Hard",
        genre:{_id:"2_2",name:"Action"},
        nuberInStock:5,
        dailyRentalRate:2.5,
    },
    {
        _id:"3",
        title:"Get Out",
        genre:{_id:"3_3",name:"Thriller"},
        nuberInStock:8,
        dailyRentalRate:3.5,
        publishDate:"2018-01-03T19:04:28.809z",
    },
    {
        _id:"4",
        title:"Trip to Italy",
        genre:{_id:"4_4",name:"Comedy"},
        nuberInStock:7,
        dailyRentalRate:3.5,
        publishDate:"2018-01-03T19:04:28.809z",
    },
];
export function getMovies() {
    return movies;
}
export function getMovie(id) {
    return movies.find(m => m._id === id);
}
