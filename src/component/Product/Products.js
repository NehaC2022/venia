import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
// import Pagination from './pagination';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('https://fakestoreapi.com/products');
      setData(res.data);
      setLoading(false);
    }
    fetchData()
  }, []);
  return (
    <div className='aem-Grid aem-Grid--12 product aem-Grid--phone--12'>
      {data.map(val => {
        return (
          <>
            <ProductCard key={val.id} id={val.id} img={val.image} title={val.title} price={val.price} loading={loading} />
          </>

        )

      })}
    </div>
  )
}

export default Products;