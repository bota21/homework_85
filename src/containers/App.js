import React from "react";
import { Route, Switch } from "react-router-dom";
import Artists from "./Artists";
import Layout from "../components/Layout";
import Albums from "./Albums";
import Tracks from "./Tracks";
import Register from "../components/Form/Register";
import Login from "../components/Form/Login";
import Main from "../components/Main";
import TrackHistories from "./TrackHistories";

const App = () => {
  return (
    <div className="Main">
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/artist/:artistId" component={Albums} />
          <Route exact path="/album/:albumId" component={Tracks} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/track_history" component={TrackHistories} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
