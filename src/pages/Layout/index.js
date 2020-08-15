import React from "react";
import BlogForm from "../../components/BlogForm";
import BlogCard from "../../components/BlogCard";
import Banner from "../../components/Banner";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/post/actions";
import { makePost } from "../../store/post/actions";
import { selectPosts } from "../../store/post/selectors";
import { selectDisplayPage } from "../../store/post/selectors";

import ScrollToTop from "react-scroll-up";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Layout() {
  const [newData, setNewData] = React.useState();
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const displayPage = useSelector(selectDisplayPage);
  const displayPosts = posts?.slice(0, displayPage * 10);

  const handleClickLoadMore = () => {
    if (displayPage < posts.length)
      dispatch({ type: "INCREMENT_DISPLAY_PAGE" });
    dispatch(fetchPosts());
    if (newData)
      setTimeout(function () {
        newData.scrollIntoView({ behavior: "smooth" });
      }, 200);
  };

  const handleClickSubmit = () => {
    dispatch(makePost());
  };

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
      textAlign: "center",
      alignItems: "center",
      height: "100%",
      flexGrow: 1,
    },
    layoutGrid: {
      background: "#F0F0F0",
      padding: 30,
      marginTop: 15,
    },
    bannerGrid: {
      background: "#F0F0F0",
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
    sectionForm: {
      padding: theme.spacing(2),
      minHeight: 500,
      textAlign: "center",
      background: "white",
    },
    formContainer: { marginTop: 30 },
    sectionTop: {
      padding: theme.spacing(0),
      textAlign: "center",
    },
    cardGrid: {
      padding: theme.spacing(2),
      minHeight: 500,
      background: "white",
      textAlign: "left",
    },
    cardGridItems: {
      marginTop: 10,
    },
  }));
  const classes = useStyles();

  const SectionButton = withStyles({
    root: {
      boxShadow: "none",
      textTransform: "none",
      whiteSpace: "nowrap",
      fontSize: 11,
      fontWeight: "bold",
      padding: "10px 20px",
      width: "15vw",
      minWidth: "200px",
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
      <Container>
        <Grid container spacing={3} className={classes.bannerGrid}>
          <Banner />
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3} className={classes.layoutGrid}>
          <Grid item xs={12} sm={6}>
            <Container className={classes.sectionForm}>
              <Container className={classes.formContainer}>
                <BlogForm />
              </Container>
              <Container>
                <p>
                  <SectionButton onClick={handleClickSubmit}>
                    Bericht aanmaken
                  </SectionButton>
                </p>
              </Container>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container className={classes.cardGrid}>
              <Grid container spacing={3} className={classes.cardGridItems}>
                {displayPosts ? (
                  <>
                    {displayPosts.map((post) => (
                      <Grid key={post.id} item sm={12} xs={12} lg={6}>
                        {post.img_url ? (
                          <BlogCard
                            image={post.img_url}
                            title={post.title}
                            content={post.content}
                            cardId={post.id}
                          />
                        ) : (
                          <>laden..</>
                        )}
                      </Grid>
                    ))}
                  </>
                ) : (
                  <>
                    <Grid item sm={12} xs={12} lg={6}></Grid>
                    <Grid item sm={12} xs={12} lg={6}></Grid>
                  </>
                )}
              </Grid>
              <Grid item xs={12} sm={12}>
                <Container
                  className={classes.section}
                  ref={(ref) => setNewData(ref)}
                >
                  <SectionButton onClick={handleClickLoadMore}>
                    Meer laden
                  </SectionButton>
                  <ScrollToTop showUnder={160}>
                    <h1>
                      <b>
                        <AiOutlineArrowUp />
                      </b>
                    </h1>
                  </ScrollToTop>
                </Container>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
