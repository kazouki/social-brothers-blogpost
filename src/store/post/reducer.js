const initialState = {
  posts: [],
  page: 1,
  displayPage: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_POSTS":
      return { ...state, posts: [...state.posts, ...payload] };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, payload] };

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
      const counterMax = state.posts.length;
      const counter =
        state.displayPage === counterMax ? counterMax : state.displayPage + 1;
      return {
        ...state,
        displayPage: counter,
      };

    default:
      return state;
  }
};
