import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/templatePersonal.css';
import { Fragment } from 'react';

export default function TemplatePersonal({ name, email, phone, address }) {
  return (
    <div className="personal">
      <h1>{name}</h1>
      <div className="info">
        <div className="email">
          {email ? (
            <Fragment>
              <FontAwesomeIcon
                icon="fa-solid fa-envelope"
                style={{ color: '#ffffff' }}
              />
              {' ' + email}
            </Fragment>
          ) : (
            ''
          )}
        </div>
        <div className="number">
          {phone ? (
            <Fragment>
              <FontAwesomeIcon
                icon="fa-solid fa-phone"
                style={{ color: '#ffffff' }}
              />
              {' ' + phone}
            </Fragment>
          ) : (
            ''
          )}
        </div>
        <div className="address">
          {address ? (
            <Fragment>
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                style={{ color: '#ffffff' }}
              />
              {' ' + address}
            </Fragment>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
