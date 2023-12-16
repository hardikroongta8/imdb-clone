import { Link } from "react-router-dom";
import MoviesDropdown from "./MoviesDropdown";
import TvDropdown from "./TvDropdown";
import { useContext } from "react";
import LogoutButton from "./LogoutButton";
import { authContext } from "../App";

function Header() {
    const loginContext = useContext(authContext);

    return <header>
        <nav className="navbar">
            <Link className="title" to="/"><h1>imdb</h1></Link>
            <div className="navlist">
                <MoviesDropdown/>
                <TvDropdown/>
                { loginContext.loginState && <LogoutButton/>}
            </div>
        </nav>
    </header>
}

export default Header;