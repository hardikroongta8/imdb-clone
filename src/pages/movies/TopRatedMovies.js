import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "../../api/movies";
import { CircularProgress } from "@mui/material";
import ListTitle from '../../components/ListTitle';
import MediaList from "../../components/MediaList";

function TopRatedMovies(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTopRatedMovies()
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
            <ListTitle title="Top Rated"/>
            <MediaList isTV={false} mediaList={movies}/>
        </div>;
    }
}

export default TopRatedMovies;