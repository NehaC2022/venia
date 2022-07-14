import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { handleAction } from '../../redux/cartSlice';

export default function ShoppingCart() {
    const cartData = useSelector((value) =>
        value.cart.item
    );
    const productCart = useSelector((state) => state.cart.cartTotalAmount);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(handleAction.getTotals());
      }, [productCart, dispatch]);
    return (
        <section className='container'>
            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 shopping-cart container'>
                <div>
                    <h1>Your Shopping Bag</h1>
                    <button className='underbar' aria-label="underbarButton"></button>
                </div>
                <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12'>
                    <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 cart-info'>
                        {cartData.map((value) => {
                            return (
                                <>

                                    <div className='aem-Grid aem-Grid--12'>
                                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                                            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 cart-product'>
                                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                                    <img src={value.image} alt='Product' aria-label="productImage"/>
                                                </div>
                                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                                    <h6>{value.title}</h6>
                                                    <p>Size : Medium</p>
                                                    <p>Color : Storm</p>
                                                    <p>${value.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12  '>
                                            <div className='cart-btn'>
                                                <button aria-label="decrement-Button" onClick={()=>{return dispatch(handleAction.decrementQnt(value))}}>-</button>
                                                <input type="text" value={value.quantity} className='cart-input' />
                                                <button aria-label="Increment-Button" onClick={()=>{return dispatch(handleAction.incrementQnt(value))}}>+</button>
                                                
                                            </div>
                                        </div>
                                        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide cart-icon'>
                                            <ul>
                                                <li>
                                                    <button aria-label="edit"><img src={require('./Images/edit-2.svg').default} alt='Edit' aria-label="EditIcon"/>Edit item</button>
                                                </li>
                                                <li>
                                                    <button aria-label="remove" onClick={()=>{return dispatch(handleAction.removeFromCart(value.id))}}><img src={require('./Images/trash-2.svg').default} alt='Trash' aria-label="TrashIcon"/>Remove</button>
                                                </li>
                                                <li>
                                                    <button aria-label="Save"><img src={require('./Images/heart.svg').default} alt='Save' aria-label="SaveIcon"/>Save for later</button>
                                                </li>
                                            </ul>
                                            
                                            
                                        </div>
                                    </div>
                                </>


                            )
                        })}
                        <div className='aem-Grid aem-Grid--12 primary-info'>
                <div className='aem-GridColumn aem-GridColumn--default--11 aem-GridColumn--phone--12'>
                    <button className="accordion" aria-label="accordian-button">Estimate your Shipping <span>shipping to 91001 <img src={require('./Images/chevron-down.svg').default} alt='Chevron' aria-label="Chevron-icon"/> </span></button>
                    <div className="panel">
                        <p>Lorem ipsum...</p>
                    </div>

                    <button className="accordion" aria-label="accordian-button">Enter a Coupon Code<span>20%discount applied <img src={require('./Images/chevron-down.svg').default} alt='Chevron' aria-label="Chevron-icon"/></span></button>
                    <div className="panel">
                        <p>Lorem ipsum...</p>
                    </div>

                    <button className="accordion" aria-label="accordian-button">Apply Gift Card </button>
                    <div className="panel">
                        <p>Lorem ipsum...</p>
                    </div>

                </div>
            </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 pricing-summary'>
                        <h5>Pricing Summary</h5>
                        <div className='aem-Grid aem-Grid--12'>
                            <p>Subtotal<span>${productCart}</span></p>
                            <p>Coupon<span>- $ 77.60</span></p>
                            <p>Gift Card<span>- $ 100.00</span></p>
                            <p>Estimated tax<span>$ 23.28</span></p>
                            <p>Estimated shipping<span>FREE</span></p>
                            <h6>Estimated Total<span>$ {productCart}</span></h6>
                            <button><img src={require('./Images/lock.svg').default} alt='Lock' aria-label="LockIcon" />CHECKOUT</button>
                            <div className='pp-button'><img src={require('./Images/PP_BTN@2x.png')} alt='pp-button' /></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
