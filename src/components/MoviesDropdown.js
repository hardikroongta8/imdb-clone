import { Link } from "react-router-dom";

function MoviesDropdown() {
    return <div className="dropdown">
        <div className="dropdown-tile">Movies</div>
        <div className="dropdown-content">
            <li>
                <Link className="dropdown-item" to="/movie/popular">Popular</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/movie/upcoming">Upcoming</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/movie/now_playing">Now Playing</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/movie/top_rated">Top Rated</Link>
            </li>
        </div>
    </div>;
}

export default MoviesDropdown;