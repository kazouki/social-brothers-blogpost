import React, { useState } from "react";
import BlogForm from "../../components/BlogForm";

////////
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

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
              <BlogForm />
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
