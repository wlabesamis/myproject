import React, { Component } from 'react';
import { Button, Modal, Collapse, Well } from 'react-bootstrap'

class RefinementsModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Refine Results</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={() => this.setState({ open: !this.state.open })}>
                        click
                    </Button>
                    <Collapse in={this.state.open}>
                        <div>
                            <Well>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                ea proident.
                            </Well>
                        </div>
                    </Collapse>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default RefinementsModal;