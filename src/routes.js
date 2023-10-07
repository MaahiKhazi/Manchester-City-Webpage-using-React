import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthGuard from './Hoc/Auth';

import Header from './Components/Header_footer/header';
import Footer from './Components/Header_footer/footer';
import Home from './Components/Home';
import SignIn from './Components/Signin';
import Dashboard from './Components/Admin/Dashboard';
import NotFound from './Components/not_found';

import TheMatches from './Components/theMatches';
import AdminPlayers from './Components/Admin/players';
import AddEditPlayers from './Components/Admin/players/addEditPlayers';
import TheTeam from './Components/theTeam';
import AdminMatches from './Components/Admin/matches/index';
import AddEditMatch from './Components/Admin/matches/addEditMatch';

const Routes = ({user}) => {
  return (
    <BrowserRouter>
      <Header user={user}/>
      <Switch>
        <Route path="/admin_matches/edit_match/:matchid" exact component={AuthGuard(AddEditMatch)}/>
        <Route path="/admin_matches/add_match" exact component={AuthGuard(AddEditMatch)}/>
        <Route path="/admin_matches" exact component={AuthGuard(AdminMatches)}/>
        <Route path="/admin_players/edit_player/:playerid" exact component={AuthGuard(AddEditPlayers)}/>
        <Route path="/admin_players/add_player" exact component={AuthGuard(AddEditPlayers)}/>
        <Route path="/admin_players" exact component={AuthGuard(AdminPlayers)}/>
        <Route path="/dashboard" component={AuthGuard(Dashboard)}/>
        <Route path="/the_matches"  component={TheMatches}/>
        <Route path="/the_team" component={TheTeam}/>
        <Route path="/sign_in" exact component={ 
          props => (<SignIn {...props} user={user}/>) 
        }/>
        <Route path="/" exact component={Home}/>
        <Route component={NotFound}/>
      </Switch>
      <ToastContainer />
      <Footer/>
    </BrowserRouter>
  );  
}

export default Routes;