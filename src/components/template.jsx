import '../styles/template.css';
import TemplatePersonal from './templatePersonal';
import TemplateSection from './templateSection';
import { defaulTemp } from '../data/data';

export default function Template({ useDefaulTemp }) {
  // eslint-disable-next-line no-unused-vars
  return (
    <div className="template">
      <TemplatePersonal
        name={useDefaulTemp ? defaulTemp.name : ''}
        email={useDefaulTemp ? defaulTemp.email : ''}
        phone={useDefaulTemp ? defaulTemp.phone : ''}
        address={useDefaulTemp ? defaulTemp.address : ''}
      />
      <div className="education">
        {useDefaulTemp ? <h2>Education</h2> : ''}
        <TemplateSection
          title={useDefaulTemp ? defaulTemp.degree : ''}
          organization={useDefaulTemp ? defaulTemp.university : ''}
          location={useDefaulTemp ? defaulTemp.universityLocation : ''}
          startDate={useDefaulTemp ? defaulTemp.degreeStartDate : ''}
          endDate={useDefaulTemp ? defaulTemp.degreeEndDate : ''}
        />
      </div>
      <div className="experience">
        {useDefaulTemp ? <h2>Experience</h2> : ''}
        <TemplateSection
          title={useDefaulTemp ? defaulTemp.firstJobTitle : ''}
          organization={useDefaulTemp ? defaulTemp.firstJobOrganization : ''}
          location={useDefaulTemp ? defaulTemp.firstJobLocation : ''}
          startDate={useDefaulTemp ? defaulTemp.firstJobStartDate : ''}
          endDate={useDefaulTemp ? defaulTemp.firstJobEndtDate : ''}
          description={useDefaulTemp ? defaulTemp.firstJobDescription : ''}
        />
        <TemplateSection
          title={useDefaulTemp ? defaulTemp.secondJobTitle : ''}
          organization={useDefaulTemp ? defaulTemp.secondJobOrganization : ''}
          location={useDefaulTemp ? defaulTemp.secondJobLocation : ''}
          startDate={useDefaulTemp ? defaulTemp.secondJobStartDate : ''}
          endDate={useDefaulTemp ? defaulTemp.secondJobEndtDate : ''}
          description={useDefaulTemp ? defaulTemp.secondJobDescription : ''}
        />
      </div>
    </div>
  );
}
