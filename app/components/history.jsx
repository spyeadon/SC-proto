import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import {toggleHistory} from 'APP/app/action-creators/history'

export const History = (props) => {
  return (
    <div id="search-history">
    <h2>Username: {props.user.name}</h2>
    <h4>Email: {props.user.email}</h4>
    <span>Search History: </span>
      <ul>
      {
        props.searchHistory.map(search => {
          return (
            <li key={search.created_at}>{search.address}</li>
          )
        })
      }
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

const HistoryContainer = connect(
  mapStateToProps, null)(History);

export default HistoryContainer;
