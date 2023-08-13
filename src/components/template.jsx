import '../styles/template.css';
import TemplatePersonal from './templatePersonal';
import TemplateSection from './templateSection';
import { defaulTemp } from '../data/data';

export default function Template({ useDefaulTemp, data }) {
  // eslint-disable-next-line no-unused-vars
  return (
    <div className="template">
      <TemplatePersonal
        name={data.name || (useDefaulTemp && defaulTemp.name)}
        email={data.email || (useDefaulTemp && defaulTemp.email)}
        phone={data.phone || (useDefaulTemp && defaulTemp.phone)}
        address={data.address || (useDefaulTemp && defaulTemp.address)}
      />
      <div className="education">
        {useDefaulTemp && <h2>Education</h2>}
        <TemplateSection
          title={data.degree || (useDefaulTemp && defaulTemp.degree)}
          organization={
            data.university || (useDefaulTemp && defaulTemp.university)
          }
          location={
            data.universityLocation ||
            (useDefaulTemp && defaulTemp.universityLocation)
          }
          startDate={
            data.degreeStartDate ||
            (useDefaulTemp && defaulTemp.degreeStartDate)
          }
          endDate={data.deg || (useDefaulTemp && defaulTemp.degreeEndDate)}
        />
      </div>
      <div className="experience">
        {useDefaulTemp && <h2>Experience</h2>}
        <TemplateSection
          title={
            data.firstJobTitle || (useDefaulTemp && defaulTemp.firstJobTitle)
          }
          organization={
            data.firstJobOrganization ||
            (useDefaulTemp && defaulTemp.firstJobOrganization)
          }
          location={
            data.firstJobLocation ||
            (useDefaulTemp && defaulTemp.firstJobLocation)
          }
          startDate={
            data.firstJobStartDate ||
            (useDefaulTemp && defaulTemp.firstJobStartDate)
          }
          endDate={
            data.firstJobEndtDate ||
            (useDefaulTemp && defaulTemp.firstJobEndtDate)
          }
          description={
            data.firstJobDescription ||
            (useDefaulTemp && defaulTemp.firstJobDescription)
          }
        />
        <TemplateSection
          title={
            data.secondJobTitle || (useDefaulTemp && defaulTemp.secondJobTitle)
          }
          organization={
            data.secondJobOrganization ||
            (useDefaulTemp.secondJobOrganization &&
              defaulTemp.secondJobOrganization)
          }
          location={
            data.secondJobLocation ||
            (useDefaulTemp && defaulTemp.secondJobLocation)
          }
          startDate={
            data.secondJobStartDate ||
            (useDefaulTemp && defaulTemp.secondJobStartDate)
          }
          endDate={
            data.secondJobEndtDate ||
            (useDefaulTemp && defaulTemp.secondJobEndtDate)
          }
          description={
            data.secondJobDescription ||
            (useDefaulTemp && defaulTemp.secondJobDescription)
          }
        />
      </div>
    </div>
  );
}
