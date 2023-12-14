import { Link } from "react-router-dom";

function TvDropdown() {
    return <div className="dropdown">
        <div className="dropdown-tile">TV Shows</div>
        <div className="dropdown-content">
            <li>
                <Link className="dropdown-item" to="/tv/popular">Popular</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/tv/on_the_air">On The Air</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/tv/airing_today">Airing Today</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/tv/top_rated">Top Rated</Link>
            </li>
        </div>
    </div>;
}

export default TvDropdown;