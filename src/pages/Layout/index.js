import React from "react";
import BlogForm from "../../components/BlogForm";
import BlogCard from "../../components/BlogCard";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function Layout(props) {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      height: "100%",

      flexGrow: 1,
    },
    layoutGrid: {
      background: "#F0F0F0",
      maxWidth: "85%",
      marginTop: 15,
      marginBottom: 30,
    },

    loadButton: {
      color: "white",
      background: "orange",
      borderRadius: 30,
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
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.layoutGrid}>
        <Grid item xs={12}>
          <Paper className={classes.paperTop}>
            <b>banner</b>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <BlogForm />
            <Container>
              <Button className={classes.loadButton} variant="contained">
                Bericht aanmaken
              </Button>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paperForm}>
            <Grid container spacing={3} className={classes.cardGrid}>
              <Grid item sm={12} lg={6}>
                <BlogCard />
              </Grid>
              <Grid item sm={12} lg={6}>
                <BlogCard />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item sm={6} xs={12}></Grid>
        <Grid item sm={2} xs={4}></Grid>

        <Grid item sm={2} xs={4}>
          <Container>
            <Button className={classes.loadButton} variant="contained">
              Meer laden
            </Button>
          </Container>
        </Grid>
        <Grid item sm={2} xs={4}></Grid>
      </Grid>
    </div>
  );
}
