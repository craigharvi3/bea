// TODO: This is not production ready
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const getClasses = (colour, size, outlined, rounded, inverted, state) => {
  const classes = {
    [`is-${colour}`]: colour,
    [`is-${size}`]: size,
    [`is-${state}`]: state,
    'is-outlined': outlined,
    'is-rounded': rounded,
    'is-inverted': inverted
  };
  return classnames(classes);
}

const Button = ({ children, colour, size, outlined, rounded, inverted, disabled, state }) => (
  <button disabled={disabled} className={`button ${getClasses(colour, size, outlined, rounded, inverted, state)}`}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
