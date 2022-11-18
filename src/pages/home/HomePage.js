import React, { useEffect } from 'react';
import Founder from './Founder';
import Hero from './Hero';
import Menu from './Menu';
import "../../styles/home.scss";
import '../../styles/founder.scss';
import '../../styles/menu.scss';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <Hero />
      <Founder />
      <Menu />
    </>
  )
}

export default HomePage