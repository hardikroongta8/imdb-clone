import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NowPlayingMovies from './pages/movies/NowPlayingMovies';
import TopRatedMovies from './pages/movies/TopRatedMovies';
import PopularMovies from './pages/movies/PopularMovies';
import UpcomingMovies from './pages/movies/UpcomingMovies';
import AiringTodayShows from './pages/shows/AiringTodayShows';
import OnTheAirShows from './pages/shows/OnTheAirShows';
import PopularShows from './pages/shows/PopularShows';
import TopRatedShows from './pages/shows/TopRatedShows';
import MediaDetails from './pages/common/MediaDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movie/" element={<Outlet/>}>
            <Route path="top_rated" element={<TopRatedMovies/>}/>
            <Route path="upcoming" element={<UpcomingMovies/>}/>
            <Route path="now_playing" element={<NowPlayingMovies/>}/>
            <Route path="popular" element={<PopularMovies/>}/>
            <Route path='details' element={<MediaDetails/>}/>
          </Route>
          <Route path="tv/" element={<Outlet/>}>
            <Route path="top_rated" element={<TopRatedShows/>}/>
            <Route path="on_the_air" element={<OnTheAirShows/>}/>
            <Route path="airing_today" element={<AiringTodayShows/>}/>
            <Route path="popular" element={<PopularShows/>}/>
            <Route path='details' element={<MediaDetails/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
