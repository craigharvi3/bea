import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type, size }) => {
  return (
    <span className='icon'>
      <i className={`fas fa-${type}`}></i>
    </span>
  );
};

Icon.propTypes = {
  type: PropTypes.string
};

export default Icon;
