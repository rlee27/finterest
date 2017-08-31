import React from 'react';
import { connect } from 'react-redux';
import PinIndex from './pin_index';
import { selectBoardPins } from '../../reducers/selectors';

const mapStateToProps = (state, props) => {
  const board = state.entities.boards.board;
  return ({
    board,
    userPins: selectBoardPins(state, board),
    currentUser: state.session.currentUser,
    userId: props.userId,
  });
};

export default connect(mapStateToProps)(PinIndex);
