import axios from "axios";

async function getTrendingShows(time){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/trending/tv/${time}?api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data.results;
}

async function getShowDetails(id){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/tv/${id}?&api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data;
}

async function getPopularShows(){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data.results;
}

async function getOnTheAirShows(){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data.results;
}

async function getAiringTodayShows(){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data.results;
}

async function getTopRatedShows(){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);
    return res.data.results;
}

export {
    getTrendingShows,
    getPopularShows,
    getOnTheAirShows,
    getAiringTodayShows,
    getTopRatedShows,
    getShowDetails
}