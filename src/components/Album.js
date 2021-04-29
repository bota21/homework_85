import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import imageURL from "../axios/imageUrl";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  albumLink: {
    textDecoration: "none",
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

export default function Album({ albums }) {
  const classes = useStyles();
  const cardImage = imageURL.apiURL;

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {albums.map((album) => (
            <Grid item key={album._id} xs={12} sm={6} md={4}>
              <Link href={"/album/" + album._id} className={classes.albumLink}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={cardImage + album.cover}
                    title={album.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.cardText}>
                      {album.title}
                    </Typography>
                    <Typography variant="h6">{album.year}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
