import { Link } from "react-router-dom";

export default function MediaTile({media, isTV}){
    return <div className="media-tile">
        <Link className="media-tile-link" to={`/${isTV ? "tv" : "movie"}/details`} state={{id: media.id, isTV: isTV}}>
            <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + media.poster_path}
                className="media-poster" alt="hi"/>
            <p className="media-title">{isTV ? media.original_name : media.original_title}</p>
        </Link>
    </div>
}