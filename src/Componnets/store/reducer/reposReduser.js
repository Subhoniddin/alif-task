import {
  SET_PHOTOS,
  SET_POST,
  SET_USER,
  SET_POST_COUNT,
  HANDLE_SEARCH,
  SET_PHOTOS_COUNT,
  FAILED,
  LOADING,
} from "../action/repost";

const defaultSate = {
  posts: [],
  users: [],
  photos: [],
  isFetching: false,
  pageSize: 10,
  totalPostsCount: 0,
  totalPhotosCout: 0,
  curentPage: [],
  searchCash: [],
};

export default function repostReduser(state = defaultSate, action) {
  switch (action.type) {
    case SET_PHOTOS:
      return rePhotos(state, action);
    case SET_PHOTOS_COUNT:
      return {
        ...state,
        totalPhotosCout: action.payload,
      };
    case SET_POST:
      return repost(state, action);
    case SET_USER:
      return reUser(state, action);
    case SET_POST_COUNT:
      return {
        ...state,
        totalPostsCount: action.payload,
      };
    case HANDLE_SEARCH:
      return serach(state, action);
    case LOADING:
      return Loading(state, action);
    case FAILED:
      return Failed(state, action);
    default:
      return state;
  }
}

const repost = (state, action) => {
  return {
    ...state,
    posts: action.payload,
    searchCash: [],
    isFetching: false,
  };
};

const reUser = (state, action) => {
  return {
    ...state,
    users: action.payload,
    searchCash: [],
    isFetching: false,
  };
};

const rePhotos = (state, action) => {
  return {
    ...state,
    photos: action.payload,
    searchCash: [],
    isFetching: false,
  };
};

const serach = (state, action) => {
  return {
    ...state,
    ...(state.searchCash.length === 0 && {
      searchCash: state[action.payload.name],
    }),
    [action.payload.name]: action.payload.value,
  };
};

const Loading = (state, action) => {
  return {
    ...state,
    isFetching: true,
  };
};

const Failed = (state, action) => {
  return {
    ...state,
    isFetching: false,
  };
};
