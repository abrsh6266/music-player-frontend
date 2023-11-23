import { ADD_MUSIC, DELETE_MUSIC, FETCH_MUSIC_BY_GENRE, SET_GENRES, SET_MUSIC_LIST, UPDATE_MUSIC } from "./constant";

interface Action {
    type: string,
    data: object[],
    genres?: string[];
}
export const musicData = (data = [], action: Action) => {
    switch (action.type) {
        case ADD_MUSIC:
            return data;
        case UPDATE_MUSIC:
            return data;
        case FETCH_MUSIC_BY_GENRE:
            return data
        case SET_MUSIC_LIST:
            return {...data,data: action.data}
        case DELETE_MUSIC:
            return data;
        case SET_GENRES:
            return { ...data, genres: action.genres };
        default:
            return []
    }
}