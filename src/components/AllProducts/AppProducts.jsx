import React from 'react';
import BaseFooter from '../BaseFooter/BaseFooter';
import Header from '../Header/Header';
import { data } from '../../data/data';
import Cards from '../Cards/Cards';
const AppProducts = () => {
  return (
    <>
    <Header />
    <div>All Products</div>
    <Cards data={data} />
    <Cards data={data} />
    <BaseFooter />
    </>
  )
}

export default AppProducts