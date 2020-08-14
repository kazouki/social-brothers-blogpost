import React from "react";
import BlogForm from "../../components/BlogForm";
import BlogCard from "../../components/BlogCard";
import Banner from "../../components/Banner";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import imageOne from "../../static/tech.jpg";
import imageTwo from "../../static/tech1.jpg";

export default function Layout(props) {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      flexGrow: 1,
    },
    layoutGrid: {
      background: "#F0F0F0",
      maxWidth: "85%",
      padding: 20,
      marginTop: 15,
      marginBottom: 30,
    },

    loadButton: {
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
      padding: theme.spacing(0),
      textAlign: "center",
    },
    cardGrid: {
      padding: theme.spacing(2),
      minHeight: 250,
      background: "white",
    },
  }));
  const classes = useStyles();

  const SectionButton = withStyles({
    root: {
      boxShadow: "none",
      textTransform: "none",
      fontSize: 11,
      fontWeight: "bold",
      padding: "10px 15%",
      lineHeight: 1.5,
      color: "white",
      background: "#e59400",
      borderRadius: 30,
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:hover": {
        backgroundColor: "#ffc04c",
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
        border: "1px solid #ffe4b2",
        backgroundColor: "#ffe4b2",
      },
    },
  })(Button);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.layoutGrid}>
        <Grid item xs={12}>
          <Container className={classes.sectionTop}>
            <Banner />
          </Container>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Container className={classes.section}>
            <BlogForm />
            <Container>
              <p>
                <SectionButton>Bericht aanmaken</SectionButton>
              </p>
            </Container>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container className={classes.cardGrid}>
            <Grid container spacing={3}>
              <Grid item sm={12} xs={12} lg={6}>
                <BlogCard image={imageOne} />
              </Grid>
              <Grid item sm={12} xs={12} lg={6}>
                <BlogCard image={imageTwo} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Container className={classes.section}>
                <SectionButton>Meer laden</SectionButton>
              </Container>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
