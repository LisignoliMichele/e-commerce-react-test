import React from 'react';

import './button.stylesheet.scss'

const Button = ({ children, isGoogleSignIn, inverted,...otherProps}) => (
   <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} button`} {...otherProps}>
     {children}
   </button>
);

export default Button