import { useState } from 'react';
import AppSection from './AppSection';
import '../styles/Customize.css';
import DefaultTemplateControl from './defaultTemplateControl';
import {
  personalFieldInfo,
  educationFieldInfo,
  experienceFieldInfo,
} from '../data/data';

export default function Customize({
  control,
  setData,
  data,
  setEducation,
  setExperience,
  education,
  experience,
}) {
  const [dropDown, setDropDown] = useState(1);

  function handleClick(value) {
    dropDown === value ? setDropDown(0) : setDropDown(value);
  }
  return (
    <div className="customize">
      <DefaultTemplateControl control={control} />
      <AppSection
        fieldName="Personal Info"
        list={personalFieldInfo}
        setData={setData}
        data={data}
        onClick={() => handleClick(1)}
        className={`container ${dropDown === 1 ? 'dropDown' : ''}`}
      />
      <AppSection
        fieldName="Education"
        list={educationFieldInfo}
        setData={setEducation}
        data={education}
        onClick={() => handleClick(2)}
        className={`container ${dropDown === 2 ? 'dropDown' : ''}`}
      />
      <AppSection
        fieldName="Experience"
        list={experienceFieldInfo}
        setData={setExperience}
        data={experience}
        onClick={() => handleClick(3)}
        className={`container ${dropDown === 3 ? 'dropDown' : ''}`}
      />
    </div>
  );
}
