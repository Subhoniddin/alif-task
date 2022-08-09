const axios = require("axios").default;

export const SET_POST = "SET_REPOST";
export const SET_USER = "SET_USER";
export const SET_PHOTOS = "SET_PHOTOS";
export const SET_POST_COUNT = "SET_POST_COUNT";
export const SET_PHOTOS_COUNT = "SET_PHOTOS_COUNT";
export const HANDLE_SEARCH = "HANDLE_SEARCH";
export const IS_Fetching = "IS_Fetvhing";
export const LOADING = "LOADING";
export const FAILED = "FAILED";

export const Loading = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });
  };
};

export const Failed = (error) => {
  return (dispatch) => {
    dispatch({ type: FAILED, payload: error });
  };
};

export const getReposte = (page = 1) => {
  return async (dispatch) => {
    let size = 10;
    try {
      dispatch(Loading());
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?page=" + page
      );
      dispatch({
        type: SET_POST,
        payload: response.data.splice(page * size - size, size),
      });
      dispatch({ type: SET_POST_COUNT, payload: response.data.length / size });
    } catch (error) {
      dispatch(Failed(error));
    }
  };
};

export const getUser = () => {
  return async (dispatch) => {
    try {
      dispatch(Loading());
      const userresponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // getState().repos.isFetching = false;
      dispatch({ type: SET_USER, payload: userresponse.data });
    } catch {
      dispatch(Failed());
    }
  };
};

export const getPhotos = (Page = 1) => {
  return async (dispatch) => {
    let pageSize = 10;
    dispatch(Loading());
    try {
      const photoresponse = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?page=" + Page
      );
      dispatch({
        type: SET_PHOTOS,
        payload: photoresponse.data.splice(
          Page * pageSize - pageSize,
          pageSize
        ),
      });
      photoresponse.data.splice(100);
      dispatch({
        type: SET_PHOTOS_COUNT,
        payload: photoresponse.data.length / pageSize,
      });
    } catch {
      dispatch(Failed());
    }
  };
};

export const searchByName = (search) => {
  const name = new URL(window.location.href).pathname.replace("/", "");

  return (dispatch, getState) => {
    const serachCash = getState().repos.searchCash;
    const items = serachCash.length === 0 ? getState().repos[name] : serachCash;
    console.log(items);
    const value = items.filter((item) =>
      item[name === "users" ? "name" : "title"]
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    dispatch({
      type: HANDLE_SEARCH,
      payload: { name, value },
    });
  };
};
