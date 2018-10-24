import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar } from 'react-bootstrap'
import RefinementsModal from './modal';

class Refinements extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    render() {
        let show = () => this.setState({ show: false });

        return (
            <div className="modal-container uniform-container-style">
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