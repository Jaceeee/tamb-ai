import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DetailsTab.css';

export default class DetailsTab extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = { show: false };

        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = { selectedDay: undefined };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleDayClick(day, { selected }) {
        if (selected) {
            this.setState({ selectedDay: undefined });
            return;
        }
        this.setState({ selectedDay: day });
    }

    render() {
        return (
            <div className="DetailsContainer">
                <div className="Info">
                    <h5>Address:</h5>
                    <p>Some address here...</p>
                    <h5>Contact</h5>
                    <p>jjpatac@gmail.com</p>
                    <p>09090909090</p>
                </div>
                <div className="PlaceSched">
                    <h5><a onClick={this.handleShow}>Schedule</a></h5>
                    <div className="Days">
                        <h6>Sunday</h6>
                        <h6>Monday</h6>
                        <h6>Tuesday</h6>
                        <h6>Wednesday</h6>
                        <h6>Thursday</h6>
                        <h6>Friday</h6>
                        <h6>Saturday</h6>
                    </div>
                    <div className="Time">
                        <h6>10:00AM-9:00PM</h6>
                        <h6>10:00AM-9:00PM</h6>
                        <h6>10:00AM-9:00PM</h6>
                        <h6>10:00AM-9:00PM</h6>
                        <h6>10:00AM-9:00PM</h6>
                        <h6>10:00AM-9:00PM</h6>
                        <h6>10:00AM-9:00PM</h6>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Calendar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay} className="FeedCalendar" />
                        {this.state.selectedDay ? (<p>{this.state.selectedDay.toLocaleDateString()}</p>) :
                            (<p>Select a day</p>)}
                        <form>
                            <FormGroup controlId="formControlsTextArea">
                                <ControlLabel>Notes:</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Add notes..." />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonToolbar className="ModalButtons">
                            <Button bsStyle="primary">Save</Button>
                            <Button onClick={this.handleClose}>Cancel</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}