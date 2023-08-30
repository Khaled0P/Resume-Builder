import AppForm from './form';
import '../styles/AppSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AppSection({
  fieldName,
  icon,
  list,
  setData,
  data,
  onClick,
  className,
}) {
  return (
    <div className={className}>
      <div className="header">
        <h2>
          {icon} {fieldName}
          <button onClick={onClick} className="dropDownBtn">
            <FontAwesomeIcon
              icon="fa-solid fa-angle-up"
              rotation={180}
              style={{ color: '#0d0c0c' }}
            />
          </button>
        </h2>
      </div>
      <div className="dropDownForm">
        <AppForm list={list} setData={setData} data={data} />
      </div>
    </div>
  );
}
