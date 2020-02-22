import React from "react"
import { Link } from "gatsby"

const Header = () => (
    <div className="header">
        <h1 className="header__title">
            torija<span className="font__white">carlos</span>
        </h1>
        <div className="header__nav">
            <Link to="/">home</Link>
            <Link to="/resume">resume</Link>
        </div>
    </div>
)

export default Header