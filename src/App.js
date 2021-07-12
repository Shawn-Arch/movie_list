import React, { useState } from 'react';
import { render } from 'react-dom';
import './App.css';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './mysass.scss';

function App() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <div>
        <h1>Hello Style!</h1>
        <p>Add a little style!.</p>
      </div>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
  );
}

export default App;
