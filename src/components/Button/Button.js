import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

function Button(props) {
  const { children, btnStyle, btnSize, onClick, type } = props;
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkBtnStyle} ${checkBtnSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}

export default Button;