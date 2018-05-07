import React, {Component} from 'react';

class FeedItem extends Component {
	render() {
		return (
			<li style={{listType: "none"}}>
				<div className="container-fluid">
					<div className="row profile">
						<div class="col-sm-1 profpic">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Chocolate_Hills_overview.JPG/1200px-Chocolate_Hills_overview.JPG" className="img-responsive" />
						</div>
						<div className="col-sm-10 profname">
							<h5>{this.props.name}</h5>
							<p>Visit <a href="#"><i className="glyphicon glyphicon-map-marker"></i></a></p>
						</div>
					</div>										    
				</div>
				<br />
			</li>
		)
	}
}

export default FeedItem;