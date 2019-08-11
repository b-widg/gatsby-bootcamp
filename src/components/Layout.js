import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = props => {
  return (
    <div class={layoutStyles.container}>
      <div class={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
