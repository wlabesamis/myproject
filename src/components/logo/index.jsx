import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

class Logo extends Component {
    render () {
        return (
            <div style={{width:'180px', margin: '0 5px 0 10px' }}>
                <Image src="https://cdn.mobify.com/sites/usap-jcw/production/static/svg/logo.svg" responsive />
            </div>
        )
    }
}

export default Logo;