import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Artists from './Artists';
import Layout from '../components/Layout';


const Main = () => {
  return (
    <div className="Main">
     <Layout>
       <Switch>
         <Route exact path='/artists'component={Artists}/>
         <Route path='/albums/:artistId' />
         
       </Switch>
       <Artists/>
     </Layout>
    </div>
  );
}

export default Main;
