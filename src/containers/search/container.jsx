import React, { Component } from 'react';

//Components
import Header from "../../components/header";

//Containers
import ProductListing from "../product-listing/container";
import Refinements from "../refinements/container";
import ProductTabs from "../product-tabs/containers";

//CSS
import './search.scss';

class Search extends Component {
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
    }

    render(){
        return (
            <div>
                <Header />
                <div className="container-search">
                    <Refinements />
                    <ProductTabs />
                    <ProductListing />
                </div>
            </div>
        )
    }
}

export default Search;