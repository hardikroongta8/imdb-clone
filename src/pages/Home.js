import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/movies";
import ListTitle from "../components/ListTitle";
import ScrollableMediaList from "../components/ScrollableMediaList";
import { CircularProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { getTrendingShows } from "../api/shows";


function Home(){
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingShows, setTrendingShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [trendingMovieTime, setTrendingMovieTime] = useState("day");
    const [trendingShowTime, setTrendingShowTime] = useState("day");

    const handleMovieChange = (event, time) => {
        setTrendingMovieTime(time);
    }
    const handleShowChange = (event, time) => {
        setTrendingShowTime(time);
    }

    useEffect(() => {
        // setLoading(true);
        getTrendingMovies(trendingMovieTime)
            .then(data => {
                console.log(data);
                setTrendingMovies(data);
            })
            .catch(err => {
                console.log(err);
            })
        getTrendingShows(trendingShowTime)
            .then(data => {
                console.log(data);
                setTrendingShows(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [trendingMovieTime, trendingShowTime]);

    if(loading){
        return <div  className='progressbar'><CircularProgress/></div>;
    }else{
        return <div>
            <div className="trending-title">
                <ListTitle title="Trending Movies"/>
                <ToggleButtonGroup size="small"
                     value={trendingMovieTime} onChange={handleMovieChange} exclusive color="primary">
                    <ToggleButton value={"day"}>Today</ToggleButton>
                    <ToggleButton value={"week"}>This Week</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <ScrollableMediaList isTV={false} mediaList={trendingMovies}/>

            <div className="trending-title">
                <ListTitle title="Trending Shows"/>
                <ToggleButtonGroup size="small"
                     value={trendingShowTime} onChange={handleShowChange} exclusive color="primary">
                    <ToggleButton value={"day"}>Today</ToggleButton>
                    <ToggleButton value={"week"}>This Week</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <ScrollableMediaList isTV={true} mediaList={trendingShows}/>
        </div>;
    }
}

export default Home;