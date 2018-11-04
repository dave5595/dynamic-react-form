import React from 'react';
import Title from '../Title/Component';
import './Header.css';

const Header = ({ title }) => (
  <header className="container">
    <Title className="header" name={title} />
  </header>
);

export default Header;