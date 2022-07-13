import React, {useState, useEffect} from "react";
import Products from './Products';
import ProductFilter from './ProductFilter';
import axios from "axios";

export default function ProductTeaser() {
  const [loading, setLoading] = useState(false);
  const [data, setData]= useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('https://fakestoreapi.com/products');
      setData(res.data);
      setLoading(false);
    }
    fetchData()
  }, []);

      const onfilterChange = () => {
      const result = data?.sort((a, b) => a.price - b.price);
  
        // console.log(data);
  
        setData(result);
        console.log(result);
    }
  // const onFilterSelect = (e) => {

  //   console.log('onFilterSelect', onfilterChange);

  //   onfilterChange(e.target.value);
  //   console.log(e.target.value);

  // }
  return (
    <>
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
                <select id="dropbox" onChange={onfilterChange}>
  
                  <option value="Sort by list">Sort by latest</option>
  
                  <option value="category">Sort by Price</option>
  
                </select>
              </div>
            </div>
            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12'>
              <Products loading={loading} data={data}/>
            </div>
          </section>
        </div>
      </section>


    </>

    
  )
}
