// named export vs default export
// Need to use the curly braces to import a named export
// import { selectSong } from '../actions'
export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}