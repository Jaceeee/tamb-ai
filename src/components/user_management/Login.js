import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import Home from './Home';
import AccountPage from './Account';

import LeftNav from '../LeftNav';
import RightNav from '../RightNav';
import Feed from '../Feed';

import * as routes from '../../constants/routes';

import { Grid, Row } from 'react-bootstrap';
import { firebase } from '../../firebase';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
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
          <Navigation authUser={this.state.authUser} />
              
          <hr/>

          <Route
              exact path={routes.LANDING}
              component={() => <LandingPage />}
          />
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
                                   changeCurrentMapLocation={this.props.changeCurrentMapLocation}
                                   currentLocation={this.props.currentLocation} />              
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