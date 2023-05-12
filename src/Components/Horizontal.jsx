import React from 'react';
import Id_1_Profile from '../Assets/Img/ProfilePicture_001.jpg';

const Horizontal = () => {
return (
    <div className="card text-dark rounded-20 animate__animated animate__fadeInUp" >

      <div lassName="row justify-content-center g-0">
        <div className="col-4">
          <img src={Id_1_Profile} alt="Foto hospedaje" className="img-fluid rounded-circle m-0 p-0 g-0" />
        </div>
        <div className="col-8 card-body text-dark m-0 p-0 g-0">
          <h5 className="card-title m-0 p-0">Nombre</h5>
          <h7 className="card-sub-title m-0 p-0"> años</h7>
          {/*<p className="card-text text-secondary m-0 p-0">{birthdate}</p>*/}
          <p className="card-text text-secondary m-0 p-0"></p>
          {/*<p className="card-text text-secondary m-0 p-0">{days}</p>
              <p className="card-text text-secondary m-0 p-0">{hours}</p>*/}
          <p className="card-text text-secondary m-0 p-0">sobre mi</p>
          <ul className="list-group list-group-flush m-0 p-0">
            <li className="list-group-item m-0 p-0">Telefono</li>
          </ul>
          {/*<a href={link} classNameName="btn btn-outline-primary rounded-15">Ver más</a>*/}
        </div>
      </div>

      <div lassName="row">
        <div className="card accordion accordion-flush" id={id}>
          <div className="accordion-item" id={id}>
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Habilidades
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><p className="card-text text-secondary m-0 p-0">tengo habilidades varias</p></div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Experiencia
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent={id}>
              <div className="accordion-body"> <p className="card-text text-secondary m-0 p-0">tengo algo de experiencia</p>.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Horizontal.propTypes = {
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

export { Horizontal };