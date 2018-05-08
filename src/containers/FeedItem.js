import React, {Component} from 'react';
import Comments from './Comments.js';

class FeedItem extends Component {
	render() {		
		return (
			<li style={{listStyleType: "none"}}>
				<div className="container-fluid">
					<div className="panel panel-default feed">
						<div className="col-sm-1 profpic">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Chocolate_Hills_overview.JPG/1200px-Chocolate_Hills_overview.JPG" className="img-responsive" />
						</div>
						<div className="col-sm-10 profname">
							<h5>{this.props.name}</h5>							
							<h6>{this.props.contact}</h6>
							<h6>{this.props.type}</h6>
							<p>Visit <a href="#"><i className="glyphicon glyphicon-map-marker"></i></a></p>
						</div>
						<div className="container-fluid">
							<div className="container-fluid">
								<div className="panel panel-default posting">
									<img src={this.props.imageUrl} className="img-responsive" id="myImg" alt={this.props.imageUrl} style={{paddingLeft: "20%", paddingBottom: "10%"}} width="400px" height="100px"/>
									<div id="myModal" className="modal">
										<span className="close">&times;</span>
										<img className="modal-content" id="img01" />
										<div id="capt"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="container-fluid feedtabs">
							<ul className="nav nav-tabs">
								<li className="active"><a data-toggle="tab" href={"#description"+this.props.id}>Description</a></li>
								<li><a href={"#comment"+this.props.id} data-toggle="tab">Comment</a></li>											
							</ul>
							<div className="tab-content">
								<div id={"description"+this.props.id} className="tab-pane fade in active placeDesc">
									<button type="button" className="btn btn-default rateBtn" data-toggle="modal" data-target="#ratingModal">Rate</button>
									<div id="ratingModal" className="modal fade" role="dialog">
										<div className="modal-dialog">
											<div className="modal-content">
												<div className="modal-header">
													<button type="button" className="close" data-dismiss="modal">&times;</button>
													<h4 className="modal-title">Feedback</h4>
													<div className="modal-body">
														<h4>Rate Place:</h4>
														<label className="radio-inline"><input type="radio" name="optradio" />P</label>
														<label className="radio-inline"><input type="radio" name="optradio" />F</label>
														<label className="radio-inline"><input type="radio" name="optradio" />G</label>
														<label className="radio-inline"><input type="radio" name="optradio" />VG</label>
														<label className="radio-inline"><input type="radio" name="optradio" />E</label>
													</div>
													<div className="modal-footer">
														<button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
														<button type="submit" className="btn btn-default">Submit</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<h4>Description</h4>
									<p>{this.props.description}</p>
								</div>
								<Comments placeId={this.props.id}
										  currentUser={this.props.currentUser}/>
							</div>
						</div>
					</div>						
					<br />
				</div>
			</li>
		)
	}
}

export default FeedItem;