var React = require('react');
var PropTypes = React.PropTypes;
const TeamCreate = require('../components/TeamCreate.js');
var valid = require('../utils/validation.js');
var players = [];
var TeamCreateContainer = React.createClass({
  getInitialState: function() {
    return {
      name : '',
      players : [],
      logo : null,
      numberOfPlayers : 3,
    };
  },
  onHandleRegisterPlayer: function(pl,key,value){
    this.initPlayers(players);
    players[pl][key] = value;
  },
  onHandleNameChange: function(event){
    this.setState({name : event.target.value});
    console.log(this.state);
  },
  onHandleSubmitTeam: function(){
    var err = valid.player(players);
    console.log(err);
  },
  initPlayers: function(players){
    if (players.length == 0) {
      console.log('Initializing players array');
      for (var i = 0; i < this.state.numberOfPlayers; i++) {
        players.push({
          name : '',
          surname : '',
          number : null,
          birthDate : '',
        });
      }
    }
  },
  render: function() {
    return (
      <TeamCreate
        onHandleRegisterPlayer={this.onHandleRegisterPlayer}
        onHandleNameChange={this.onHandleNameChange}
        onHandleSubmitTeam={this.onHandleSubmitTeam}
        numberOfPlayers={this.state.numberOfPlayers}
      />
    );
  }

});

module.exports = TeamCreateContainer;
