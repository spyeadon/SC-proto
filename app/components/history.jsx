import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import {toggleHistory} from 'APP/app/action-creators/history'

export const History = (props) => {
  return (
    <div id="search-history">
      <ul>
        <li>made it to search history!!</li>
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
//   }
// }

const HistoryContainer = connect(
  mapStateToProps, null)(History);

export default HistoryContainer;
