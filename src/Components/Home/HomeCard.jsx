import React from 'react';
import PropTypes from 'prop-types';
//import '../styles/cards.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function SimpleHomeCard({ titulo, image, subtitulo, resumen, link }) {
  return (
    <div className="card text-dark text-center border-0 rounded-20 animate__animated animate__fadeInUp">
      {/*<div className="img-container">
        <img src={image} alt="Foto hospedaje" className="card-img-top"/>
      </div>*/}
      <Link to={link} className="btn border-0 rounded-25">
        <div className="card-body border-0 m-0 p-0">
          <h6 className="card text-dark border-0 m-0 p-0">{titulo}</h6>
          {/*<div>
          <p className="card-text">{subtitulo}</p>
          <p className="card-text">{resumen}</p>
          <p className="card-text text-secondary">{link}</p>
        </div>*/}
        </div>
      </Link>
    </div>
  );
};

SimpleHomeCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
  resumen: PropTypes.string,
};

export {SimpleHomeCard};