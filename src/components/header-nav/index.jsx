import React, { Component } from 'react';
import {Button, Glyphicon } from 'react-bootstrap';

class HeaderNav extends Component {
    render () {
        return (
            <Button>
                <Glyphicon glyph="align-justify" />
            </Button>
        )
    }
}

export default HeaderNav;