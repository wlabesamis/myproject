import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './search-icon.scss';

class SearchIcon extends Component {
    render () {
        return (
            <div className="component-search-icon">
                <Image src="https://cdn.mobify.com/sites/usap-jcw/production/static/svg/sprite-source/search.svg" responsive />
            </div>
        )
    }
}

export default SearchIcon;