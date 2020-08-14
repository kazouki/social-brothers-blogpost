import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initPosts } from "./store/post/actions";
import { fetchCategories } from "./store/form/actions";
import Layout from "./pages/Layout";
// import TestTwo from "./components/testing2";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initPosts([1, 2]));
    dispatch({ type: "INIT_PAGE_COUNT", payload: 3 });
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
