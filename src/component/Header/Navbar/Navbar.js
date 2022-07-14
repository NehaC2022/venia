import React from 'react';
import {NavLink} from 'react-router-dom';
import { List } from '../../../data/item';
import { useSelector } from 'react-redux/es/exports';

const Navbar = () => {
  const cartCounter = useSelector((value)=>{
    return value.cart.item
  });
  const totalCartItem = cartCounter.length;
  return (
    <div className='bottom-line'>
      <nav className="aem-Grid aem-Grid--12 container nav">
        {
          List.map((curElm) => {
            return (
              <>
               <div className="aem-GridColumn aem-GridColumn--default--3 logo">
              <NavLink exact to="#" className="mobile-menu">
                <img src={require('./images/hamberger.svg').default} alt='hamberger-menu' aria-label='hamberger-icon'/>
              </NavLink>
               <NavLink exact to="/">
                  <img src={require('./images/desktop-logo.png')} alt='Logo' className='desktop-logo' aria-label='desktop-logo'/>
                  <img src={require('./images/mobile-logo.png')} alt='Logo' className='mobile-logo' aria-label='mobile-logo'/>
                  </NavLink>
                </div>
               
                <div className="aem-GridColumn aem-GridColumn--default--6 menu">
                  <ul>
                    <li><a href='.#' aria-label='menu-women'>{curElm.li1}</a></li>
                    <li><a href='.#' aria-label='menu-men'>{curElm.li2}</a></li>
                    <li><a href='.#' aria-label='menu-gear'>{curElm.li3}</a></li>
                    <li><a href='.#' aria-label='menu-acessesories'>{curElm.li4}</a></li>
                  </ul>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 icon">
                  <ul>
                    <li><a href='.#' aria-label='search-menu-icon'><img src={curElm.icon1} alt="Search" aria-label='sreach-icon'/><span>{curElm.text1}</span></a></li>
                    <li><a href='.#' aria-label='user-icon'><img src={curElm.icon2} alt="User" aria-label='user-icon'/><span>{curElm.text2}</span></a></li>
                    <NavLink exact to="/cart">
                      <ul>
                        <li><img src={curElm.icon3} alt="Shopping Bag" aria-label='shoppingBag-icon'/>{totalCartItem}</li>
                      </ul>
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