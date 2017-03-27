var React = require('react');
var PropTypes = React.PropTypes;
const Tournaments = require('../components/Tournaments.js');
const axios = require('Axios');
const loading = require('../styles').loading;

var TournamentsContainer = React.createClass({
  getInitialState: function() {
    return {
      t:[],
      isLoading : true
    };
  },
  componentWillMount: function() {
    var self = this;
    axios.get('http://localhost:9090/tournament/')
    .then(function(response){
      self.setState({isLoading : false, t : response.data});
    });
  },
  render: function() {
    if (this.state.isLoading) {
      return (
        <div style={loading}>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>);
    } else {

    }
    return (
      <Tournaments t={this.state.t} />
    );
  }

});

module.exports = TournamentsContainer;
