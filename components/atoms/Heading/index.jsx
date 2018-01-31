import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level, children, ...props }) => {
  return (
    React.createElement(`h${level}`, Object.assign({}, props, {
      className: `title is-${level}`
    }), children)
  );
};

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default Heading;
