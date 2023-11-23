import { takeEvery, put, call } from 'redux-saga/effects'
import { MUSIC_LIST, SET_MUSIC_LIST, DELETE_MUSIC, ADD_MUSIC, FETCH_GENRES, SET_GENRES, UPDATE_MUSIC, FETCH_MUSIC_BY_GENRE, SEARCH_MUSIC } from './constant'

function* getMusics(): Generator<Promise<Response>, any, any> {
  const response = yield fetch('https://music-player-backend-n2wtobgpx-abrsh6266s-projects.vercel.app/music');
  const data = yield response.json();
  yield put({ type: SET_MUSIC_LIST, data: data })
}
function* deleteMusic(action: { type: string; musicId: number }) {
  try {
    // Call your backend API to delete the music
    yield call(fetch, `https://music-player-backend-n2wtobgpx-abrsh6266s-projects.vercel.app/music/${action.musicId}`, {
      method: 'DELETE',
    });
    const response = yield call(fetch, 'https://music-player-backend-n2wtobgpx-abrsh6266s-projects.vercel.app/music');
    const data = yield response.json();
    yield put({ type: SET_MUSIC_LIST, data: data });
  } catch (error) {
    console.error('Error deleting music:', error);
  }
}
function* addMusic(action: { type: string; data: object }) {
  try {
    // Call your backend API to add the music
    const response = yield call(fetch, 'https://music-player-backend-n2wtobgpx-abrsh6266s-projects.vercel.app/music', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.data),
    });
    const updatedResponse = yield call(fetch, 'https://music-player-backend-n2wtobgpx-abrsh6266s-projects.vercel.app/music');
    const data = yield updatedResponse.json();
    yield put({ type: SET_MUSIC_LIST, data: data });
  } catch (error) {
    console.error('Error adding music:', error);
  }
}
function* fetchGenres() {
  try {
    // Call your backend API to fetch genres
    const response = yield call(fetch, 'https://music-player-backend-n2wtobgpx-abrsh6266s-projects.vercel.app/music/genres');
    const data = yield response.json();
    yield put({ type: SET_GENRES, genres: data });
  } catch (error) {
    console.error('Error fetching genres:', error);
  }
}
function* updateMusic(action: { type: string; musicId: number; data: object }) {
  try {
    // Call your backend API to update the music
    yield call(fetch, `https://music-player-backend-n2wtobgpx-abrsh6266s-projects.vercel.app/music/${action.musicId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.data),
    });

    const response = yield call(fetch, 'https://music-player-backend-n2wtobgpx-abrsh6266s-projects.vercel.app/music');
    const data = yield response.json();
    yield put({ type: SET_MUSIC_LIST, data: data });
  } catch (error) {
    console.error('Error updating music:', error);
  }
}
function* fetchMusicByGenre(action: { type: string; genre: string }) {
  try {
    // Call your backend API to fetch music by genre
    const response = yield call(fetch, `https://music-player-backend-n2wtobgpx-abrsh6266s-projects.vercel.app/music/byGenre?genre=${action.genre}`);
    const data = yield response.json();
    yield put({ type: SET_MUSIC_LIST, data: data });
  } catch (error) {
    console.error('Error fetching music by genre:', error);
    // Handle error if needed
  }
}
function* musicSaga() {
  yield takeEvery(MUSIC_LIST, getMusics)
  yield takeEvery(DELETE_MUSIC, deleteMusic);
  yield takeEvery(ADD_MUSIC, addMusic);
  yield takeEvery(FETCH_GENRES, fetchGenres);
  yield takeEvery(UPDATE_MUSIC, updateMusic);
  yield takeEvery(FETCH_MUSIC_BY_GENRE, fetchMusicByGenre);
}
export default musicSaga