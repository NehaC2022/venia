import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
// import { useSelector } from 'react-redux';

export default function Product() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  // const getdata = useSelector((state)=> state.cartreducer);
  // console.log(getdata);
  const fetchData = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
    console.log(data)
    console.log(id);
  }
  
  useEffect(() => {
    fetchData()
  }, [id])
  return (
    <section className='container'>
      <ProductItem key={data.id} product={data} id={data.id} img={data.image} title={data.title} price={data.price} description={data.description} />
    </section>
  )
}
