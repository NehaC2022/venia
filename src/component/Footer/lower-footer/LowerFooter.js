import React from "react";
import Logo from '../images/mobile-logo.png'

function LowerFooter() {
    return (
        <footer className="aem-Grid aem-Grid--12 aem-Grid--phone--12 aem-Grid--tablet--12 container lower-footer">
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 lower-footer-logo logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                <p>© Company Name Address Ave, City Name, State ZIP</p>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 footer-menu">
                <ul>
                    <li><a href=".#">Terms of Use</a></li>
                    <li><a href=".#">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default LowerFooter;