import React, { Component } from 'react';
import {Button, Glyphicon } from 'react-bootstrap';

//CSS
import './header-nav.scss';

class HeaderNav extends Component {
    render () {
        return (
            <div className="component-header-nav">
                <Button>
                    <Glyphicon glyph="align-justify" />
                </Button>
            </div>
        )
    }
}

export default HeaderNav;