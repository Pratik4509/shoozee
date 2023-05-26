import React from 'react'
import styles from './Cards.module.css';
import { Link } from 'react-router-dom';

const Cards = ({ data }) => {
    return (
        <>
            <div className={styles.cardWrapper}>
                {data.map((d) => (
                    <Link to={`/products/${d.id}` } key={d.id}><div className={styles.card} >
                        <img src={d.img} alt={d.name} />
                        <h4>{d.name}</h4>
                        <p style={{padding: '0 0 10px 0'}}>${d.price}</p>
                    </div></Link>
                ))}
            </div>
        </>
    )
}

export default Cards