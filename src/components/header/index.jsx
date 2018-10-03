import React, { Component } from 'react';
import { Button, Glyphicon, Image } from 'react-bootstrap';
import SearchBar from '../search-bar/'
import Partfinder from '../partfinder/'
import Cart from "../cart/container";
import HeaderNav from "../header-nav/";
import Logo from "../logo";

class Header extends Component {
    render(){
        const wellStyles = {margin: '10px', display: 'flex', lineHeight: '20px' };

        return (
            <header>
                <div style={wellStyles}>
                    <HeaderNav />
                    <SearchBar />
                    <Logo />
                    <Partfinder />
                    <Cart/>
                </div>
            </header>
        )
    }
}

export default Header;