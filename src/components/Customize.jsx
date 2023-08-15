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
  return (
    <div className="customize">
      <DefaultTemplateControl control={control} />
      <AppSection
        fieldName="Personal Info"
        list={personalFieldInfo}
        setData={setData}
        data={data}
      />
      <AppSection
        fieldName="Education"
        list={educationFieldInfo}
        setData={setEducation}
        data={education}
      />
      <AppSection
        fieldName="Experience"
        list={experienceFieldInfo}
        setData={setExperience}
        data={experience}
      />
    </div>
  );
}
