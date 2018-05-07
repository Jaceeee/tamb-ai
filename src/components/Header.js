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
									<a href="#" className="navbar-brand">Tamb-ai</a>
								</div>

								<form className="navbar-form navbar-left" action="action_page.php">
									<div class="input-group">
										<input type="text" className="form-control" placeholder="Search for Places" />
										<div className="input-group-btn">
											<button className="btn btn-default" type="submit">
												<i className="glyphicon glyphicon-search"></i>
											</button>
										</div>
									</div>
								</form>

								<div className="collapse navbar-collapse" id="navlinks">
									<ul className="nav navbar-nav navbar-right">
										<li className="active"><a href="#">Home</a></li>
										<li><a href="#">Page 1</a></li>
										<li><a href="#">Page 2</a></li>
										<li><a href="#">Page 3</a></li>
									</ul>
								</div>
							</div>
						</div>
					</nav>
				</div>						
			</div>
		)
	}
}

export default Header;