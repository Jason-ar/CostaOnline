import React from 'react';
import PropTypes from 'prop-types';
//import '../../styles/Cards.css';

function ShopCard({shopName, image, direction, category, schedule, phone, link}) {
  return (
    <div className="card text-center text-dark rounded-20 animate__animated animate__fadeInUp">
      <div className="img-container">
          <img src={image} alt="Foto hospedaje" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
          <h4 className="card-title">{shopName}</h4>
          <h7 className="card-sub-title m-0 p-0">{category}</h7>
          <p className="card-text text-secondary m-0 p-0">{schedule}</p>
          <p className="card-text text-secondary m-0 p-0">{direction}</p>
          <p className="card-text text-secondary m-0 p-0">{phone}</p>
          {/*<a href={link} className="btn btn-outline-primary rounded-15">Ver más</a>*/}
      </div>
    </div>
  );
}
ShopCard.propTypes = {
  shopName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  category: PropTypes.string,
  schedule: PropTypes.string,
  phone: PropTypes.string,
  link: PropTypes.string,
}

export { ShopCard };