import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Products = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] =useState(false);
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        // setLoading(true);
        return response.json()
      })
      .then(data => {
        setData(data)
      })
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='aem-Grid aem-Grid--12 product aem-Grid--phone--12'>
      {data.map(val => {
        return (<ProductCard key={val.id} id={val.id} img={val.image} title={val.title} price={val.price} />)
      })}
    </div>
  )
}

export default Products;