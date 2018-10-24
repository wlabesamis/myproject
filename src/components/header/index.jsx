import React, { Component } from 'react';
import { Button, Glyphicon, Image } from 'react-bootstrap';

//Components
import SearchIcon from '../search-icon/'
import VehicleIcon from '../vehicle-icon/'
import CartIcon from "../cart-icon/container";
import HeaderNav from "../header-nav/";
import Logo from "../logo";

//Containers
import Partfinder from "../../containers/partfinder/contianer";

//CSS
import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openPartfinder: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            openPartfinder: !this.state.openPartfinder
        });
    }

    render(){
        return (
            <header>
                <div className="uniform-container-style" >
                    <div className="component-header">
                        <HeaderNav />
                        <SearchIcon />
                        <Logo />
                        <VehicleIcon  handleClick={this.handleClick} />
                        <CartIcon />
                    </div>
                </div>
                <Partfinder visibilityState={ this.state.openPartfinder } />
            </header>
        )
    }
}

export default Header;