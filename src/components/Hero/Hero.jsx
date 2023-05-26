import React from 'react';
import heroImage from '../../assets/shoes/hero1.png';
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <>
            <div className={styles.heroWrapper}>
                <div className={styles.heroText}>
                    <h2>Find your dream snekers</h2>
                    <p>Find your shoes from our various collection, here are endless shoes hence endless options.</p>
                    <button className={styles.button}>Explore</button>
                </div>
                <div className={styles.heroImg}>
                    <img src={heroImage} alt="hero" />
                </div>
            </div>
        </>
    )
}

export default Hero