import React, { useState } from 'react';
import styles from './Header.module.css'
import logo from '../../assets/png/logo-no-background.png'
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../Cart/Cart';
import { logOut } from '../../store/authSlice';

const Header = () => {
    const cartState = useSelector(state => state.cart.cartItems)
    const user = useSelector(state=>state.auth.authData)
    const userEmail = user[0] !== undefined ? user[0].email : ''
    const state = cartState.filter(item => item.userEmail === userEmail)
    const userData = useSelector(state => state.auth.authData)
    let count = 0
    try {
        count = state.length
    } catch (e) {
        count = 0
    }

const dispatch = useDispatch()
    const cartItemCount = count ? count : 0;
    const [showCart, setShowCart] = useState(false);
    return (
        <>
            <header>
                <div className={styles.logo}>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                    {/* Logo */}
                </div>
                <ul>
                    <li> <Link to={'/all-products'}>Products</Link></li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
                <div className={styles.user}>
                    <div className={styles.auth}>
                        {userData.length > 0 ?
                            <span className={styles.userIcon}>
                                <FiUser />
                                <span>{userData[0].name}</span>
                                <button onClick={()=>dispatch(logOut())}>Logout</button>
                            </span> :
                            <button className={styles.loginButton}><Link to={'/login'}>Login/SignUp</Link></button>}
                    </div>
                    <span style={{ cursor: 'pointer' }} className={styles.cart} onClick={() => setShowCart(true)}>
                        <FiShoppingCart />
                        <span style={{ fontSize: '16px', margin: '0 5px' }}>{cartItemCount}</span>
                    </span>
                </div>
                {showCart && <Cart setShowCart={setShowCart} />}
            </header>
        </>
    )
}

export default Header