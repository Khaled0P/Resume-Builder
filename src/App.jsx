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
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <>
      <Customize
        control={setUseDefaultTemp}
        setData={setCurrentData}
        setEducation={setEducation}
        setExperience={setExperience}
        education={education}
        experience={experience}
        data={currentData}
      />
      <Template
        useDefaulTemp={useDefaulTemp}
        data={currentData}
        education={education}
        experience={experience}
        setEducation={setEducation}
        setExperience={setExperience}
      />
    </>
  );
}

export default App;
