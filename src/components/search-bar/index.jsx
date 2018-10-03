import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class SearchBar extends Component {
    render () {
        return (
            <div style={{width:'20px', margin: '10px 0 0 10px' }}>
                <Image src="https://cdn.mobify.com/sites/usap-jcw/production/static/svg/sprite-source/search.svg" responsive />
            </div>
        )
    }
}

export default SearchBar;