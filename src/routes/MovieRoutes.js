import { Outlet, Route } from "react-router-dom";
import TopRatedMovies from "../pages/movies/TopRatedMovies";
import UpcomingMovies from "../pages/movies/UpcomingMovies";
import NowPlayingMovies from "../pages/movies/NowPlayingMovies";
import PopularMovies from "../pages/movies/PopularMovies";
import MediaDetails from "../pages/common/MediaDetails";
import AuthWrapper from "../components/AuthWrapper";

const MovieRoutes = 
    <Route path="movie" element={<Outlet/>}>
        <Route path="top_rated" element={<TopRatedMovies/>}/>
        <Route path="upcoming" element={<UpcomingMovies/>}/>
        <Route path="now_playing" element={<NowPlayingMovies/>}/>
        <Route path="popular" element={<PopularMovies/>}/>
        <Route path='details/:id' element={
            <AuthWrapper>
                <MediaDetails isTV={false}/>
            </AuthWrapper>
        }/>
    </Route>;

export default MovieRoutes;