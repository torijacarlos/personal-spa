import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
                <OutboundLink href="https://github.com/torijacarlos/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></OutboundLink>
                <OutboundLink href="https://twitter.com/torijacarlos/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></OutboundLink>
                <OutboundLink href="https://linkedin.com/in/torijacarlos/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></OutboundLink>
                <OutboundLink href="https://instagram.com/torijacarlos.stuff/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></OutboundLink>
            </div>
        </div>
    </div>
)

export default Header