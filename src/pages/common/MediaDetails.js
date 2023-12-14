import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getShowDetails } from "../../api/shows";
import { getMovieDetails } from "../../api/movies";

function MediaDetails() {
    const [loading, setLoading] = useState(true);
    const [mediaDetails, setMediaDetails] = useState(null);

    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if(location.state.isTV){
            getShowDetails(location.state.id)
            .then(data => {
                setMediaDetails(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
        }else{
            getMovieDetails(location.state.id)
            .then(data => {
                setMediaDetails(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [location]);

    if(loading){
        return <div  className='progressbar'><CircularProgress/></div>;
    }
    else {
        const genres = mediaDetails.genres.map(genre => <p key={genre.id}>{genre.name}</p>)

        return <div className="media-details">
            <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + mediaDetails.poster_path}
                className="media-details-poster" alt="hi"/>
            <section>
                <div className="media-details-title">
                    <div className="media-details-title-item">
                        <b><p>{location.state.isTV ? mediaDetails.name : mediaDetails.title}</p></b>
                    </div>
                    <div className="media-details-title-item">
                        <p>({(location.state.isTV ? mediaDetails.first_air_date : mediaDetails.release_date).split('-')[0]})</p>
                    </div>
                </div>
                <div className="media-details-genres">{genres}</div>
                <div className="media-details-tagline"><p>{mediaDetails.tagline}</p></div>
                <div className="media-details-overview">
                    <p className="media-details-overview-heading">Overview</p>
                    <p className="media-details-overview-content">{mediaDetails.overview}</p>
                </div>
            </section>

        </div>;
    }
}

export default MediaDetails;