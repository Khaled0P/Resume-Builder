import AppSection from './AppSection';
import '../styles/Customize.css';
import DefaultTemplateControl from './defaultTemplateControl';
import {
  personalFieldInfo,
  educationFieldInfo,
  experienceFieldInfo,
} from '../data/data';

export default function Customize({ control, setData }) {
  return (
    <div className="customize">
      <DefaultTemplateControl control={control} />
      <AppSection
        fieldName="Personal Info"
        list={personalFieldInfo}
        setData={setData}
      />
      <AppSection
        fieldName="Education"
        list={educationFieldInfo}
        setData={setData}
      />
      <AppSection
        fieldName="Experience"
        list={experienceFieldInfo}
        setData={setData}
      />
    </div>
  );
}
