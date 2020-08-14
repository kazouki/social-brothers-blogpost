import api from "../../Api";

export function fetchPosts(pages) {
  return async function (dispatch, getState) {
    try {
      const res = await api(`posts?page=${getState().post.page + 1}`);
      if (res) {
        dispatch({ type: "FETCH_POSTS", payload: res.data });

        return res;
      } else return null;
    } catch (e) {
      console.log(e);
    }
  };
}

export function initPosts(pages) {
  return async function (dispatch, getState) {
    try {
      pages.forEach(async (page) => {
        const res = await api(`posts?page=${page}`);
        if (res) {
          dispatch({ type: "FETCH_POSTS", payload: res.data });
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
}
