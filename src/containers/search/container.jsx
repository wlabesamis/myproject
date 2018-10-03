import React, { Component } from 'react';
import Header from "../../components/header";
import ProductListing from "../product-listing/container";
import Refinements from "../refinements/container";


class Search extends Component {
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
    }

    render(){
        return (
            <div>
                <Header />
                <Refinements />
                <ProductListing />
            </div>
        )
    }
}

export default Search;