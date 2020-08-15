import api from "../../Api";

export function fetchPosts() {
  return async function (dispatch, getState) {
    try {
      const res = await api(`posts?page=${getState().post.page}`);
      dispatch({ type: "FETCH_POSTS", payload: res.data });
      if (res.data[0]) {
        dispatch({ type: "INCREMENT_FETCH_PAGE" });
        return res;
      } else return null;
    } catch (e) {
      console.log(e);
    }
  };
}

export function initPosts(pages) {
  return async function (dispatch) {
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

export function makePost() {
  return async function (dispatch, getState) {
    const { title, category_id = 1, content } = getState().form.formState;
    try {
      const res = await api(`posts`, {
        method: "POST",
        data: {
          title,
          content,
          category_id,
        },
      });
      if (res.statusText === "Created") {
        dispatch({ type: "ADD_POST", payload: res.data });
        dispatch({ type: "POST_STATUS", payload: true });
        setTimeout(
          () => dispatch({ type: "POST_STATUS", payload: false }),
          5000
        );

        return res;
      } else return null;
    } catch (e) {
      console.log(e);
    }
  };
}
