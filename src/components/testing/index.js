import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/post/actions";
import api from "../../Api";

export default function Index() {
  const [state, setState] = useState({});
  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  const handleClick = async (event) => {
    dispatch(fetchPosts());
    dispatch({ type: "INCREMENT_PAGE" });
  };

  return (
    <div>
      {/* <button name="categories" onClick={handleClick}>
        Categories :: {JSON.stringify(state.data)}
      </button> */}
      <button name={`posts?page=5`} onClick={handleClick}>
        Posts :: {JSON.stringify(state.data)}
      </button>
    </div>
  );
}
