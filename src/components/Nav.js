import React from 'react';
import { Link } from 'gatsby';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> |
      <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
