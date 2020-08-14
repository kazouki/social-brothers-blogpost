import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";
import { selectCategories } from "../../store/form/selectors";
import { selectPostStatus } from "../../store/form/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";

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
  alert: {
    display: "inline-flex",
    alignContent: "center",
    marginBottom: 40,
  },
});

export default function BlogForm() {
  const [inputState, setInputState] = useState({
    title: "",
    category_id: "",
    content: "",
  });

  const categories = useSelector(selectCategories);
  const postStatus = useSelector(selectPostStatus);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleInputChange = (event) => {
    setInputState({ ...inputState, [event.target.name]: event.target.value });
    dispatch({
      type: "FORM_STATE",
      payload: { ...inputState, [event.target.name]: event.target.value },
    });
  };

  return (
    <>
      <div>
        {postStatus ? (
          <span className={classes.alert}>
            <Alert severity="success">
              <AlertTitle>Gelukt!</AlertTitle>
              Je nieuwe bericht is aangemaakt
              <p>
                <strong>Klik op 'Meer Laden' om berichten te bekijken!</strong>
              </p>
            </Alert>
          </span>
        ) : null}
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
          fullWidth={true}
          id="filled-select"
          name="category_id"
          select
          value={inputState.category_id}
          onChange={handleInputChange}
        >
          {categories ? (
            categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value={0}>loading</MenuItem>
          )}
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
