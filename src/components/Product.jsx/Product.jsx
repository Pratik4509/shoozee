import React, { useState } from 'react';
import BaseFooter from '../BaseFooter/BaseFooter';
import Header from '../Header/Header';
import { useParams } from "react-router-dom";
import { data } from '../../data/data';
import styles from './Product.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const notify = () => toast.success('Product Added to Cart!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const id = useParams().productId;
    const productData = data.filter(d => d.id == id)
    const [displayImage, setDisplayImage] = useState(productData[0].img)
    const [qty, setQty] = useState(0);
    const dispatch = useDispatch();
    const user = useSelector(state=>state.auth.authData)
    const userEmail = user[0] !== undefined ? user[0].email : ''
    const handleAddToCart = () => {
        if (qty> 0) {
            notify()
            dispatch(addToCart({productData: productData[0], qty: qty, userEmail}))
        }
        else{
            alert('Please enter quantity')
        }
    }

    const cartData = useSelector(state=>state.cart.cartItems)
    console.log(cartData);
    return (
        <>
            <Header />
            <div className={styles.productWrapper}>
            <ToastContainer />

                <div className={styles.imageContainer}>
                    <ul>
                        {productData[0].thumbnail.map((thumb, id) => <li key={id} onMouseEnter={() => setDisplayImage(thumb)}><img src={thumb} alt='img'/></li>)}
                    </ul>
                    <div className={styles.displayImg}>
                        <img src={displayImage} alt={productData[0].name} />
                    </div>
                </div>
                <div className={styles.productInfo}>
                    <h2>{productData[0].name}</h2>
                    <p>{productData[0].type}</p>
                    <p><b>MRP: </b>₹{productData[0].price.toLocaleString("en-US")}</p>
                    <p><b>Choose Size</b></p>
                    <div className={styles.productSize}>
                        <button>UK 6</button>
                        <button>UK 6.5</button>
                        <button>UK 7</button>
                        <button>UK 7.5</button>
                        <button>UK 8</button>
                        <button>UK 8.5</button>
                        <button>UK 9</button>
                        <button>UK 9.5</button>
                        <button>UK 10</button>
                        <button>UK 10.5</button>
                        <button>UK 11</button>
                        <button>UK 11.5</button>
                    </div>
                    <label htmlFor="qty"><b>Enter Quantity</b></label>
                    <div className={styles.qty}>
                        <div style={{cursor:'pointer'}} className={styles.qtyButton} onClick={()=>setQty(p=>p+1)}>+</div>
                        <input id='qty' type="text" value={qty} readOnly/>
                        {
                            qty>0 
                            ? <div style={{cursor:'pointer'}} className={styles.qtyButton} onClick={()=>setQty(p=>p-1)}>-</div>
                            : <div style={{cursor:'pointer'}} className={styles.qtyButton} disabled={true}>-</div>
                        }
                    </div>
                    <button className={styles.addToCart} onClick={handleAddToCart}>Add to Cart</button>
                    <p>{productData[0].description}</p>
                    <p><b>Color Shown: </b>{productData[0].colourShown}</p>
                    <p><b>Style: </b>{productData[0].style}</p>
                </div>
            </div>
            <BaseFooter />

        </>
    )
}

export default Product