import React, { Component } from 'react';

class Header extends Component {	
	render() {
		return (
			<div id="navigation">
				<div className="row">
					<nav className="navbar navbar-inverse navbar-fixed-top navbar-toggleable-md">
						<div className="container-fluid">
							<button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navlinks">
								<i className="glyphicon glyphicon-menu-hamburger">
								</i>
							</button>
							<div className="container-fluid">
								<div className="navbar-header">
									<h2 className="navbar-brand">Tamb-ai</h2>
								</div>

								<form className="navbar-form navbar-left" action="action_page.php">
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Search for Places" />
										<div className="input-group-btn">
											<button className="btn btn-default" type="submit">
												<i className="glyphicon glyphicon-search"></i>
											</button>
										</div>
									</div>
								</form>
								<button className="btn btn-danger"
												onClick={this.props.changeDisplayState.bind(this, 0)}>
									Logout
								</button>
							</div>
						</div>
					</nav>
				</div>						
			</div>
		)
	}
}

export default Header;