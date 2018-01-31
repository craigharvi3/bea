import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Breadcrumb = ({ items, alignment, separator, size }) => {

  if (!items.length) {
    return null;
  }

  const crumbs = items.map((item, index) => {
    const classess = classNames({
      'is-active': index === items.length - 1
    });

    return (
      <li className={classess}>
        <a href={item.href}>{item.text}</a>
      </li>
    )
  });

  const componentClasses = classNames({
    'breadcrumb': true,
    [`is-${alignment}`]: alignment,
    [`has-${separator}-separator`]: separator,
    [`is-${size}`]: size
  })

  return (
    <nav class={componentClasses}>
      <ul>
        {crumbs}
      </ul>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.array,
  alignment: PropTypes.oneOf(['centered', 'right']),
  separator: PropTypes.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default Breadcrumb;
