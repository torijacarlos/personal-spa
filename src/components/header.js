import React from "react"
import { Link } from "gatsby"

const Header = () => (
    <div className="header">
        <h1 className="header__title">
            torija<span className="font__white">carlos</span>
        </h1>
        <div className="header__nav">
            <div>
                <Link to="/">home</Link>
                <Link to="/resume">resume</Link>
            </div>
            <div className="header__social">
                <a href="https://github.com/torijacarlos/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/torijacarlos/" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                <a href="https://linkedin.com/in/torijacarlos/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://instagram.com/torijacarlos.stuff/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
)

export default Header