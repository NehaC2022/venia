import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { handleAction } from '../../redux/cartSlice';

export default function ShoppingCart() {
    const cartData = useSelector((value) =>
        value.cart.item
    );
    const dispatch = useDispatch();
    const handleRemoveFromCart = (...product) => {
        dispatch(handleAction.removeFromCart(product));
        console.log(product);
      };
      const handleDecreaseCart = (product) => {
        dispatch(handleAction.decreaseCart(product));
      };
    return (
        <section className='container'>
            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 shopping-cart container'>
                <div>
                    <h1>Your Shopping Bag</h1>
                    <button className='underbar'></button>
                </div>
                <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12'>
                    <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 cart-info'>
                        {cartData.map((value) => {
                            const prodQuantity = value.quantity;
                            const handleIncrementprod = (value)=>{
                                dispatch(handleAction.incrementQnt(value))
                            }
                            return (
                                <>

                                    <div className='aem-Grid aem-Grid--12'>
                                        <div className='aem-GridColumn aem-GridColumn--default--6'>
                                            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 cart-product'>
                                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                                    <img src={value.image} alt='' />
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
                                                <button onclick={handleIncrementprod}>+</button>
                                                <input type="text" value={prodQuantity} className='cart-input' />
                                                <button onclick={handleDecreaseCart}>-</button>
                                            </div>
                                        </div>
                                        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide'>
                                            <ul>
                                                <li><a href='/'><img src={require('./Images/edit-2.svg').default} alt='' />Edit item</a></li>
                                                <li><a href='/' onClick={handleRemoveFromCart}><img src={require('./Images/trash-2.svg').default} alt=''/>Remove</a></li>
                                                <li><a href='/'><img src={require('./Images/heart.svg').default} alt='' />Save for later</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </>


                            )
                        })}
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 pricing-summary'>
                        <h5>Pricing Summary</h5>
                        <div className='aem-Grid aem-Grid--12'>
                            <p>Subtotal<span>$ 388.00</span></p>
                            <p>Coupon<span>- $ 77.60</span></p>
                            <p>Gift Card<span>- $ 100.00</span></p>
                            <p>Estimated tax<span>$ 23.28</span></p>
                            <p>Estimated shipping<span>FREE</span></p>
                            <h6>Estimated Total<span>$ 233.68</span></h6>
                            <button><img src={require('./Images/lock.svg').default} alt='' />CHECKOUT</button>
                            <div className='pp-button'><img src={require('./Images/PP_BTN@2x.png')} alt='pp-button' /></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='aem-Grid aem-Grid--12 primary-info'>
                <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--hide'>
                    <button className="accordion">Estimate your Shipping <span>shipping to 91001 <img src={require('./Images/chevron-down.svg').default} alt='Chevron' /> </span></button>
                    <div className="panel">
                        <p>Lorem ipsum...</p>
                    </div>

                    <button className="accordion">Enter a Coupon Code<span>20%discount applied <img src={require('./Images/chevron-down.svg').default} alt='Chevron' /></span></button>
                    <div className="panel">
                        <p>Lorem ipsum...</p>
                    </div>

                    <button className="accordion">Apply Gift Card </button>
                    <div className="panel">
                        <p>Lorem ipsum...</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
