import { connect } from 'react-redux';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';

import { selectUserName } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }, ownProps) => {
  const currentUserName = selectUserName(session);
  return ({
    currentUserName,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    logout: () => {
      return dispatch(logout());
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
