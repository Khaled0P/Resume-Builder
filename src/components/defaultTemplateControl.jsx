import Button from './button';
import '../styles/defaultTemplateControl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DefaultTemplateControl({ control }) {
  const trashIcon = <FontAwesomeIcon icon="fa-solid fa-trash" />;
  function useDefaultTemplate() {
    control(true);
  }
  function clearDefaultTemplate() {
    control(false);
  }
  return (
    <div className="defaultControl">
      <Button
        name="Clear Resume"
        icon={trashIcon}
        className="clear"
        onClick={clearDefaultTemplate}
      />
      <Button
        name="Load Example"
        className="useDefault"
        onClick={useDefaultTemplate}
      />
    </div>
  );
}
