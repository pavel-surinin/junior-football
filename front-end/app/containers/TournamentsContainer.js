var React = require('react');
var PropTypes = React.PropTypes;
const Tournaments = require('../components/Tournaments.js');
const axios = require('Axios');
const loading = require('../styles').loading;
var valid = require('../utils/validation.js')
function getTours(self) {
  axios.get('http://localhost:9090/tournament/')
  .then(function(response){
    self.setState({isLoading : false, t : response.data});
  });
}
var TournamentsContainer = React.createClass({
  getInitialState: function() {
    return {
      t:[],
      isLoading : true,
      ageMin : 0,
      ageMax : 0,
      name : '',
      errors : [],
    };
  },
  componentDidMount: function() {
    getTours(this)
  },
  componentWillReceiveProps: function(nextProps) {
    getTours(this);
  },
  onHandleNameChange:function(event){
    this.setState({name : event.target.value})
  },
  onHandleMinChange:function(event){
    this.setState({ageMin : event.target.value})
  },
  onHandleMaxChange:function(event){
    this.setState({ageMax : event.target.value})
  },
  onHandleSubmitTourn: function(event){
    event.preventDefault();
    this.setState({isLoading:true});
    var self = this;
    var postObject = {
      name : this.state.name,
      ageMin : this.state.ageMin,
      ageMax : this.state.ageMax,
    }

    var errors = valid.tourn(postObject);
    if (errors.length == 0) {
      axios.post('http://localhost:9090/tournament', postObject)
      .then(function(reponse){
        getTours(self);
        self.setState({isLoading : false});
      });
    } else {
      self.setState({isLoading : false, errors : errors});
    }
  },
  clearForm: function(){
    console.log('test');
    this.setState({
      name : '',
      ageMin : null,
      ageMax : null,
      errors : [],
    });
  },
  render: function() {
    if (this.state.isLoading) {
      return (
        <div style={loading}>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>);
    } else {

    }
    return (
      <Tournaments
        clearForm={this.clearForm}
        onHandleNameChange={this.onHandleNameChange}
        onHandleMinChange={this.onHandleMinChange}
        onHandleMaxChange={this.onHandleMaxChange}
        onHandleSubmitTourn={this.onHandleSubmitTourn}
        errors={this.state.errors}
        t={this.state.t}
        name={this.state.name}
        ageMax={this.state.ageMax}
        ageMin={this.state.ageMin}
        />
    );
  }

});

module.exports = TournamentsContainer;
