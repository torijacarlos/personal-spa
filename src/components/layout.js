import React from "react"
import Header from "./header"
import "../styles/reset.css"
import "../styles/global.scss"


const Layout = ({ children }) => ( 
    <div id="main-container">
        <Header />
        <div>
            {children}
        </div>
    </div>
);

export default Layout;