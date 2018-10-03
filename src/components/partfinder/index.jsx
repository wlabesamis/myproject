import React,{ Component } from "react";
import {Image} from "react-bootstrap";

class Partfinder extends Component {
    render (){
        return (
            <div style={{width: '20px', margin: '10px 0 0 10px'}}>
                <Image src="https://cdn.mobify.com/sites/usap-jcw/production/static/svg/sprite-source/car-dark.svg" responsive />
            </div>
        )
    }
}

export default Partfinder;