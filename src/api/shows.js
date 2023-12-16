import { api } from "./api_config";

async function getTrendingShows(time){
    const res = await api.get(`/trending/tv/${time}`);
    return res.data.results;
}

async function getShowDetails(id){
    const res = await api.get(`/tv/${id}`);
    return res.data;
}

async function getPopularShows(){
    const res = await api.get(`/tv/popular`);
    return res.data.results;
}

async function getOnTheAirShows(){
    const res = await api.get(`/tv/on_the_air`);
    return res.data.results;
}

async function getAiringTodayShows(){
    const res = await api.get(`/tv/airing_today`);
    return res.data.results;
}

async function getTopRatedShows(){
    const res = await api.get(`/tv/top_rated`);
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