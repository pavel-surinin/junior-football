var React = require('react');
var PropTypes = React.PropTypes;
const TeamList = require('../components/TeamList.js');
const axios = require('Axios');
const loading = require('../styles').loading;


var TeamListContainer = React.createClass({
  getInitialState: function() {
    return {
      teams:[],
      isLoading : true,
    };
  },
  componentWillMount: function() {
    var self = this;
    axios.get('http://localhost:9090/team/').then(function(response){
      self.setState({teams : response.data, isLoading : false});
    });
  },
  render: function() {
    if (this.state.isLoading) {
      return (
        <div style={loading}>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>);
    }
    return (
      <TeamList teams={this.state.teams} />
    );
  }

});

module.exports = TeamListContainer;
