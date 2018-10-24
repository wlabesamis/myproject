import React,{ Component } from "react";
import {Image} from "react-bootstrap";
import './cart-icon.scss';

class CartIcon extends Component {
    render (){
        return (
            <div className="component-cart-icon">
                <Image src="https://cdn.mobify.com/sites/usap-jcw/production/static/svg/sprite-source/cart-v2.svg" responsive />
            </div>
        )
    }
}

export default CartIcon;