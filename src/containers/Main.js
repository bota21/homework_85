import React from "react";
import { Route, Switch } from "react-router-dom";
import Artists from "./Artists";
import Layout from "../components/Layout";
import Albums from "./Albums";
import Tracks from "./Tracks";
import Register from '../components/Form/Register';

const Main = () => {
  return (
    <div className="Main">
      <Layout>
        <Switch>
          <Route exact path="/" component={Artists} />
          <Route exact path="/artist/:artistId" component={Albums} />
          <Route exact path="/album/:albumId" component={Tracks} />
          <Route exact path='/register' component={Register}/>
        </Switch>
      </Layout>
    </div>
  );
};

export default Main;
