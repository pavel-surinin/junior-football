var React = require('react');
var PropTypes = React.PropTypes;
function mapTeams(self) {
  var items = self.props.teams;
    items.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  var teams = items.map(function(t,idx){
    return (
      <div className='teamThumbnail' key={idx}>
        <a href={'#/team/' + t.id}>{t.name}</a>
      </div>);
  });
  console.log(teams);
  return teams;
}
var TeamList = React.createClass({

  render: function() {
    var teams = mapTeams(this);
    console.log(this.props.teams);
    return (
      <div className="w3-container w3-animate-right w3-theme-l5">
        <h4>Komandos</h4>
          <small><span className='createTourLink' ><a href='#/team/create'>pridėti</a></span></small>
          <br/>
        {teams}
      </div>
    );
  }

});

module.exports = TeamList;
