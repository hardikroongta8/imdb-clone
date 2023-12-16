import { Outlet, Route } from "react-router-dom";
import TopRatedShows from "../pages/shows/TopRatedShows";
import OnTheAirShows from "../pages/shows/OnTheAirShows";
import AiringTodayShows from "../pages/shows/AiringTodayShows";
import PopularShows from "../pages/shows/PopularShows";
import MediaDetails from "../pages/common/MediaDetails";
import AuthWrapper from "../components/AuthWrapper";

const TvRoutes = <Route path="tv/" element={<Outlet/>}>
    <Route path="top_rated" element={<TopRatedShows/>}/>
    <Route path="on_the_air" element={<OnTheAirShows/>}/>
    <Route path="airing_today" element={<AiringTodayShows/>}/>
    <Route path="popular" element={<PopularShows/>}/>
    <Route path='details/:id' element={
        <AuthWrapper>
            <MediaDetails isTV={true}/>
        </AuthWrapper>
    }/>
</Route>;

export default TvRoutes;