var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var TournamentsContainer = require("../containers/TournamentsContainer");
var TournamentContainer = require("../containers/TournamentContainer");
var TeamListContainer = require("../containers/TeamListContainer");
var TeamCreateContainer = require("../containers/TeamCreateContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='tournament' component={TournamentsContainer}/>
      <Route path='tournament/:id' component={TournamentContainer}/>
      <Route path='team' component={TeamListContainer}/>
      <Route path='team/create' component={TeamCreateContainer}/>
    </Route>
  </Router>
);

module.exports = routes;
