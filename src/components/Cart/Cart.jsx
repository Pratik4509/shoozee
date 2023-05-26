import React, { useState } from 'react';
import styles from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { FiMinusCircle } from "react-icons/fi";
import { removeFromCart } from '../../store/cartSlice';
import Checkout from '../Checkout/Checkout';

const Cart = ({ setShowCart }) => {
    const cartItemsAll = useSelector(state => state.cart.cartItems)
    const user = useSelector(state=>state.auth.authData)
    const userEmail = user[0] !== undefined ? user[0].email : ''
    const cartItems = cartItemsAll.filter(item => item.userEmail === userEmail)
    const dispatch = useDispatch();
    const costArr = []
    const items = cartItems.map(item => {
        let cost = (item.productData.price * item.qty)
        costArr.push(cost)
        return (
            <div className={styles.cartItems} key={item.productData.id}>
                <div className={styles.cartItemsLeft}>
                    <div>{item.productData.name}</div>
                    <div>₹{item.productData.price.toLocaleString("en-US")}</div>
                </div>
                <div className={styles.cartItemsRight}>
                    <div>Qty</div>
                    <div>{item.qty}</div>
                </div>
                <FiMinusCircle onClick={()=>dispatch(removeFromCart(item.productData.id))}/>
            </div>
        )
    })
    console.log(costArr)
    const subTotal = costArr.reduce((partialSum, a) => partialSum + a, 0).toLocaleString("en-US")
    return (
        <>
        {cartItems ?
    <div className={styles.cartWrapper}>
            <div className={styles.cartHeading}>
                <h3>Cart</h3>
                <span style={{ cursor: 'pointer' }} onClick={() => setShowCart(false)}>X</span>
            </div>
            <hr />
            {items}
            <hr />
            <p>Subtotal: ₹{subTotal}</p>
            <p>Tax: ₹0</p>
            <h3>Total: ₹{subTotal}</h3>
            {/* <Checkout/> */}
        </div> : <div>No Items</div>}

        </>
    )
}

export default Cart