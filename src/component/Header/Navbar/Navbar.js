import React from 'react';
import {NavLink} from 'react-router-dom';
import { List } from '../../../data/item';
import { useSelector } from 'react-redux/es/exports';

const Navbar = () => {
  const cartCounter = useSelector((value)=>{
    return value.cart.item
  });
  const totalCartItem = cartCounter.length;
  console.log(totalCartItem);
  return (
    <div className='bottom-line'>
      <nav className="aem-Grid aem-Grid--12 container nav">
        {
          List.map((curElm) => {
            return (
              <>
               <div className="aem-GridColumn aem-GridColumn--default--3 logo">
              <NavLink exact to="#" className="mobile-menu">
                <img src={require('./images/hamberger.svg').default} alt='hamberger-menu'/>
              </NavLink>
               <NavLink exact to="/">
                  <img src={require('./images/desktop-logo.png')} alt='Logo' className='desktop-logo'/>
                  <img src={require('./images/mobile-logo.png')} alt='Logo' className='mobile-logo'/>
                  </NavLink>
                </div>
               
                <div className="aem-GridColumn aem-GridColumn--default--6 menu">
                  <ul>
                    <li><a href='.#'>{curElm.li1}</a></li>
                    <li><a href='.#'>{curElm.li2}</a></li>
                    <li><a href='.#'>{curElm.li3}</a></li>
                    <li><a href='.#'>{curElm.li4}</a></li>
                  </ul>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 icon">
                  <ul>
                    <li><a href='.#'><img src={curElm.icon1} alt="Search" /><span>{curElm.text1}</span></a></li>
                    <li><a href='.#'><img src={curElm.icon2} alt="User" /><span>{curElm.text2}</span></a></li>
                    <NavLink exact to="/cart">
                      <li><a href='.#'><img src={curElm.icon3} alt="Shopping Bag" />{totalCartItem}</a></li>
                    </NavLink>
                  </ul>
                </div>
              </>
            )
          })
        }
      </nav>
    </div>
  )
}

export default Navbar