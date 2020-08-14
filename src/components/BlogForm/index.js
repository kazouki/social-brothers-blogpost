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
    border: "1px solid white",
    padding: 6,
  },
});

export default function BlogForm() {
  const [inputState, setInputState] = useState({
    title: "",
    category: "categorie 1",
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
          autoComplete="off"
          size="medium"
          name="title"
          value={inputState.title}
          onChange={handleInputChange}
          fullWidth={true}
        />
      </div>
      <div>
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
          size="medium"
          name="category"
          fullWidth={true}
          id="filled-select-category"
          select
          value={inputState.category}
          onChange={handleInputChange}
        >
          {categories.map((cat) => (
            <MenuItem key={cat.value} value={cat.value}>
              {cat.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
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
          size="medium"
          name="content"
          fullWidth={true}
          id="standard-multiline-flexible"
          multiline
          rows={16}
          value={inputState.content}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
