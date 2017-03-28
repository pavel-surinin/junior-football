var React = require('react');
var PropTypes = React.PropTypes;

var Tournament = React.createClass({

  render: function() {
    var groups = null;
    if (this.props.t.groups) {
      groups = this.props.t.groups.map(function(g,index){
        var teams = g.teams.map(function(t,idx){
          return <p key={idx}><a className='groupsDetailsLink' href="#/team/">{t.name}</a></p>
        });
        return (
          <div style={{padding : '4px',display : 'block'}} className='w3-third' key={index}>
              <div style={{height : '220px'}} className='w3-container w3-theme-l1'>
                <a href='#'>
                  <h6 className='groupName'>{g.name}</h6>
                </a>
              {teams}
              </div>
          </div>
        );
      });
    } else {
      groups = <button onClick={this.props.onHandleGenerateGroups} className='w3-button w3-green'>Generuoti grupes</button>
    }
    return (
      <div className="w3-container w3-animate-right w3-theme-l5">
        <h4>{this.props.t.name}</h4>
        <p>
          Amžius: {this.props.t.ageMin} - {this.props.t.ageMax}
        </p>
        <h5>Grupės</h5>
        <div className='w3-row'>
          {groups}
        </div>
      </div>
    );
  }

});

module.exports = Tournament;
