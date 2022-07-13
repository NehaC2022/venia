import React from 'react'
import Products from './Products';
import ProductFilter from './ProductFilter';

export default function ProductTeaser() {

  return (
    <section className='product-teaser'>
      <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 container'>
        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--phone--hide'>
          <ProductFilter />
        </div>

        <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12'>
          <div className='aem-GridColumn aem-GridColumn--phone--6'>
            <Products />

          </div>
        </div>
      </div>
    </section>
  )
}


