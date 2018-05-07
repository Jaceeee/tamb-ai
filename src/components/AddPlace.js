import React, { Component } from "react";

class AddPlace extends Component {
	constructor() {
		super();		
	}

	createNewPlace(event) {		
		const { placeName, location, contactNumber, type } = this.refs;
		this.props.createNewPlace({
			id: this.props.places.length + 1,
			placeName: placeName.value,
			location: location.value,
			contactNumber: contactNumber.value,
			type: type.value			
		});
		event.preventDefault();				
	}

	render() {
		return (
			<div>
				<form onSubmit={this.createNewPlace.bind(this)}>
					<div>
						<p>Name of Place</p>
						<input type="text" ref="placeName" required="Fill in name of place"/>						
					</div>
					<div>
						<p>Location</p>
						<input type="text" ref="location" required="Fill in location"/>						
					</div>
					<div>
						<p>Contact Number</p>
						<input type="text" ref="contactNumber" required="Fill in contactNumber"/>						
					</div>
					<div>
						<p>Type of place</p>
						<select ref="type" required>
							<option>Resort</option>
							<option>Restaurant</option>
							<option>Religious</option>
							<option>Historical</option>
							<option>Ecological</option>
						</select>
					</div>
					<div>					
						<br />
						<button type="submit">Add</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddPlace;