import { Fragment } from 'react';
import '../styles/form.css';

export default function AppForm({ list, setData }) {
  let fieldValue;
  function handleOnChange(e) {
    const property = e.target.className;
    const newData = {};
    fieldValue = e.target.value;
    newData[property] = fieldValue;
    setData(newData);
  }
  const formItems = list.map((field) => (
    <Fragment key={field.id}>
      <label htmlFor={field.id}>
        {field.name}
        {field.required ? <span className="required"> required</span> : ''}
      </label>
      {field.type === 'textarea' ? (
        <textarea id={field.id}></textarea>
      ) : (
        <input
          className={field.id}
          type={field.type}
          required={field.required}
          onChange={handleOnChange}
        />
      )}
    </Fragment>
  ));

  return <form>{formItems}</form>;
}
