import React from "react";
import BlogForm from "../../components/BlogForm";
import BlogCard from "../../components/BlogCard";
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
    loadButtonCards: {
      color: "white",
      background: "orange",
      borderRadius: 30,
    },
    section: {
      padding: theme.spacing(2),
      textAlign: "center",
      background: "white",
    },
    sectionTop: {
      marginTop: 10,
      padding: theme.spacing(2),
      textAlign: "center",
    },
    cardGrid: {
      padding: theme.spacing(2),
      minHeight: 250,
      background: "white",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.layoutGrid}>
        <Grid item xs={12}>
          <Container className={classes.sectionTop}>
            <b>banner</b>
          </Container>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Container className={classes.section}>
            <BlogForm />
            <Container>
              <Button className={classes.loadButton} variant="contained">
                Bericht aanmaken
              </Button>
            </Container>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container className={classes.cardGrid}>
            <Grid container spacing={3}>
              <Grid item sm={12} lg={6}>
                <BlogCard />
              </Grid>
              <Grid item sm={12} lg={6}>
                <BlogCard />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Container className={classes.section}>
                <Button className={classes.loadButtonCards} variant="contained">
                  Meer laden
                </Button>
              </Container>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
