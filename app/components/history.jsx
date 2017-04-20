import React from 'react';
import {connect} from 'react-redux';

export const History = (props) => {
  return (
    <div id="search-history">
      <ul>
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    searchHistory: state.history.searchHistory,
    user: state.auth
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getUserSearchHistory
//   }
// }

const HistoryContainer = connect(
  mapStateToProps, null)(History);

export default HistoryContainer;
