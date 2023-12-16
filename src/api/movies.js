import { api } from "./api_config";

async function getTrendingMovies(time){
    const res = await api.get(`/trending/movie/${time}`);
    return res.data.results;
}

async function getMovieDetails(id){
    const res = await api.get(`/movie/${id}?language=en-US`);
    return res.data;
}

async function getUpcomingMovies(){
    const res = await api.get(`/movie/upcoming`);
    return res.data.results;
}

async function getNowPlayingMovies(){
    const res = await api.get(`/movie/now_playing`);
    return res.data.results;
}

async function getPopularMovies(){
    const res = await api.get(`/movie/popular`);
    return res.data.results;
}

async function getTopRatedMovies(){
    const res = await api.get(`/movie/top_rated`);
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