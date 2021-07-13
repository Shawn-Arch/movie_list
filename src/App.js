// import React, { useState } from 'react';
// import { render } from 'react-dom';
import './App.css';
// import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
// import './mysass.scss';

import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from "redux";
import reducer from "./store/reducer";


import NavBar from './components/NavBar';



const store = createStore(reducer, composeWithDevTools());

function App() {
  // const [date, setDate] = useState(null);
  // const handleChange = value => {
  //   message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
  //   setDate(value);
  // };
  return (
    <Provider store={store}>
      <>
        <NavBar/>
        <MovieCarousel/>
      </>
    </Provider>
  );
}

export default App;
