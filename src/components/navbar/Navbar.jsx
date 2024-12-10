import React from 'react';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import "../../styles/components/navbar/navbar.css"; // Ensure this path matches the file structure

export default function Navbar() {
  return (
    <div id='nav_bar'>
      <Logo />
      <Menu />
    </div>
  );
}







