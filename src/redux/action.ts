import { ADD_MUSIC,MUSIC_LIST,DELETE_MUSIC, FETCH_GENRES, SET_GENRES, UPDATE_MUSIC, FETCH_MUSIC_BY_GENRE } from "./constant"

export const addMusic = (data: object) => ({
    type: ADD_MUSIC,
    data,
  });

export const musicList = ()=>{
    return {
        type: MUSIC_LIST
    }
}
export const deleteMusic = (musicId: number) => ({
  type: DELETE_MUSIC,
  musicId,
});
export const fetchGenres = () => ({
  type: FETCH_GENRES,
});

export const setGenres = (genres: string[]) => ({
  type: SET_GENRES,
  genres,
});
export const updateMusic = (musicId: number, data: object) => ({
  type: UPDATE_MUSIC,
  musicId,
  data,
});
export const fetchMusicByGenre = (genre: string) => ({
  type: FETCH_MUSIC_BY_GENRE,
  genre,
});