import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "song1",
      duration: "4:05",
    },
    {
      title: "song2",
      duration: "4:15",
    },
    {
      title: "song3",
      duration: "4:10",
    },
  ];
};

const selectedSongReducer = (currentSelectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return currentSelectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
