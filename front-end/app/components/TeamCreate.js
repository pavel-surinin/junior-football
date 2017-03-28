var React = require('react');
var PropTypes = React.PropTypes;
const PlayerCreate = require('../components/PlayerCreate');
var TeamCreate = React.createClass({

  render: function() {
    var players = [];
    for (var i = 0; i < this.props.numberOfPlayers; i++) {
      players.push(
        <PlayerCreate key={i*i*3*5} pl={i} onHandleRegisterPlayer={this.props.onHandleRegisterPlayer}/>
      );
    }
    return (
      <div className="w3-container w3-animate-right w3-theme-l5">
        <h4>Kurti komanda</h4>
        <ul id="tab1" className="nav nav-tabs team-create-tabs">
            <li className="active"><a href="#name" data-toggle="tab">Pavadinimas</a></li>
            <li><a href="#players" data-toggle="tab">Žaidėjai</a></li>
            <li><a href="#logo" data-toggle="tab">Logotipas</a></li>
            <li><a href="#contacts" data-toggle="tab">Kontaktai</a></li>

        </ul>
        <div className="tab-content team-create-content">
          <div className="tab-pane fade in active" id="name">
            <input onChange={this.props.onHandleNameChange} className='w3-input' placeholder='Komandos pavadinimas' required/>
          </div>

          <div className="tab-pane fade" id="players">
            {players}
            <button className='w3-button w3-theme-d1' onClick={this.props.onHandleSubmitTeam}>Registruoti</button>
          </div>

          <div className="tab-pane fade" id="logo">
            logo
          <input type="color"/>
          </div>

          <div className="tab-pane fade" id="contacts">
            contacts
          </div>
        </div>
      </div>
    );
  }

});

module.exports = TeamCreate;
