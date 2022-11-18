import React, { useEffect, useState } from 'react';
import { BiRupee } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri'
import pizza1 from "../../assets/mixed-veg-pizza.png";
import { deleteAItem } from '../../redux/actions/CartAction';
import Loader from '../../layout/Loader';


const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { loading } = useSelector(state => state.cart);

  const increment = () => {
    dispatch({
      type: "INCREMENT_QTY",
      payload: item?.productId
    });
    dispatch({ type: "RESET_PRICE" });
    dispatch({ type: "CALCULATE_PRICE" });
    setQty(qty + 1);
  }

  const decrement = () => {
    if (qty > 1) {
      dispatch({
        type: "DECREMENT_QTY",
        payload: item?.productId
      });
      dispatch({ type: "RESET_PRICE" });
      dispatch({ type: "CALCULATE_PRICE" });
      setQty(qty - 1)
    }
  }

  const deleteItem = () => {
    dispatch(deleteAItem(item?.productId));
  }


  return (
    <>
      {
        loading
          ?
          <Loader />
          :
          <div className='cart-item' >
            <div>
              <img src={pizza1} alt="Cheese Pizza" />
              <h5>{item?.title}</h5>
              <h4 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><BiRupee /> {item?.price}</h4>
            </div>
            <div>
              <button onClick={decrement}>-</button>
              <input readOnly type="number" value={qty} />
              <button onClick={increment}>+</button>
              <button className='delete' onClick={deleteItem}> <RiDeleteBin6Line /></button>
            </div>
          </div>
      }
    </>
  )
}

export default CartItem