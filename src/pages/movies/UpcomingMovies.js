import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../../api/movies";
import { CircularProgress } from "@mui/material";
import ListTitle from '../../components/ListTitle';
import MediaList from "../../components/MediaList";

function UpcomingMovies(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUpcomingMovies()
            .then(data => {
                console.log(data);
                setMovies(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    if(loading){
        return <div  className='progressbar'><CircularProgress/></div>;
    }else{
        return <div>
            <ListTitle title="Upcoming"/>
            <MediaList isTV={false} mediaList={movies}/>
        </div>;
    }
}

export default UpcomingMovies;