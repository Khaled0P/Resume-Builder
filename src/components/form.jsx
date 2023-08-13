import { Fragment } from 'react';
import '../styles/form.css';

export default function AppForm({ list }) {
  const formItems = list.map((field) => (
    <Fragment key={field.id}>
      <label htmlFor={field.id}>
        {field.name}
        {field.required ? <span className="required"> required</span> : ''}
      </label>
      {field.type === 'textarea' ? (
        <textarea id={field.id}></textarea>
      ) : (
        <input type={field.type} required={field.required} />
      )}
    </Fragment>
  ));

  return <form>{formItems}</form>;
}
