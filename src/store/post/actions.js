import api from "../../Api";

export function fetchPosts() {
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
