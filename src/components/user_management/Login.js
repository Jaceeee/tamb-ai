import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, } from 'react-router-dom';

// import Navigation from './Navigation';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import Home from './Home';
import AccountPage from './Account';

import * as routes from '../../constants/routes';

import { Grid } from 'react-bootstrap';
import { firebase } from '../../firebase';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      originLat: 0,
      originLng: 0,
    };
  }

  componentWillMount() {    
    navigator.geolocation.getCurrentPosition(
      (position) => {        
        this.setState({
          ...this.state,
          originLat: position.coords.latitude,
          originLng: position.coords.longitude
        });
      }
    )
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {            
    return(
      <Router>
        <Grid fluid={true}>                            
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage users={this.props.users}/>}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <Home authUser={this.state.authUser}
                                   places={this.props.places}
                                   users={this.props.users}
                                   comments={this.props.comments}
                                   ratings={this.props.ratings}
                                   changeCurrentMapLocation={this.props.changeCurrentMapLocation}
                                   currentLocation={this.props.currentLocation} 
                                   addComment={this.props.addComment} 
                                   addRating={this.props.addRating.bind(this)}
                                   originLng={this.state.originLng}
                                   originLat={this.state.originLat}/>              
            }
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <AccountPage authUser={this.state.authUser} />}
          />          
        </Grid>
      </Router>
    );
  }
}

export default Login;