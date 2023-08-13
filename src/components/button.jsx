import '../styles/button.css';

export default function Button({ name, handleOnClick, className, icon }) {
  return (
    <button className={className || name} onClick={handleOnClick}>
      {icon ? icon : ''} {name}
    </button>
  );
}
