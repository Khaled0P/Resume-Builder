import '../styles/template.css';
import TemplatePersonal from './templatePersonal';
import TemplateSection from './templateSection';
import { defaulTemp, defaultEducation, defaultExperience } from '../data/data';
import Button from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Template({
  useDefaulTemp,
  data,
  education,
  experience,
  setEducation,
  setExperience,
}) {
  function handleRemove(item, key, list, setList) {
    setList(
      list.filter((field) => {
        return field[key] !== item[key];
      })
    );
  }

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
        ).map((field) => {
          return (
            <div key={field.degree} className="field">
              <TemplateSection
                title={field.degree}
                organization={field.institution}
                location={field.universityLocation}
                startDate={field.degreeStartDate}
                endDate={field.degreeEndDate}
              />
              {education.length !== 0 && (
                <Button
                  icon={
                    <FontAwesomeIcon
                      icon="fa-solid fa-trash-can"
                      style={{ color: '#db1a1a' }}
                    />
                  }
                  onClick={() => {
                    handleRemove(field, 'degree', education, setEducation);
                  }}
                />
              )}
            </div>
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
            <div key={field.position} className="field">
              <TemplateSection
                title={field.position}
                organization={field.company}
                location={field.location}
                startDate={field.startDate}
                endDate={field.endtDate}
                description={field.description}
              />
              {experience.length !== 0 && (
                <Button
                  icon={
                    <FontAwesomeIcon
                      icon="fa-solid fa-trash-can"
                      style={{ color: '#db1a1a' }}
                    />
                  }
                  onClick={() => {
                    handleRemove(field, 'position', experience, setExperience);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
