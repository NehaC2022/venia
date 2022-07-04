import React from 'react';
import { Link } from 'react-router-dom';


export default function ProductCard({ title, price, img, id, loading,data}) {
    if (loading) {
        <h1>Loading..........</h1>
    }
    return (
        <>
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 aem-GridColumn--tablet--6 product-content'>
            <Link to={`/products/${id}`}>
                <div className='product-image'>
                    <img src={img} alt="cardimage" />
                </div>
                <div className='product-info'>
                    <strong className='product-title'>{title.substring(0, 26)}</strong>
                    <p className='product-price'>${price}</p>
                    <img className='fav_icon' src={require("./Images/heart.svg").default} alt="Heartsvgimage" />
                </div>
            </Link>
        </div>
</>
    )
}