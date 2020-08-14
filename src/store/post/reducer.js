const initialState = {
  posts: [],
  page: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_POSTS":
      return { ...state, posts: [...state.posts, ...payload] };
    case "INIT_PAGE_COUNT":
      return {
        ...state,
        page: payload,
      };
    case "INCREMENT_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };

    default:
      return state;
  }
};
