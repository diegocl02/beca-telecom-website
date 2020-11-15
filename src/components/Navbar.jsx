import React from 'react'
import logo from '../assets/img/logo.png'

export default ({ items }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <img src={logo} alt="logo" style={{ width: "110px" }}></img>
                <button className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    Menu
        <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        {
                            items.map(item => {
                                return <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" style={{ cursor: "pointer" }} href={item.href}>{item.label}</a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}