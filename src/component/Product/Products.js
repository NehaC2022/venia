import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Pagination from 'react-js-pagination';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [page, setPage] = useState(1);
  const [cardsPerPage] = useState(9);
  const lastcardIndex = page * cardsPerPage;
  const firstcardIndex = lastcardIndex - cardsPerPage;
  const currentData = data.slice(firstcardIndex, lastcardIndex);
  const totalcards = data.length;

  const paginate = pageNumber => setPage(pageNumber);
  console.log(data.length);
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
    <>
      <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 product '>
        {currentData.map(val => {
          return (
            <>
              <ProductCard key={val.id} id={val.id} img={val.image} title={val.title} price={val.price} loading={loading} data={data} />
            </>
          )


        })}
      </div>
      <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12'>
        <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={totalcards}
          pageRangeDisplayed={5}
          onChange={paginate}
        />
      </div>
    </>
  )
}

export default Products;