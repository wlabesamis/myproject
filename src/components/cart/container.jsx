import React,{ Component } from "react";
import {Image} from "react-bootstrap";

class Cart extends Component {
    render (){
        return (
            <div style={{width: '20px', margin: '10px 0 0 10px'}}>
                <Image src="https://cdn.mobify.com/sites/usap-jcw/production/static/svg/sprite-source/cart-v2.svg" responsive />
            </div>
        )
    }
}

export default Cart;