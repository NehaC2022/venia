import React from 'react';
import { List } from '../../../data/item';

const Navbar = () => {
    return (
        <nav className="aem-Grid aem-Grid--12 container nav" id='header'>
            {
                List.map((curElm) => {
                    return (
                        <>
                            <div className="aem-GridColumn aem-GridColumn--default--4 logo">
                                <span class="logo-one-text">V</span><span>ENIA</span>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 " id='nav'>
                                <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true"           aria-controls="menu"aria-expanded="false" class="order-0">
                                    <span id="hamburger"></span>
                                </button>
                                <ul id="menu" role="menu">
                                    <li><a href='.#'>{curElm.li1}</a></li>
                                    <li><a href='.#'>{curElm.li2}</a></li>
                                    <li><a href='.#'>{curElm.li3}</a></li>
                                    <li><a href='.#'>{curElm.li4}</a></li>
                                </ul>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4">
                                <ul>
                                    <li><a href='.#'><img src={curElm.icon1} alt="Search" />{curElm.text1}</a></li>
                                    <li><a href='.#'><img src={curElm.icon2} alt="User" />{curElm.text2}</a></li>
                                    <li><a href='.#'><img src={curElm.icon3} alt="Shopping Bag" /></a></li>

                                </ul>
                            </div>
                        </>
                    )
                })
            }

        </nav>
    )
}

export default Navbar;