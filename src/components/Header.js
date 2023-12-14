import { Link } from "react-router-dom";
import MoviesDropdown from "./MoviesDropdown";
import TvDropdown from "./TvDropdown";

function Header() {
    return <header>
        <nav className="navbar">
            <Link className="title" to="/"><h1>imdb</h1></Link>
            <div className="navlist">
                <MoviesDropdown/>
                <TvDropdown/>
            </div>
        </nav>
    </header>
}

export default Header;