import '../styles/template.css';
import TemplatePersonal from './templatePersonal';
import TemplateSection from './templateSection';
import { defaulTemp, defaultEducation, defaultExperience } from '../data/data';

export default function Template({
  useDefaulTemp,
  data,
  education,
  experience,
}) {
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

        {(education || (useDefaulTemp ? defaultEducation : [])).map((item) => {
          return (
            <TemplateSection
              key={item.degree}
              title={item.degree}
              organization={item.institution}
              location={item.universityLocation}
              startDate={item.degreeStartDate}
              endDate={item.degreeEndDate}
            />
          );
        })}
      </div>

      <div className="experience">
        {(useDefaulTemp || experience) && <h2>Experience</h2>}
        {(experience || (useDefaulTemp ? defaultExperience : [])).map(
          (field) => {
            return (
              <TemplateSection
                key={field.jobTitle}
                title={field.jobTitle}
                organization={field.jobOrganization}
                location={field.jobLocation}
                startDate={field.jobStartDate}
                endDate={field.jobEndtDate}
                description={field.jobDescription}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
