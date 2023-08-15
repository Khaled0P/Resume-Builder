import '../styles/button.css';

export default function Button({ name, onClick, className, icon }) {
  return (
    <button className={className || name} onClick={onClick} type="general">
      {icon ? icon : ''} {name}
    </button>
  );
}
