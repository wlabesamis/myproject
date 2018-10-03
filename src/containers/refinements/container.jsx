import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar } from 'react-bootstrap'
import RefinementsModal from './modal';

class Refinements extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false
        };
    }

    render() {
        const wellStyles = {margin: '10px'};
        let show = () => this.setState({ show: false });

        return (
            <div className="modal-container" style={wellStyles}>
                <ButtonToolbar>
                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={() => this.setState({ show: true })}
                        block
                    >
                        REFINE RESULTS
                    </Button>

                    <RefinementsModal show={this.state.show} onHide={show}  />
                </ButtonToolbar>
            </div>
        );
    }

}

export default Refinements;