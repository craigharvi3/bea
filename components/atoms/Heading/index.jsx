// TODO: This is not production ready
import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children);

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default Heading;
