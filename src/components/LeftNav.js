import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import ReactStars from 'react-stars';
import './LeftNav.css';

class LeftNav extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }
	render() {
		return(
			<Col sm={2} xsHidden={true}>
                <div className="LeftPanel">
                    <div className="Profile">
                        <Image src="http://www.hcjoints.be/images/static/user-image.jpg" circle responsive />
                        <div>
                            <p><a>John Caesar Patac</a></p>
                        </div>
                    </div>
                    <div className="LinkContainer">
                        <h4>Famous Places</h4>
                        <div className="FPContainer">
                            <div className="PlaceName"><a>Taoist Temple</a></div>
                            <ReactStars value={3} edit={false} size={13}/>
                        </div>
                        <div className="FPContainer">
                            <div className="PlaceName"><a>Taoist Temple</a></div>
                            <ReactStars value={3} edit={false} size={13}/>
                        </div>
                        <div className="FPContainer">
                            <div className="PlaceName"><a>Taoist Temple</a></div>
                            <ReactStars value={3} edit={false} size={13}/>
                        </div>
                    </div>
                </div>
            </Col>
		)
	}
}

export default LeftNav;