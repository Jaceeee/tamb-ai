import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar } from 'react-bootstrap';
import ReactStars from 'react-stars';
import RatingModalBody from './RatingModalBody';
import RatingReview from './RatingReview';
import '../stylesheets/RatingTab.css';

export default class RatingTab extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = { show: false };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="RatingContainer">
                <p><strong>2</strong> out of 5</p>
                <ReactStars value={2.3} edit={false} size={35} className="StarAverage" />
                <Button bsStyle="primary" onClick={this.handleShow}>Rate Place</Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Place Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RatingModalBody />
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonToolbar className="ModalButtons">
                            <Button bsStyle="primary">Submit</Button>
                            <Button onClick={this.handleClose}>Cancel</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Modal>
                <h5>Reviews</h5>
                <RatingReview />
            </div>
        )
    }
}