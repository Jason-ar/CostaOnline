import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '../../../node_modules/bootstrap/js/src/collapse'
//import '../../styles/Cards.css';

function EmployeesCard({ id, name, profilePicture, phone, age, birthdate, days, hours, skills, aboutme, experience, link }) {
  return (
    <div className="card text-dark rounded-20 animate__animated animate__fadeInUp" >

      <div lassName="justify-text-center g-0">
        <div className="m-0 p-1">
          <img src={profilePicture} alt="Foto hospedaje" className="img-fluid rounded-circle m-0 p-1 g-0 w-50" />
        </div>
        <div className="card-body text-dark m-0 p-0 g-0">
          <h5 className="card-title m-0 p-0">{name}</h5>
          <h7 className="card-sub-title m-0 p-0">{age} años</h7>
          {/*<p className="card-text text-secondary m-0 p-0">{birthdate}</p>*/}
          <p className="card-text text-secondary m-0 p-0"></p>
          {/*<p className="card-text text-secondary m-0 p-0">{days}</p>
              <p className="card-text text-secondary m-0 p-0">{hours}</p>*/}
          <p className="card-text text-secondary m-0 p-0">{aboutme}</p>
          <ul className="list-group list-group-flush m-0 p-0">
            <li className="list-group-item m-0 p-0">{phone}</li>
          </ul>
          {/*<a href={link} classNameName="btn btn-outline-primary rounded-15">Ver más</a>*/}
        </div>
      </div>

      <div lassName="row">
        <div className="card accordion accordion-flush text-center" id={id}>
          <div className="accordion-item" id={id}>
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed m-0 p-1 text-center justify-text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Habilidades
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse justify-text-center" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><p className="card-text text-secondary m-0 p-0">{skills}</p></div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Experiencia
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent={id}>
              <div className="accordion-body"> <p className="card-text text-secondary m-0 p-0">{experience}</p></div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

EmployeesCard.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  phone: PropTypes.string,
  age: PropTypes.string,
  birthdate: PropTypes.string,
  days: PropTypes.string,
  hours: PropTypes.string,
  skills: PropTypes.string,
  aboutme: PropTypes.string,
  experience: PropTypes.string,
  link: PropTypes.string,
}

export { EmployeesCard };