var React = require('react');
var PropTypes = React.PropTypes;
const Tournament = require('../components/Tournament.js');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const axios = require('Axios');
const loading = require('../styles').loading;
function getTours(self) {
  axios.get('http://localhost:9090/tournament/' + self.props.params.id)
  .then(function(response){
    self.setState({isLoading : false, t : response.data});
    console.log(response.data);
  });
}

var TournamentContainer = React.createClass({
  getInitialState: function() {
    return {
      t:[],
      isLoading : true
    };
  },
  onHandleGenerateGroups:function(){
    this.setState({isLoading : true});
    var self = this;
    axios.post('http://localhost:9090/tournament/' + this.props.params.id + '/generate')
    .then(function(response){
      console.log('Tournament groups generated!',response.data);
      getTours(self);
    });

  },componentDidMount: function() {
    getTours(this);
  },
  componentWillReceiveProps: function(nextProps) {
    getTours(thtis);
  },
  render: function() {
    if (this.state.isLoading) {
      return (
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div style={loading}>
            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            <span className="sr-only">Loading...</span>
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {

    }
    return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <Tournament onHandleGenerateGroups={this.onHandleGenerateGroups} t={this.state.t} />


    </ReactCSSTransitionGroup>
    );
  }

});
module.exports = TournamentContainer;
