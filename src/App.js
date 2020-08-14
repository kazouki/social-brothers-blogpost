import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./store/post/actions";
import Layout from "./pages/Layout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch({ type: "INCREMENT_PAGE" });
  }, [dispatch]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
