import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
import imageURL from "../axios/imageUrl";
// import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  card: {
    cursor: "pointer",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardText: {
    textDecoration: "none",
    color: "#000",
    fontSize: 26,
  },
}));

export default function Artist({ artists, link }) {
  const classes = useStyles();
  const cardImage = imageURL.apiURL;

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {artists.map((artist) => (
            <Grid item key={artist._id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={cardImage + artist.image}
                  title={artist.title}
                />
                <CardContent className={classes.cardContent}>
                  <NavLink to="/album" className={classes.cardText}>
                    {artist.title}
                  </NavLink>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
