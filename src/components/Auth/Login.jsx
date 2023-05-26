import React from 'react'
import logo from '../../assets/png/logo-no-background.png';
import styles from './Auth.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getDataFromFirebase, loginUser } from '../../store/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Login = () => {

    const notify = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const users = useSelector(state=>state.auth.users)
    const currentUser = users.filter(user => user.email === email && user.password === password)
    const handleLogin = (e) => {
        e.preventDefault();
        if(email !== '' && password !== '') {
            if(currentUser !== undefined && currentUser.length> 0){
                console.log('in login')
                dispatch(loginUser({ name: currentUser[0].name,email, password }))
                setEmail('')
                setPassword('')
                navigate('/');
            } else {
                notify('Incorrect Email or Password')
            }
        }
        if (email === '') {
            notify('Please enter email')
        }
        else if (password === '') {
            notify('Please enter password')
        }

    }
    // useEffect(() => {
    //     console.log(dispatch(getDataFromFirebase()))
    // },[])
    return (
        <div>
            <form action="" onSubmit={e=>handleLogin(e)} className={styles.formContainer}>
                <img src={logo} alt='logo'/>
                <input type="email" placeholder='Enter Email' onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Enter Password' onChange={e=>setPassword(e.target.value)}/>
                <button >Login</button>
                <p>Don't have an account yet?<Link to='/signUp'>Sign Up</Link></p>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login