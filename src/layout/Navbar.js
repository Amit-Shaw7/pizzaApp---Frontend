import React, { useState } from 'react';
import { IoPizza } from "react-icons/io5"
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import '../styles/navbar.scss';

const Navbar = ({ isAuthenticated }) => {
  const { cartItemsCount } = useSelector(state => state.cart);
  const [selected, setSelected] = useState('home');
  return (
    <nav>
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0" }}
      >
       <Link to="/"> <IoPizza style={{fontSize:"3rem"}}/></Link>
      </motion.div>
      <div>
        <Link style={{ color: `${selected === 'home' ? "#fc8019" : "black"}` }} onClick={() => setSelected("home")} to="/">Home</Link>
        <Link style={{ color: `${selected === 'contact' ? "#fc8019" : "black"}` }} onClick={() => setSelected("contact")} to="/contact">Contact</Link>
        <Link style={{ color: `${selected === 'about' ? "#fc8019" : "black"}` }} onClick={() => setSelected("about")} to="/about">About</Link>

        <Link style={{ color: `${selected === 'cart' ? "#fc8019" : "black"}` }} onClick={() => setSelected("cart")} to="/cart">
          <div className='cartValueCont'>
            <FiShoppingCart />
            <div className='cartValue'>{cartItemsCount ? cartItemsCount : 0}</div>
          </div>
        </Link>

        <Link style={{ color: `${selected === 'auth' ? "#fc8019" : "black"}` }} onClick={() => setSelected("auth")} to={isAuthenticated ? "/profile" : "/login"}>
          {
            isAuthenticated ? <FaUser /> : <FiLogIn />
          }
        </Link>
      </div>
    </nav>
  )
}

export default Navbar