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
import TestFun from './components/testComponent';



const store = createStore(reducer, composeWithDevTools());

function App() {
  // const [date, setDate] = useState(null);
  // const handleChange = value => {
  //   message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
  //   setDate(value);
  // };
  return (
    <Provider store={store}>
      <NavBar/>
      {/* <div style={{ width: 400, margin: '100px auto' }}>
        <div>
          <h1>Hello Style!</h1>
          <p>Add a little style!.</p>
          <TestFun/>
        </div>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div>
      </div> */}
    </Provider>
  );
}

export default App;
