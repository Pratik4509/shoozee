import React from 'react'
import Cards from '../Cards/Cards'
import { data } from '../../data/data'

const Collection = () => {
  return (
    <div>
        <h2 style={{fontSize: '36px'}}>Our Collection</h2>       
        <Cards data={data}/>
    </div>
  )
}

export default Collection