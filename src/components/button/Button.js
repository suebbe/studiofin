import React from 'react';
import PropTypes from 'prop-types';

 const Button = (props) => {
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: 'btn btn-primary',
  type: null,
  onClick: null
}

export default Button;
