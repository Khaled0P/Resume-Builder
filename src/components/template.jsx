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
  return (
    <div className="template">
      <TemplatePersonal
        name={data.name || (useDefaulTemp && defaulTemp.name)}
        email={data.email || (useDefaulTemp && defaulTemp.email)}
        phone={data.phone || (useDefaulTemp && defaulTemp.phone)}
        address={data.address || (useDefaulTemp && defaulTemp.address)}
      />

      <div className="education">
        {(useDefaulTemp || education.length !== 0) && <h2>Education</h2>}

        {(
          (education.length && education) ||
          (useDefaulTemp ? defaultEducation : [])
        ).map((item) => {
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
        {(useDefaulTemp || experience.length !== 0) && <h2>Experience</h2>}
        {(
          (experience.length && experience) ||
          (useDefaulTemp ? defaultExperience : [])
        ).map((field) => {
          return (
            <TemplateSection
              key={field.position}
              title={field.position}
              organization={field.company}
              location={field.location}
              startDate={field.startDate}
              endDate={field.endtDate}
              description={field.description}
            />
          );
        })}
      </div>
    </div>
  );
}
