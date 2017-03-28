var React = require('react');
var PropTypes = React.PropTypes;

var PlayerCreate = React.createClass({
  register: function(event){
    this.props.onHandleRegisterPlayer(this.props.pl,event.target.name,event.target.value)
  },
  render: function() {
    return (
      <div>
        <input name='number' onChange={this.register} className='w3-input inline px100px' placeholder='Numeris' type='number' required/>
        <input name='name' onChange={this.register} className='w3-input inline px200px' placeholder='Vardas' required/>
        <input name='surname' onChange={this.register} className='w3-input inline px200px' placeholder='Pavardė' required/>
        <input name='birthDate' onChange={this.register} className='w3-input inline px200px' placeholder='Gimimo Data 2001-01-01'/>
      </div>
    );
  }

});

module.exports = PlayerCreate;
