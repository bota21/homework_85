import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Artists from "./Artists";
import Layout from "../components/Layout";
import Albums from "./Albums";
import Tracks from "./Tracks";
import Register from "../components/Form/Register";
import Login from "../components/Form/Login";
import Main from "../components/Main";
import TrackHistories from "./TrackHistories";
import { useSelector } from "react-redux";
import AddArtist from '../components/Form/AddArtist';
import AddAlbum from "../components/Form/AddAlbum";
import AddTrack from "../components/Form/AddTrack";

const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  return isAllowed ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="Main">
      <Layout>
        <Switch>
          <ProtectedRoute
            isAllowed={!user}
            exact
            path="/"
            redirectTo="/artists"
            component={Main}
          />
          <ProtectedRoute
            isAllowed={user !== null}
            redirectTo="/login"
            exact
            path="/artists"
            component={Artists}
          />
          <ProtectedRoute
            isAllowed={user !== null}
            redirectTo="/login"
            exact
            path="/artist/:artistId"
            component={Albums}
          />
          <ProtectedRoute
            isAllowed={user !== null}
            redirectTo="/login"
            exact
            path="/album/:albumId"
            component={Tracks}
          />
          <ProtectedRoute
            isAllowed={user !== null}
            redirectTo="/login"
            exact
            path="/add_artist"
            component={AddArtist}
          />
          <ProtectedRoute
            isAllowed={user !== null}
            redirectTo="/login"
            exact
            path="/add_track"
            component={AddTrack}
          />
          <ProtectedRoute
            isAllowed={user !== null}
            redirectTo="/login"
            exact
            path="/add_album"
            component={AddAlbum}
          />
          <ProtectedRoute
            isAllowed={!user}
            redirectTo="/artists"
            exact
            path="/register"
            component={Register}
          />
          <ProtectedRoute
            isAllowed={!user}
            redirectTo="/artists"
            exact
            path="/login"
            component={Login}
          />
          <ProtectedRoute
            isAllowed={user !== null}
            redirectTo="/login"
            exact
            path="/track_history"
            component={TrackHistories}
          />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
