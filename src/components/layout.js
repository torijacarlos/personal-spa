import React from "react"
import PropTypes from 'prop-types';
import Header from "./header"
import "../styles/reset.css"
import "../styles/global.scss"
import "@fortawesome/fontawesome-free/css/all.css"


const Layout = ({ page, children}) => ( 
    <div id="container">
        <Header />
        <div className={'content page_' + page}>
            {children}
        </div>
    </div>
 );

Layout.propTypes = {
    page: PropTypes.string,
}

export default Layout;