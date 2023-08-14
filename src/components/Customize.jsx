import AppSection from './AppSection';
import '../styles/Customize.css';
import DefaultTemplateControl from './defaultTemplateControl';
import {
  personalFieldInfo,
  educationFieldInfo,
  experienceFieldInfo,
} from '../data/data';

export default function Customize({ control, setData, data }) {
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
        setData={setData}
        data={data}
      />
      <AppSection
        fieldName="Experience"
        list={experienceFieldInfo}
        setData={setData}
        data={data}
      />
    </div>
  );
}
