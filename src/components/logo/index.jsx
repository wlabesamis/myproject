import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

//CSS
import './logo.scss';

class Logo extends Component {
    render () {
        return (
            <div className="component-logo">
                <Image src="https://cdn.mobify.com/sites/usap-jcw/production/static/svg/logo.svg" responsive />
            </div>
        )
    }
}

export default Logo;