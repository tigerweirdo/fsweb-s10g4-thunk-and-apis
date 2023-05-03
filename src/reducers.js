// reducers.js
import {
  GET_FAVS_FROM_LS,
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  saveFavorites, 
  loadFavorites, 
} from './actions';

const initialState = {
  loading: false,
  error: null,
  activity: null,
  favorites: loadFavorites(),
};



export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, activity: action.payload, loading: false };
    case FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };
      case FAV_ADD:
  const newFavs = [...state.favorites, action.payload];
  saveFavorites(newFavs);
  return {
    ...state,
    favorites: newFavs,
  };

case FAV_REMOVE:
  const filteredFavs = state.favorites.filter((item) => item.key !== action.payload);
  saveFavorites(filteredFavs);
  return {
    ...state,
    favorites: filteredFavs,
  };

      
    case GET_FAVS_FROM_LS:
      const loadedFavorites = loadFavorites();
      return { ...state, favorites: loadedFavorites };
    default:
      return state;
  }
};
