import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { getShowDetails } from "../../api/shows";
import { getMovieDetails } from "../../api/movies";

function MediaDetails({isTV}) {
    const [loading, setLoading] = useState(true);
    const [mediaDetails, setMediaDetails] = useState(null);

    const params = useParams();

    useEffect(() => {
        if(isTV){
            getShowDetails(params.id)
            .then(data => {
                setMediaDetails(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
        }else{
            getMovieDetails(params.id)
            .then(data => {
                setMediaDetails(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [isTV, params]);

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
                        <b><p>{isTV ? mediaDetails.name : mediaDetails.title}</p></b>
                    </div>
                    <div className="media-details-title-item">
                        <p>({(isTV ? mediaDetails.first_air_date : mediaDetails.release_date).split('-')[0]})</p>
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