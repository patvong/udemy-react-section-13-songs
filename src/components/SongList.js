import React, { Component } from "react";
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary" 
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    })
  }

  render() {
    return (
    <div className="ui divided list">{this.renderList()}</div>
    );
  }
}

// 1- state is from the redux store (songs, selectedSong)
// we're mapping the store fields to props that are needed by this component
// 2- this function is re-run everytime the state is changed when an action has been created
// and that reducers have been run. This is so that the component gets the latest updated store passed
// in as props.
const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs
  };
}

// 1- connect(mapStateToProps) returns a function
// we're then calling it by passing a parameter SongList
// 2- by passing the selectSong action, we're passing it as a props to the component so that 
// when we call the function it creates the action and sends it to redux.
// All this work is done by using the connect function that makes all the wiring.
// That avoids to call the selectSong action creation and to dispatch the action ourselves with Redux.
// In other words, less Redux boilerplate.
export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList);


