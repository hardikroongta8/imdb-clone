import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../../api/movies";
import { CircularProgress } from "@mui/material";
import ListTitle from '../../components/ListTitle';
import MediaList from "../../components/MediaList";

function PopularMovies(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPopularMovies()
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
            <ListTitle title="Popular"/>
            <MediaList isTV={false} mediaList={movies}/>
        </div>;
    }
}

export default PopularMovies;