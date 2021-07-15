// import React, { useState } from 'react';
// import { render } from 'react-dom';
import './App.css';
// import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
// import './mysass.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from "redux";
import reducer from "./store/reducer";


import NavBar from './components/NavBar';
import MovieCarousel from './components/Carousel';

import Homepage from './containers/Homepage';
import MovielistPage from './containers/MovielistPage';
import MovieDetailsPage from './containers/MovieDetailsPage';

import { APIs } from './constant/constant';


const store = createStore(reducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/movie" exact>
            <MovielistPage API={APIs.POPULAR_MOVIES} list_name="movie_popularList"/>
          </Route>
          <Route path="/movie/now-playing" exact>
            <MovielistPage API={APIs.NOW_PLAYING_MOVIES} list_name="movie_now_playing"/>
          </Route>
          <Route path="/movie/upcoming" exact>
            <MovielistPage API={APIs.UPCOMING_MOVIES} list_name="movie_upcoming"/>
          </Route>
          <Route path="/movie/top-rated" exact>
            <MovielistPage API={APIs.TOP_RATED_MOVIES} list_name="movie_top_rated"/>
          </Route>
          <Route path="/tv" exact>
            <MovielistPage API={APIs.POPULAR_TV} list_name="tv_popularList"/>
          </Route>
          <Route path="/tv/airing-today" exact>
            <MovielistPage API={APIs.AIRING_TODAY_TV} list_name="tv_airing_today"/>
          </Route>
          <Route path="/tv/on-the-air" exact>
            <MovielistPage API={APIs.ON_THE_AIR_TV} list_name="tv_on_the_air"/>
          </Route>
          <Route path="/tv/top-rated" exact>
            <MovielistPage API={APIs.TOP_RATED_TV} list_name="tv_top_rated"/>
          </Route>
          {/* <Route path="/my-list/liked" exact>
            <MovielistPage API={APIs.POPULAR_MOVIES} list_name="liked_list"/>
          </Route>
          <Route path="/my-list/blocked" exact>
            <MovielistPage API={APIs.POPULAR_MOVIES} list_name="blocked_list"/>
          </Route> */}
          <Route path="/movie/:id" >
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
