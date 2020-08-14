const initialState = {
  categories: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CATEGORIES":
      return { ...state, categories: payload };
    case "FORM_STATE":
      return {
        ...state,
        formState: payload,
      };
    case "POST_STATUS":
      return { ...state, postStatus: payload };
    default:
      return state;
  }
};
