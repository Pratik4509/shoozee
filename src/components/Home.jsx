import React from 'react'
import BaseFooter from './BaseFooter/BaseFooter';
import Header from './Header/Header';
import Collection from './Collection/Collection';
import Hero from './Hero/Hero';


const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Collection />
            <BaseFooter />
        </>
    )
}

export default Home