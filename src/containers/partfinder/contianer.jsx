import React, { Component } from 'react';
import {Collapse, Button } from 'react-bootstrap'
import './partfinder.scss';


class Partfinder extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <div className="uniform-container-style">
                <Collapse in={this.props.visibilityState}>
                    <div>
                        <p><strong>You have no saved vehicles.</strong></p>
                        <p><i>Add a vehicle to quickly find what you want.</i></p>
                        <div className="container-partfinder">
                            <Button
                                bsStyle="warning"
                                bsSize="large"
                                block
                            >ADD VEHICLE</Button>
                        </div>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default Partfinder;