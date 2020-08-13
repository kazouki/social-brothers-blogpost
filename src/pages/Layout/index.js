import React, { useState } from "react";

////////
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";

import Divider from "@material-ui/core/Divider";

export default function Layout(props) {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
      height: "100%",

      flexGrow: 1,
    },
    cardGrid: {
      maxWidth: "85%",
      marginTop: 15,
      marginBottom: 30,
    },
    inboxListRoot: {
      width: "100%",
      maxWidth: "80%",
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    paperTop: {
      marginTop: 10,
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    paperForm: {
      padding: theme.spacing(2),
      minHeight: 250,
      color: theme.palette.text.secondary,
    },
    formRoot: {
      padding: theme.spacing(2),
      minHeight: 250,
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();

  const RenderForm = () => {
    const [category, setCategory] = React.useState("category 1");
    const [content, setContent] = React.useState("Controlled");
    const [title, setTitle] = React.useState("Controlled");

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
      //   <form className={classes.formRoot} noValidate autoComplete="off">
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
        {/* </form> */}
      </>
    );
  };

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.cardGrid}>
          <Grid item xs={12}>
            <Paper className={classes.paperTop}>
              <b>banner</b>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <RenderForm />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paperForm}>
              <div style={{ marginBottom: 20 }}>
                <Container>
                  <strong>
                    <em style={{ fontSize: 8 }}> ... </em>
                  </strong>
                  <strong>
                    <em style={{ fontSize: 8 }}>...</em>
                  </strong>
                </Container>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            {/* <Paper className={classes.paper}>
              <Container></Container>
            </Paper> */}
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Container>
                <Button>Meer laden button</Button>
              </Container>
            </Paper>
          </Grid>
          {/* <Grid item xs={3}></Grid> */}
        </Grid>
      </div>
    </div>
  );
}
