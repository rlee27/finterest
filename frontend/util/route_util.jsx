import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUpContainer from '../components/sessions/sign_up_container';
import UserContainer from '../components/user/user_container';

const Auth = ({component: Component, path, loggedIn}) => {
  return (
    <Route path={path} render={(props) => {
        return !loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }} />
  );
}

const HomeProtected = ({ component: Component, path, loggedIn }) => {
  return(
    <Route
      exact path="/"
      render={ props => loggedIn ? <UserContainer /> : <SignUpContainer /> }
    />
  );
}
const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  }
}
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedHomeRoute = withRouter(connect(mapStateToProps, null)(HomeProtected));
