import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

import Divider from "@material-ui/core/Divider";

export default function BlogForm() {
  const [inputState, setInputState] = useState({
    title: "",
    category: "category 1",
    content: "",
  });

  const handleInputChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
  };

  const categories = [
    {
      value: "categorie 1",
      label: "categorie 1",
    },
    {
      value: "categorie 2",
      label: "categorie 2",
    },
    {
      value: "categorie 3",
      label: "categorie 3",
    },
    {
      value: "categorie 4",
      label: "categorie 4",
    },
  ];
  return (
    <>
      <Divider />
      <div>
        <b>
          <i>textfield</i>
          <TextField
            name="title"
            value={inputState.title}
            onChange={handleInputChange}
            fullWidth={true}
            variant="filled"
            label="..."
          />
        </b>
      </div>
      <div>
        <p>
          <TextField
            name="category"
            fullWidth={true}
            id="filled-select-currency"
            select
            label="Select"
            value={inputState.category}
            onChange={handleInputChange}
            helperText="kies je categorie"
            variant="filled"
          >
            {categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.label}
              </MenuItem>
            ))}
          </TextField>
        </p>
      </div>
      <div>
        <p>
          <TextField
            name="content"
            variant="filled"
            fullWidth={true}
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rows={8}
            value={inputState.content}
            onChange={handleInputChange}
          />
        </p>
      </div>
    </>
  );
}
