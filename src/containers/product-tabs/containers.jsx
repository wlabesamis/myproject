import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import './product-tabs.scss';


class ProductTabs extends Component {
    render() {
        return (
            <div className="uniform-container-style">
                <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example" className="container-prodduct-tabs">
                    <Tab eventKey={1} title="All"></Tab>
                    <Tab eventKey={2} title="Performance"></Tab>
                    <Tab eventKey={3} title="Replacement"></Tab>
                    <Tab eventKey={4} title="Universal"></Tab>
                </Tabs>
            </div>
        )
    }
}

export default ProductTabs;
