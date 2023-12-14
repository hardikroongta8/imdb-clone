import React, { useEffect, useState } from "react";
import { getOnTheAirShows } from "../../api/shows";
import { CircularProgress } from "@mui/material";
import ListTitle from '../../components/ListTitle';
import MediaList from "../../components/MediaList";

function OnTheAirShows(){
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOnTheAirShows()
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
            <ListTitle title="On The Air"/>
            <MediaList isTV={true} mediaList={shows}/>
        </div>;
    }
}

export default OnTheAirShows;