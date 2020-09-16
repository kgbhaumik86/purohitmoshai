import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import ScrollspyNav from "react-scrollspy-nav";
import Navbar from 'react-bootstrap/Navbar'

export default class Header extends Component {   
    render() {
        return (
            <header id="header">
                <div className="container">

                    <div id="logo" className="pull-left">
                        <a href="index.html" className="scrollto">
                            <img src= {process.env.PUBLIC_URL + "assets/img/PurohitMoshaiLogo.png"} alt="" title=""/>
                        </a>                        
                    </div>
                    {/* <nav id="nav-menu-container">
                        <ScrollspyNav
                            scrollTargetIds={["about", "services", "gallery","section_3"]}
                            offset={100}
                            activeNavClass="is-active"
                            scrollDuration="1000"
                            headerBackground="true"                    
                        >
                            <ul className="nav-menu">
                                <li className="menu-active"><a href="index.html">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#section_3">Section 3</a></li>
                            </ul>
                        </ScrollspyNav>
                    </nav> */}
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="index.html">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>                            
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
