var React = require('react');
var PropTypes = React.PropTypes;
const Team = require('../components/Team.js');
const axios = require('Axios');
const loading = require('../styles').loading;
function getTeam(self) {
  axios.get('http://localhost:9090/team/' + self.props.params.id)
  .then(function(response){
    self.setState({isLoading : false, team : response.data});
    console.log(response.data);
  });
}
var TeamContainer = React.createClass({
  getInitialState: function() {
    return {
      team : [],
      isLoading : true,
    };
  },
  componentWillMount: function() {
    getTeam(this);
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
      <Team team={this.state.team}/>
    );
  }
});

module.exports = TeamContainer;
