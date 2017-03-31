var React = require('react');
var PropTypes = React.PropTypes;
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
    var playersTable = getPlayers(this);
    return (
      <div className="w3-container w3-animate-right w3-theme-l5">
        <h4>{this.props.team.name}</h4>
        <h6>Žaidėjai</h6>
        <table className='w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white'>
          <thead>
            <tr>
              <td>
                Numeris
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
