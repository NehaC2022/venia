import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAction } from '../../redux/cartSlice';

export default function ProductItem({ title, price, img, id, description, rating, count, product }) {
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(handleAction.addItem({ ...product }))
        console.log(product);
    }
    return (
        <div>
            <div className='aem-Grid aem-Grid--12 product-container'>
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 aem-GridColumn--tablet--6'>
                    <div className='aem-Grid aem-Grid--12 product-item' >
                        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide aem-GridColumn--tablet--hide mini-image'>
                            <figure>
                                <img src={img} alt='ProductImage' />
                                <img src={img} alt='ProductImage' />
                                <img src={img} alt='ProductImage' />
                                <img src={img} alt='ProductImage' />
                                <img src={img} alt='ProductImage' />
                            </figure>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 large-image'>
                           <figure>
                                <img src={img} alt='ProductImage' />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 product-details'>
                    <h6>Clothing / Women’s / Outerwear</h6>
                    <h1>{title}</h1>
                    <h4>${price}</h4>
                    {/* <div>
                        <img src={require("./Images/star.svg").default} alt="StarImage" />
                        <img src={require("./Images/star.svg").default} alt="StarImage" />
                        <img src={require("./Images/star.svg").default} alt="StarImage" />
                        <img src={require("./Images/star.svg").default} alt="StarImage" />
                        <img src={require("./Images/star.svg").default} alt="StarImage" />
                    </div> */}
                    <p className='description'>{description}</p>
                    <div className='product-btn'>
                        <h5>Color</h5>
                        <span><img src={require('./Images/Swatch01@2x.png')} alt='' className='btn-blue' /></span>
                        <span><img src={require('./Images/Swatch02@2x.png')} alt='' className='btn-pink' /></span>
                        <span><img src={require('./Images/Swatch03@2x.png')} alt='' className='btn-black' /></span>
                        <span><img src={require('./Images/Swatch04@2x.png')} alt='' className='btn-grey' /></span>
                        <h5>Size</h5>
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <h5>Quantity</h5>
                        <div className='cart-btn'>
                            <button>+</button>
                            <input type="text" id="" name="" />
                            <button>-</button>
                        </div>
                    </div>
                    <button className='cart' onClick={() => addProduct(product)}>ADD TO CART</button>
                    <div className='social-icon'>
                        <img src={require("./Images/heart.svg").default} alt="HeartImage" />
                        <p>Save</p>
                        <img src={require("./Images/share.svg").default} alt="ShareImage" />
                        <p>Share</p>
                    </div>
                </div>
            </div>
            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 product-description'>
                <h1>{title}</h1>
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 aem-GridColumn--tablet--12'>
                    <div className='aem-Grid aem-Grid--12'>
                        <h3>Description</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 aem-GridColumn--tablet--12'>
                    <h3>Details</h3>
                    <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12 '>
                        <div className='aem-GridColumn aem-GridColumn--default--6 product-detail-icon'>
                            <div>
                                <img src={require("./Images/slack.svg").default} alt="SlackImage" />
                                <p>Sweat-wicking</p>
                            </div>
                            <div>
                                <img src={require("./Images/feather.svg").default} alt="FeatherImage" />
                                <p>Lightweight fabric</p>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6'>
                            <div>
                                <img src={require("./Images/heart.svg").default} alt="HeartImage" />
                                <p>Breathable</p>
                            </div>
                            <div>
                                <img src={require("./Images/layers.svg").default} alt="LayersImage" />
                                <p>69% nylon, 31% lycra</p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
