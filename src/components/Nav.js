import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/blog">Blog</Link>
      <br></br>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
