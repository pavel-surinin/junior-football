var React = require('react');
var PropTypes = React.PropTypes;
const TeamLogo = require('../components/TeamLogo');
function getPlayers(self) {
  return self.props.team.players.map(function(p,idx){
    var goals = 0;
    if (p.goals) {
      goals = p.goals.length;
    }
    return(
      <tr key={idx}>
        <td>
          {p.number}
        </td>
        <td>
          {p.name} {p.surname}
        </td>
        <td>
          {goals}
        </td>
      </tr>
    );
  });
}

var Team = React.createClass({
  render: function() {
    var team = this.props.team;
    var playersTable = getPlayers(this);
    return (
      <div className="w3-container w3-animate-right w3-theme-l5">
        <div className='team-header'>
          <TeamLogo
            size={4}
            logoBg={team.logo.logoBg}
            logoBgStyle={team.logo.logoBgStyle}
            logoTop={team.logo.logoTop}
            logoTopStyle={team.logo.logoTopStyle}
            logoTextStyle={team.logo.logoTextStyle}
            logoTextSizeStyle={team.logo.logoTextSizeStyle}
            logoText={team.logo.logoText}
            />
          <div className='inline'>
            <h4>{this.props.team.name}</h4>
            <div className='team-contacts'>
              <p>Kontaktinis asmuo: {team.contacts.name}</p>
              <p>Telefonas: {team.contacts.phone}</p>
              <p>El. paštats: {team.contacts.email}</p>
            </div>

          </div>
        </div>
        <h6>Žaidėjai</h6>
        <table className='w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white'>
          <thead>
            <tr>
              <td style={{width : '45px'}}>
                Nr.
              </td>
              <td>
                Vardas Pavardė
              </td>
              <td>
                Įvarčiai
              </td>
            </tr>
          </thead>
          <tbody>
            {playersTable}
          </tbody>
        </table>
      </div>
    );
  }

});

module.exports = Team;
