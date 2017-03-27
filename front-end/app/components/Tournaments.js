var React = require('react');
var PropTypes = React.PropTypes;
const tour_link = require('../styles').tour_link;
var Tournaments = React.createClass({
  render: function() {
  var tornamentsTable = this.props.t.map(function(t,index){
    return (
      <tr key={index}>
        <td><a style={tour_link} href={'#/tournament/' + t.id}><i className="fa fa-fw fa-caret-right" aria-hidden="true"></i>{t.name}</a></td>
        <td>{t.ageMin}</td>
        <td>{t.ageMax}</td>
      </tr>
    );
  });
    return (
      <div className="w3-container">
    <h5>Turnyrai</h5>
    <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
      <thead>
        <tr>
          <td>Pavadinimas</td>
          <td>Amžius nuo</td>
          <td>Amžius iki</td>
        </tr>
      </thead>
      <tbody>
      {tornamentsTable}
      </tbody>
    </table><br/>
  </div>

    );
  }

});

module.exports = Tournaments;
