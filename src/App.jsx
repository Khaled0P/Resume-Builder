// import ReactDOM from 'react-dom';
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import './App.css';
import Customize from './components/Customize';
import Template from './components/template';

function App() {
  const [useDefaulTemp, setUseDefaultTemp] = useState(true);
  const [currentData, setCurrentData] = useState({});

  return (
    <>
      <Customize
        control={setUseDefaultTemp}
        setData={setCurrentData}
        data={currentData}
      />
      <Template useDefaulTemp={useDefaulTemp} data={currentData} />
    </>
  );
}

export default App;
