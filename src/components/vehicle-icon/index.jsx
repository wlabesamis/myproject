import React,{ Component } from "react";
import {Image} from "react-bootstrap";

//CSS
import './vehicle-icon.scss';

class VehicleIcon extends Component {
    constructor(props) {
        super(props);

    }

    render (){
        return (
            <div className="component-vehicle-icon" onClick={this.props.handleClick}>
                <Image src="https://cdn.mobify.com/sites/usap-jcw/production/static/svg/sprite-source/car-dark.svg" responsive />
            </div>
        )
    }
}

export default VehicleIcon;