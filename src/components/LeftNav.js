import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import ReactStars from 'react-stars';
import '../stylesheets/LeftNav.css';

class LeftNav extends Component {
    constructor() {
        super();
        this.state = {
          open: false,
          averages: []
       };
    }

    componentWillMount() {
        const {places, ratings} = this.props;

        let averagesArray = [];

        if(ratings.length !== 0) {               
            for(let i = 0; i < places.length; i++) {                                            
                
                let ratingsAverages = [];  

                for(let j = 0; j < ratings.length; j++) {
                    if(ratings[j].place_id === places[i].id) {
                        ratingsAverages.push(ratings[j].rating_value);
                    }
                }

                averagesArray.push(ratingsAverages.reduce((accumulator, currentValue) => 
                    Number(Math.round((accumulator + currentValue
                                   ) / ratingsAverages.length + 'e2') + 'e-2')));                
            }
                    
            this.setState({...this.state, averages: averagesArray});
        }


    }

	render() {
        let currentUser = { id: -1 } ;
        
        for (var i = this.props.users.length - 1; i >= 0; i--) {                        
            if(this.props.users[i].email === this.props.currentUser.email) {                
                currentUser = this.props.users[i];
            }
        }

        if(this.state.averages.length !== 0 && this.props.places.length !== 0 ) {            
    		return(
    			<Col sm={2} xsHidden={true}>
                    <div className="LeftPanel">
                        <div className="Profile">
                            <Image src="http://www.hcjoints.be/images/static/user-image.jpg" circle responsive />
                            <div>
                                <p><a>{currentUser.first_name + " " + currentUser.last_name}</a></p>
                            </div>
                        </div>
                        <div className="LinkContainer">
                            <h4>Famous Places</h4>
                            <div className="FPContainer">
                                <div className="PlaceName"><a>{this.props.places[0].name}</a></div>
                                <ReactStars value={this.state.averages[0]} edit={false} size={13}/>
                            </div>
                            <div className="FPContainer">
                                <div className="PlaceName"><a>{this.props.places[1].name}</a></div>
                                <ReactStars value={this.state.averages[1]} edit={false} size={13}/>
                            </div>
                            <div className="FPContainer">
                                <div className="PlaceName"><a>{this.props.places[2].name}</a></div>
                                <ReactStars value={this.state.averages[2]} edit={false} size={13}/>
                            </div>
                        </div>
                    </div>
                </Col>
    		);
        }
        
        else return (
            <Col sm={2} xsHidden={true}>
                <div className="LeftPanel">
                    <div className="Profile">
                        <Image src="http://www.hcjoints.be/images/static/user-image.jpg" circle responsive />
                        <div>
                            <p><a>{currentUser.first_name + " " + currentUser.last_name}</a></p>
                        </div>
                    </div>
                    <div className="LinkContainer">
                        <h4>Famous Places</h4>                        
                    </div>
                </div>
            </Col>
        );
	}
}

export default LeftNav;