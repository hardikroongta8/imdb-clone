import axios from "axios";

async function getTrendingMovies(time){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/trending/movie/${time}?api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data.results;
}

async function getMovieDetails(id){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data;
}

async function getUpcomingMovies(){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data.results;
}

async function getNowPlayingMovies(){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data.results;
}

async function getPopularMovies(){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data.results;
}

async function getTopRatedMovies(){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data.results;
}

export {
    getTrendingMovies, 
    getUpcomingMovies,
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getMovieDetails
}