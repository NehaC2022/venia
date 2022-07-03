// import React, {  useEffect,useState } from 'react'
import Products from './Products';
import ProductFilter from './ProductFilter';

export default function ProductTeaser() {
  // const [data, setData] = useState([]);
  // const fetchData = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then(response => {
  //       // setLoading(true);
  //       return response.json()
  //     })
  //     .then(data => {
  //       setData(data)
  //     })
  //   console.log(data)
  // }
  // const sortFilter = (e) => {
  //       console.log(e.target.value);
  //         fetch("https://fakestoreapi.com/products?sort=desc")
  //           .then(response => {
  //             // setLoading(true);
  //             return response.json()
  //           })
  //           .then(data => {
  //             setData(data)
  //           })
  //         console.log(data);
  // }
  // useEffect(() => {
  //   sortFilter()
  // }, [])
  return (
    <section className='product-teaser'>
      <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 container '>
        <aside className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--3'>
          <ProductFilter />
        </aside>
        <section className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--9'>
          <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 product-bar'>
            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
              <h6>20 Results</h6>
            </div>
            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
              <select id="cars" name="carlist" form="carform">
                <option value="price">Price Low to High</option>
              </select>
            </div>
          </div>
          <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12'>
            <Products />
          </div>
        </section>
      </div>
    </section>
  )
}
