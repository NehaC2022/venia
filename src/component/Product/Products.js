import React, {useState } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';


const Products = ({data, loading}) => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [cardsPerPage] = useState(9);
  const lastcardIndex = page * cardsPerPage;
  const firstcardIndex = lastcardIndex - cardsPerPage;
  const currentData = data.slice(firstcardIndex, lastcardIndex);
  const totalcards = data.length;

  const paginate = pageNumber => setPage(pageNumber);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const res = await axios.get('https://fakestoreapi.com/products');
  //     setData(res.data);
  //     setLoading(false);
  //   }
  //   fetchData()
  // }, []);
  return (
    <>
      <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 product '>
        {loading ? <h1 className='loader-heading'>Loading.........</h1>:<>
        {currentData.map(val => {

          return (
            // <>
            //   <ProductCard key={val.id} id={val.id} img={val.image} title={val.title} price={val.price} loading={loading} data={data}/>
            // </>
            <>
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 aem-GridColumn--tablet--6 product-content'>
            <Link to={`/products/${val.id}`}>
                <div className='product-image'>
                    <img src={val.image} alt="cardimage" />
                </div>
                <div className='product-info'>
                    <strong className='product-title'>{val.title.substring(0, 26)}</strong>
                    <p className='product-price'>${val.price}</p>
                    <img className='fav_icon' src={require("./Images/heart.svg").default} alt="Heartsvgimage" />
                </div>
            </Link>
        </div>
</>
          )


        })}
        </>}
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