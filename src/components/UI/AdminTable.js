import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  titleProfile: {
    textAlign: "center",
    background: "gold",
    margin: 0,
  },
  description: {
    width: 400,
    height: 73,
    overflow: "hidden",
    wordWrap: "nowrap",
  },
  btnPublish: {
    backgroundColor: "green",
  },
});

export default function AdminTable({ title, array, deleteRow, publishRow }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <h2 className={classes.titleProfile}>{title}</h2>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            {array && array[0] && array[0].description && (
              <StyledTableCell align="center" className={classes.description}>
                Description
              </StyledTableCell>
            )}

            {array && array[0] && array[0].image && (
              <StyledTableCell align="center">Image</StyledTableCell>
            )}
            {array && array[0] && array[0].artist && array[0].artist.title && (
              <StyledTableCell align="center">Artist</StyledTableCell>
            )}
            {array && array[0] && array[0].album && array[0].album.title && (
              <StyledTableCell align="center">Album</StyledTableCell>
            )}
            {array &&
              array[0] &&
              array[0].album &&
              array[0].album.artist &&
              array[0].album.artist.title && (
                <StyledTableCell align="center">Artist</StyledTableCell>
              )}
            {array && array[0] && array[0].cover && (
              <StyledTableCell align="center">Cover</StyledTableCell>
            )}
            {array && array[0] && array[0].year && (
              <StyledTableCell align="center">Year</StyledTableCell>
            )}
            {array && array[0] && array[0].long && (
              <StyledTableCell align="center">Long</StyledTableCell>
            )}
            {array && array[0] && array[0].user && (
              <StyledTableCell align="center">User</StyledTableCell>
            )}
            {array && array[0] && array[0].createdAt && (
              <StyledTableCell align="center">Created at</StyledTableCell>
            )}
            {array && array[0] && array[0].createAt && (
              <StyledTableCell align="center">Created at</StyledTableCell>
            )}
            {array && array[0] && array[0].youtube && (
              <StyledTableCell align="center">Youtube link</StyledTableCell>
            )}
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              {row && row.description && (
                <StyledTableCell align="center">
                  {row.description}
                </StyledTableCell>
              )}
              {row && row.artist && row.artist.title && (
                <StyledTableCell align="center">
                  {row.artist.title}
                </StyledTableCell>
              )}
              {row && row.album && row.album.title && (
                <StyledTableCell align="center">
                  {row.album.title}
                </StyledTableCell>
              )}
              {row &&
                row.album &&
                row.album.artist &&
                row.album.artist.title && (
                  <StyledTableCell align="center">
                    {row.album.artist.title}
                  </StyledTableCell>
                )}
              {row && row.image && (
                <StyledTableCell align="center">{row.image}</StyledTableCell>
              )}
              {row && row.cover && (
                <StyledTableCell align="center">{row.cover}</StyledTableCell>
              )}
              {row && row.year && (
                <StyledTableCell align="center">{row.year}</StyledTableCell>
              )}
              {row && row.long && (
                <StyledTableCell align="right">{row.long}</StyledTableCell>
              )}
              {row && row.user && row.user.username && (
                <StyledTableCell align="center">
                  {row.user.username}
                </StyledTableCell>
              )}
              {row && row.createdAt && (
                <StyledTableCell align="center">
                  {row.createdAt}
                </StyledTableCell>
              )}
              {row && row.youtube && (
                <StyledTableCell align="right">{`https://youtu.be${row.youtube}`}</StyledTableCell>
              )}
              <StyledTableCell align="center">
                {row && row.published === true ? (
                  "Published"
                ) : (
                  <Button
                    variant="contained"
                    className={classes.btnPublish}
                    onClick={() => publishRow(row._id)}>
                    Publish
                  </Button>
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteRow(row._id)}>
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
