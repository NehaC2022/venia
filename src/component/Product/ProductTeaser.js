import Products from './Products';
import ProductFilter from './ProductFilter';

export default function ProductTeaser(filtercomponent) {
  const onFilterSelect = (e) => {

    console.log('onFilterSelect', filtercomponent);

    filtercomponent(e.target.value);

  }
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
            <select id="dropbox" onChange={onFilterSelect}>
              <option value="Sort by list">Sort by latest</option>
              <option value="category">Sort by Price</option>
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
