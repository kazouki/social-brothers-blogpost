const initialState = {
  posts: [],
  page: 1,
  displayPage: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...payload],
      };
    case "INIT_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...payload].sort((a, b) => a.id - b.id),
      };
    case "ADD_POST":
      const newPosts = state.posts;
      const newestFirst = [...newPosts.reverse(), payload].reverse();
      return { ...state, posts: [...newestFirst] };
    case "INIT_PAGE_COUNT":
      return {
        ...state,
        page: payload,
      };
    case "INCREMENT_FETCH_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "INCREMENT_DISPLAY_PAGE":
      return {
        ...state,
        displayPage: state.displayPage + 1,
      };

    default:
      return state;
  }
};
