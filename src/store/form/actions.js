import api from "../../Api";

export function fetchCategories() {
  return async function (dispatch) {
    try {
      const res = await api(`categories`, {
        method: "GET",
      });
      if (res) {
        dispatch({ type: "CATEGORIES", payload: res.data });
        return res;
      } else return null;
    } catch (e) {
      console.log(e);
    }
  };
}
