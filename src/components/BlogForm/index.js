import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  fieldLabel: {
    display: "flex",
  },
  inputField: {
    background: "#F8F8F8",
    borderRadius: 0,
  },
});

export default function BlogForm() {
  const [inputState, setInputState] = useState({
    title: "",
    category: "category 1",
    content: "",
  });

  const classes = useStyles();

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
      <div>
        <p>
          <Typography
            className={classes.fieldLabel}
            variant="caption"
            display="block"
            gutterBottom
          >
            Bericht naam
          </Typography>
          <TextField
            InputProps={{
              disableUnderline: true,
              className: classes.inputField,
            }}
            name="title"
            value={inputState.title}
            onChange={handleInputChange}
            fullWidth={true}
            variant="filled"
          />
        </p>
      </div>
      <div>
        <p>
          <Typography
            className={classes.fieldLabel}
            variant="caption"
            display="block"
            gutterBottom
          >
            Categorie
          </Typography>
          <TextField
            InputProps={{
              disableUnderline: true,
              className: classes.inputField,
            }}
            name="category"
            fullWidth={true}
            id="filled-select-category"
            select
            value={inputState.category}
            onChange={handleInputChange}
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
          <Typography
            className={classes.fieldLabel}
            variant="caption"
            display="block"
            gutterBottom
          >
            Bericht
          </Typography>
          <TextField
            InputProps={{
              disableUnderline: true,
              className: classes.inputField,
            }}
            name="content"
            variant="filled"
            fullWidth={true}
            id="standard-multiline-flexible"
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
