import React, { Component } from 'react';
import { Button, Modal, Panel, PanelGroup } from 'react-bootstrap'

class RefinementsModal extends React.Component {
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
                    <PanelGroup id="accordion-example">
                        <Panel eventKey="1">
                            <Panel.Heading>
                            <Panel.Toggle><Panel.Title>Shop By Part</Panel.Title></Panel.Toggle>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <p>Air Filter (4814)</p>
                                <p>Seat Filter (2)</p>
                            </Panel.Body>
                        </Panel>
                        <Panel eventKey="2">
                            <Panel.Heading>
                                <Panel.Toggle><Panel.Title>Shop By Brand</Panel.Title></Panel.Toggle>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <p>K&N (3)</p>
                                <p>Denso (2)</p>
                            </Panel.Body>
                        </Panel>
                    </PanelGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default RefinementsModal;