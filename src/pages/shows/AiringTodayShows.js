import React, { useEffect, useState } from "react";
import { getAiringTodayShows } from "../../api/shows";
import { CircularProgress } from "@mui/material";
import ListTitle from '../../components/ListTitle';
import MediaList from "../../components/MediaList";

function AiringTodayShows(){
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAiringTodayShows()
            .then(data => {
                console.log(data);
                setShows(data);
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
            <ListTitle title="Airing Today"/>
            <MediaList isTV={true} mediaList={shows}/>
        </div>;
    }
}

export default AiringTodayShows;