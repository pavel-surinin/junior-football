var React = require('react');
var PropTypes = React.PropTypes;
const tour_link = require('../styles').tour_link;
var Tournaments = React.createClass({
  onHandleShowCreate: function(){
    this.props.clearForm();
    console.log(this.refs.create.className);
    if (this.refs.create.className === 'createTour') {
      this.refs.create.className = 'createTour ctOpen';
    } else {
      this.refs.create.className = 'createTour';
    }
  },
  render: function() {
    var tornamentsTable = this.props.t.map(function(t,index){
      return (
        <tr className='w3-text-theme' key={index}>
          <td>
              <a className='groupsLink' href={'#/tournament/' + t.id}>
                <span>
                  <i className="fa fa-fw fa-caret-right" aria-hidden="true"></i>
                  {t.name}
                </span>
              </a>
          </td>
          <td>{t.ageMin}</td>
          <td>{t.ageMax}</td>
        </tr>
      );
    });
    var errors = this.props.errors.map(function(err,idx){
      return(<div className='w3-text-red w3-animate-right' key={idx}>
      <i className="fa fa-fw fa-exclamation" aria-hidden="true"></i>
        {err}
      </div>);
    });
  return (
    <div className="w3-container w3-animate-right w3-theme-l5">
    <h4>Turnyrai</h4>
    <small><span className='createTourLink' onClick={this.onHandleShowCreate}>pridėti</span></small>
    <div ref='create' className='createTour'>
      <div>
        <form onSubmit={this.props.onHandleSubmitTourn}>
          <input onChange={this.props.onHandleNameChange} value={this.props.name} className='w3-input inline-48' placeholder='Pavadinimas' required/>
          <input onChange={this.props.onHandleMinChange} value={this.props.ageMin} className='w3-input inline-20' placeholder='Min amžius' type='number' required/>
          <input onChange={this.props.onHandleMaxChange} value={this.props.ageMax} className='w3-input inline-20' placeholder='Max amžius' type='number' required/>
          <button className='w3-button w3-text-green'><i className="fa fa-fw fa-check" aria-hidden="true"></i></button>
        </form>
        <button onClick={this.onHandleShowCreate} className='w3-button'><i className="fa fa-fw fa-times" aria-hidden="true"></i></button>
        {errors}
    </div>
    </div>

    <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
      <thead>
        <tr className='w3-theme-d1'>
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
