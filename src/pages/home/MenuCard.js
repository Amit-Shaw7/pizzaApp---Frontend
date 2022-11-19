import React from 'react';
import { BiRupee } from 'react-icons/bi';
import noimage from "../../assets/noimage.png";
import { server } from '../../redux/Store';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';


const MenuCard = ({ product, idx }) => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const itemTodd = {
        userId: user?._id,
        productId: product?._id,
        qty: 1,
        title: product?.title,
        price: product?.price
    }
    const addToCart = async () => {
        const url = `${server}/carts/addtocart`;
        const res = await axios.patch(url, itemTodd, {
            withCredentials: true
        });
        // console.log("Product : " , itemTodd )
        if (res.data.cart) {
            toast.success("Added To Cart");
            dispatch({
                type: "INCREMENT_CART_iTEM_COUNT"
            });
        } else {
            toast.error("Already present in cart");
        }
    }

    return (
        <div className='menu-card'>
            <div>Pijja-{idx + 1}</div>
            <main>
                <img src={product?.photoUrl === "nourl" ? noimage : product?.photoUrl} alt={idx + 1} />
                <p>{product?.title}</p>
                <h5><BiRupee />{product.price}</h5>
                <button onClick={addToCart}>ADD TO CART</button>
            </main>
        </div>
    )
}

export default MenuCard