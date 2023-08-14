import { Fragment, useState } from 'react';
import Button from './button';
import '../styles/form.css';

export default function AppForm({ list, setData, data }) {
  const [prevData, setPrevData] = useState(data);

  function handleOnChange(e) {
    const property = e.target.name;
    setData({ ...data, [property]: e.target.value });
  }

  function handleSubmit(e) {
    setPrevData(data);
    e.preventDefault();
  }
  function handleCancel() {
    setData(prevData);
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
          name={field.id}
          type={field.type}
          required={field.required}
          onChange={handleOnChange}
        />
      )}
    </Fragment>
  ));

  return (
    <form>
      {formItems}
      <div className="buttonGroup">
        <Button name={'cancel'} onClick={handleCancel} />
        <Button name={'submit'} onClick={handleSubmit} />
      </div>
    </form>
  );
}
