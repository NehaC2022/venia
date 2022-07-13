import React from 'react'
import { Link } from 'react-router-dom'
import Pagination from 'react-js-pagination';
import { useState } from "react";





export default function ProductCard({ data }) {
 

  const [page, setPage] = useState(1);

  const [cardsPerPage] = useState(9);

  const lastcardIndex = page * cardsPerPage;
  const firstcardIndex = lastcardIndex - cardsPerPage;
  const currentData = data.slice(firstcardIndex, lastcardIndex);

  const paginate = pageNumber => setPage(pageNumber);
  console.log(data.length);
  
  

  
  return (
    <>
      {currentData.map((prod) => {
        let id = prod.id;
        return (
            <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 aem-GridColumn--tablet--6 product-content'>
                 <Link to={`/products/${id}`}>
                 <div className='product-image'>
                             <img src={prod.image} alt="cardimage" />
                             </div>
                             <div className='product-info'>
                                 <strong className='product-title'>{prod.title.substring(0, 26)}</strong>
                                 <p className='product-price'>${prod.price}</p>
                                 <img className='fav_icon' src={require("./Images/heart.svg").default} alt="Heartsvgimage" />
                             </div>
                        </Link>
                     </div>)
      })}
     
      <div className='aem-Grid aem-Grid--12 pagination'>
        <Pagination
          activePage={page}
          itemsCountPerPage={9}
          totalItemsCount={data.length}
          pageRangeDisplayed={5}
          onChange={paginate}
        />
      </div>
    </>
  )
}


