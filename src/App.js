import './App.css';

import 'antd/dist/antd.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from "redux";
import reducer from "./store/reducer";


import NavBar from './components/NavBar';

import Homepage from './containers/Homepage';
import MovielistPage from './containers/MovielistPage';
import MovieDetailsPage from './containers/MovieDetailsPage';
import CustomPage from './containers/CustomPage';

import { APIs } from './constant/constant';


const store = createStore(reducer, composeWithDevTools());

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/movie" exact>
              <MovielistPage API={APIs.POPULAR_MOVIES} list_name="movie_popularList" title="Popular Movies"/>
            </Route>
            <Route path="/movie/now-playing" exact>
              <MovielistPage API={APIs.NOW_PLAYING_MOVIES} list_name="movie_now_playing" title="Now Playing Movies"/>
            </Route>
            <Route path="/movie/upcoming" exact>
              <MovielistPage API={APIs.UPCOMING_MOVIES} list_name="movie_upcoming" title="Upcoming Movies"/>
            </Route>
            <Route path="/movie/top-rated" exact>
              <MovielistPage API={APIs.TOP_RATED_MOVIES} list_name="movie_top_rated" title="Top Rated Movies"/>
            </Route>
            <Route path="/tv" exact>
              <MovielistPage API={APIs.POPULAR_TV} list_name="tv_popularList" list_type="tv" title="Popular TV Shows"/>
            </Route>
            <Route path="/tv/airing-today" exact>
              <MovielistPage API={APIs.AIRING_TODAY_TV} list_name="tv_airing_today" list_type="tv" title="TV Shows Airing Today"/>
            </Route>
            <Route path="/tv/on-the-air" exact>
              <MovielistPage API={APIs.ON_THE_AIR_TV} list_name="tv_on_the_air" list_type="tv" title="Currently Airing TV Shows"/>
            </Route>
            <Route path="/tv/top-rated" exact>
              <MovielistPage API={APIs.TOP_RATED_TV} list_name="tv_top_rated" list_type="tv" title="Top Rated TV Shows"/>
            </Route>
            <Route path="/my-list/liked" exact>
              <CustomPage list_name="liked_list"/>
            </Route>
            <Route path="/my-list/blocked" exact>
              <CustomPage list_name="blocked_list"/>
            </Route>
            <Route path="/movie/:id" >
              <MovieDetailsPage />
            </Route>
            <Route path="/tv/:id" >
              <MovieDetailsPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
