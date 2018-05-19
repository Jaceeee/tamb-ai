import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from '../Feed';
import AccountPage from './Account';
import Header from '../Header';
import LeftNav from '../LeftNav';
import RightNav from '../RightNav';
import Feed from '../Feed';

import * as routes from '../../constants/routes';
import { firebase } from '../../firebase';

import { Grid, Row   } from 'react-bootstrap';

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
        <div>
          <Navigation authUser={this.state.authUser} />

          <Grid>
              
            <hr/>

            <Route
              exact path={routes.LANDING}
              component={() => <LandingPage />}
            />
            <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUpPage />}
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
              component={() => 
                <div>                  
                  <Grid fluid={true}>
                    <Row>            
                      <LeftNav />
                      <Feed places = {this.props.places} 
                        users = {this.props.users}                 
                        changeCurrentMapLocation = {this.props.changeCurrentMapLocation}/>
                      <RightNav currentLocation = {this.props.currentLocation}/> 
                    </Row>
                  </Grid>
                </div>
              }
            />
            <Route
              exact path={routes.ACCOUNT}
              component={() => <AccountPage />}
            />
          </Grid>
        </div>
      </Router>
    );
  }
}

export default Login;