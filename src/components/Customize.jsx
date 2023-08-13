import AppSection from './AppSection';
import '../styles/Customize.css';
import DefaultTemplateControl from './defaultTemplateControl';
import {
  personalFieldInfo,
  educationFieldInfo,
  experienceFieldInfo,
} from '../data/data';

export default function Customize({ control }) {
  return (
    <div className="customize">
      <DefaultTemplateControl control={control} />
      <AppSection fieldName="Personal Info" list={personalFieldInfo} />
      <AppSection fieldName="Education" list={educationFieldInfo} />
      <AppSection fieldName="Experience" list={experienceFieldInfo} />
    </div>
  );
}
