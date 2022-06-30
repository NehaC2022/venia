import React from "react";
import { FooterList } from '../../../data/item';

function FooterItemList() {
    return (
        <div className="aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12 container upperFooter">
            {
                FooterList.map((curElm) => {
                    return (
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 aem-GridColumn--tablet--6">
                            <h6>{curElm.heading}</h6>
                            <ul>
                                <li><a href=".#">{curElm.submenu1}</a></li>
                                <li><a href=".#">{curElm.submenu2}</a></li>
                                <li><a href=".#">{curElm.submenu3}</a></li>
                                <li>
                                    <a href=".#">
                                        <img src={curElm.icon1} alt="" />
                                        <img src={curElm.icon2} alt=""/>
                                        <img src={curElm.icon3} alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default FooterItemList;