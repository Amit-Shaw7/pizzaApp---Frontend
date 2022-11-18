import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';
import axios from 'axios';
import { server } from '../../redux/Store';

// import pizza4 from "../../assets/veg-pizza.png";

const Menu = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${server}/products/all`);
      // console.log(res.data.products);
      if (res.status === 200) {
        setProducts(res.data.products);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section id='menu'>
      <h1>Menu</h1>
      <div>
        {
          products.length !== 0 && products.map((product, idx) => (
            <MenuCard key={product._id} product={product} idx={idx}/>
          ))
        }
      </div>
    </section>
  )
}

export default Menu