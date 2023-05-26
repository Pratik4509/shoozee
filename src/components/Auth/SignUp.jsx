import React from 'react'
import logo from '../../assets/png/logo-no-background.png';
import styles from './Auth.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginUser, registerUser } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

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

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && email && password) {
            console.log('2if')
            dispatch(registerUser({ name, email, password }))
            dispatch(loginUser({ name, email, password }))
            setEmail('')
            setName('')
            setPassword('')
            navigate('/');
        }
        if (name === '') {
            notify('Please enter name')
        }
        else if (email === '') {
            notify('Please enter email')
        }
        else if (password === '') {
            notify('Please enter password')
        }
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} className={styles.formContainer}>
                <img src={logo} alt='logo' />
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                <button>Create Account</button>
                <p>Already an User?<Link to='/login'>Login</Link></p>
            </form>
            <ToastContainer />
        </div>
    )
}

export default SignUp