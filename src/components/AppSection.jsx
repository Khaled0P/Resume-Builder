import Button from './button';
import AppForm from './form';
import '../styles/AppSection.css';

export default function AppSection({ fieldName, icon, list, setData }) {
  return (
    <div className="container">
      <h1>
        {icon} {fieldName}
      </h1>
      <AppForm list={list} setData={setData} />
      <div className="buttonGroup">
        <Button name={'cancel'} />
        <Button name={'submit'} />
      </div>
    </div>
  );
}
