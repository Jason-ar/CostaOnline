import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '../../../node_modules/bootstrap/js/src/collapse'
//import '../../styles/Cards.css';

function EmployeesCard({ name, profilePicture, phone, age, birthdate, days, hours, skills, aboutme, experience, link }) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
        <img src={profilePicture} alt="Foto hospedaje" className="card-img-top rounded-circle" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{name}</h4>
        <h7 className="card-sub-title m-0 p-0">{age} años</h7>
        {/*<p className="card-text text-secondary m-0 p-0">{birthdate}</p>*/}
        <p className="card-text text-secondary m-0 p-0">{phone}</p>
        {/*<p className="card-text text-secondary m-0 p-0">{days}</p>
          <p className="card-text text-secondary m-0 p-0">{hours}</p>*/}
        <p className="card-text text-secondary m-0 p-0">{skills}</p>
        <p className="card-text text-secondary m-0 p-0">{aboutme}</p>
        <p className="card-text text-secondary m-0 p-0">{experience}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Un elemento</li>
          <li class="list-group-item">Un segundo elemento</li>
          <li class="list-group-item">Un tercer elemento</li>
        </ul>
        {/*<a href={link} className="btn btn-outline-primary rounded-15">Ver más</a>*/}
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Habilidades
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Este es el cuerpo.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Experiencia
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Este es el cuerpo.</div>
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