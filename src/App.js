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


const store = createStore(reducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
