import '../styles/templateSection.css';

export default function TemplateSection({
  title,
  organization,
  location,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="content">
      <div className="main">
        <p>
          <b>{title}</b>
        </p>
        <p>{organization}</p>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="secondary">
        <p>
          {startDate} {endDate ? '-' + endDate : ''}
        </p>
        <p>{location}</p>
      </div>
    </div>
  );
}
