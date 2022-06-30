import React from 'react';
import image from './images/hero-banner.png'

export default function HeaderBanner() {
  return (
    <section className='aem-Grid aem-Grid--12 aem-Grid--phone--12 container'>
        <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 header-banner-content'>
            <h1>Women’s</h1>
            <h1 className='heading2'> Outerwear</h1>
            <button className='bar'></button>
        </div>
        <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12'>
            <img src={image} alt='girl' className='hero-banner-image'/>
        </div>
    </section>
  )
}
