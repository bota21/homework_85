import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAlbum,
  fetchAllAlbums,
  putAlbum,
  queryAlbums,
} from "../store/actions/albumAction";
import {
  deleteArtist,
  putArtist,
  queryArtists,
  requestArtists,
} from "../store/actions/artistAction";
import {
  deleteTrack,
  putTrack,
  queryTracks,
  requestAllTracks,
} from "../store/actions/trackAction";
import AdminTable from "../components/UI/AdminTable";
import UserTable from "../components/UI/UserTable";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const artists = useSelector((state) => state.artists.artists);
  const artistsUser = useSelector((state) => state.artists.userArtists);
  const albumsUser = useSelector((state) => state.albums.userAlbums);
  const tracksUser = useSelector((state) => state.tracks.userTracks);
  const albums = useSelector((state) => state.albums.albums);
  const tracks = useSelector((state) => state.tracks.tracks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArtists());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllAlbums());
  }, [dispatch]);

  useEffect(() => {
    dispatch(requestAllTracks());
  }, [dispatch]);

  const removeArtist = (id) => {
    dispatch(deleteArtist(id));
  };
  const removeAlbum = (id) => {
    dispatch(deleteAlbum(id));
  };
  const removeTrack = (id) => {
    dispatch(deleteTrack(id));
  };

  const publishArtist = (id) => {
    dispatch(putArtist(id));
  };
  const publishAlbum = (id) => {
    dispatch(putAlbum(id));
  };
  const publishTrack = (id) => {
    dispatch(putTrack(id));
  };

  useEffect(() => {
    dispatch(queryArtists(user._id));
  }, [dispatch, user._id]);

  useEffect(() => {
    dispatch(queryAlbums(user._id));
  }, [dispatch, user._id]);

  useEffect(() => {
    dispatch(queryTracks(user._id));
  }, [dispatch, user._id]);
  
  return (
    <>
      {user && user.role === "admin" ? (
        <>
          <AdminTable
            array={artists}
            title="Artists"
            publishRow={publishArtist}
            deleteRow={removeArtist}
          />
          <AdminTable
            array={albums}
            title="Albums"
            publishRow={publishAlbum}
            deleteRow={removeAlbum}
          />
          <AdminTable
            array={tracks}
            title="Tracks"
            publishRow={publishTrack}
            deleteRow={removeTrack}
          />
        </>
      ) : (
        <>
          <UserTable array={artistsUser} title="Artists" />
          <UserTable array={albumsUser} title="Albums" />
          <UserTable array={tracksUser} title="Tracks" />
        </>
      )}
    </>
  );
};

export default Profile;
