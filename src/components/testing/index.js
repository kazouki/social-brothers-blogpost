import React, { useState } from "react";
import api from "../../Api";

export default function Index() {
  const [state, setState] = useState({});
  const handleClick = async () => {
    setState(await api("categories"));
  };
  return (
    <div>
      <button onClick={handleClick}>{JSON.stringify(state)}</button>
    </div>
  );
}
