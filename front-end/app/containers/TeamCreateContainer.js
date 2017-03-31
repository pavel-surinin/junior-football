var React = require('react');
var PropTypes = React.PropTypes;
const TeamCreate = require('../components/TeamCreate.js');
const axios = require('Axios');
var valid = require('../utils/validation.js');
var players = [];
function saveTeam(self, postObject) {
  axios.post('http://localhost:9090/team', postObject)
  .then(function(response){
    self.context.router.push('team');
  });
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var TeamCreateContainer = React.createClass({
  getInitialState: function() {
    return {
      cpName : '',
      cpPhone : '',
      cpEmail : '',
      numberOfPlayers : 6,
      step : 0,
      name : '',
      players : [],
      logo : null,
      contactsErrors : [],
      nameErrors : [],
      playersErrors : [],
      icons : [],
      logoBg : 'shield',
      logoBgStyle : 'w3-text-black',
      logoTop : 'diamond',
      logoTopStyle : 'w3-text-red',
      logoText : '',
      logoTextStyle : 'w3-text-red',
      logoTextSizeStyle : '',
      logoBgIcons : ['cloud','shield','circle','circle-o','dot-circle-o','square','square-o','adjust'],
      logoColor : ['w3-text-red','w3-text-green','w3-text-blue','w3-text-yellow','w3-text-white','w3-text-black','w3-text-grey'],
    };
  },
  componentWillMount: function() {
    var self = this;
    axios.get('http://localhost:9090/team/icons')
    .then(function(response){
      self.setState({icons : response.data});
    });
  },
  saveTeam: function(){
    var postObject = {
      name : this.state.name.trim(),
      players : this.state.players,
      logo : {
        logoBg : this.state.logoBg,
        logoBgStyle : this.state.logoBgStyle,
        logoTop : this.state.logoTop,
        logoTopStyle : this.state.logoTopStyle,
        logoText : this.state.logoText,
        logoTextStyle : this.state.logoTextStyle,
        logoTextSizeStyle : this.state.logoTextSizeStyle,
      },
      contacts : {
        name : this.state.cpName.trim(),
        phone : this.state.cpPhone,
        email : this.state.cpEmail,
      },
    };
    saveTeam(this,postObject);
  },
  onHandleRegisterPlayer: function(pl,key,value){
    this.initPlayers(players);
    players[pl][key] = value;
  },
  onHandleNameChange: function(event){
    this.setState({name : event.target.value});
  },
  registerPlayers: function(){
    var err = valid.player(players);
    if (err.length == 0) {
        this.onHandleRandomLogo();
        this.setState({
        step : 2,
        nameErrors : [],
        players : players,
      });
    }else {
      this.setState({playersErrors : err});
    }
  },
  initPlayers: function(players){
    if (players.length == 0) {
      console.log('Initializing players array');
      for (var i = 0; i < this.state.numberOfPlayers; i++) {
        players.push({
          name : '',
          surname : '',
          number : null,
          birthDate : '',
        });
      }
    }
  },
  onHandleLogoTopClikc : function(event){
    var icon = event.target.className.substring(30, event.target.className.length);
    this.setState({
      logoTop : icon,
      logoTopStyle : 'w3-text-green',
      logoText : '',
    });
  },
  onHandleBgColorClick: function(event){
    var icon = event.target.className.substring(19, event.target.className.length);
    this.setState({logoBgStyle : icon});
  },
  onHandleTopColorClick: function(event){
    var icon = event.target.className.substring(19, event.target.className.length);
    if (this.state.logoText == '') {
      this.setState({logoTopStyle : icon});
    } else {
      this.setState({logoTextStyle : icon});
    }
  },
  onHandleLogoTopTextClikc: function(){
    var words = this.state.name.split(' ');
    var initials =  '';
    words.forEach(function(word){
      if (word != '' && word != '-') {
        initials = initials + word[0].toUpperCase();
      }
    });
    var fontSize = 'logo-text-s1';
    if (initials.length == 3) {fontSize = 'logo-text-s3';}
    if (initials.length == 4) {fontSize = 'logo-text-s4';}
    if (initials.length >= 5) {
      fontSize = 'logo-text-s5';
      initials = initials.substring(0,5);
    }
    this.setState({
      logoText : initials,
      logoTextStyle : 'logo-letter w3-text-red',
      logoTopStyle : 'logo-none',
      logoTextSizeStyle : fontSize,
    });
  },
  onHandleRandomLogo:function(){
    if (getRandomInt(0,7) == 3) {
      this.onHandleLogoTopTextClikc();
    } else {
      var logo = this.state.icons[getRandomInt(0,this.state.icons.length-1)];
      var topColor = this.state.logoColor[getRandomInt(0,this.state.logoColor.length-1)];
      this.setState({logoTopStyle : topColor});
      this.setState({
        logoTop : logo,
        logoText : '',
      });
    }
    //bgLogo
    var bgLogo = this.state.logoBgIcons[getRandomInt(0,this.state.logoBgIcons.length-1)];
    console.log(bgLogo);
    this.setState({logoBg : bgLogo });
    //colorTop
    var topColor = this.state.logoColor[getRandomInt(0,this.state.logoColor.length-1)];
    this.setState({logoTextStyle : topColor});
    // colorBg
    var bgColor = this.state.logoColor[getRandomInt(0,this.state.logoColor.length-1)];
    this.setState({logoBgStyle : bgColor});

  },
  onHandleLogoBgClick: function(event){
    var icon = event.target.className.substring(30, event.target.className.length);
    this.setState({logoBg : icon});
    console.log(icon);
  },
  registerName: function(){
    var err = [];
    if (!valid.isTeamName(this.state.name)) {
      err.push('Komandos pavadinima gali sudaryti tik raidės, tarpai, skaičiai ir \'-\'');
      this.setState({nameErrors : err});
    } else {
      this.setState({
        step : 1,
        nameErrors : [],
      });
    }
  },
  registesContacts : function(){
    var err = [];
    valid.name(this.state.cpName,err);
    valid.email(this.state.cpEmail,err);
    valid.phone(this.state.cpPhone,err);
    if (err.length != 0) {
      this.setState({contactsErrors : err});
    } else {
      this.setState({contactsErrors : []});
      this.saveTeam();
    }
  },
  onHandleStepClick: function(event){
    if (this.state.step == 0 && event.target.name == '1') {this.registerName();}
    else if(this.state.step == 1 && event.target.name == '2') {this.registerPlayers();}
    else if(this.state.step == 3 && event.target.name == '4') {this.registesContacts();}
    else {
      this.setState({step : parseInt(event.target.name)});
    }
  },
  onHandleContactPersonEmailChange : function(event){
    this.setState({ cpEmail : event.target.value});
  },
  onHandleContactPersonNameChange : function(event){
    this.setState({ cpName : event.target.value});
  },
  onHandleContactPersonPhoneChange : function(event){
    this.setState({ cpPhone : event.target.value});
  },
  render: function() {
    return (
      <TeamCreate
        step={this.state.step}
        errors={this.state.playersErrors}
        nameErrors={this.state.nameErrors}
        contactsErrors={this.state.contactsErrors}
        numberOfPlayers={this.state.numberOfPlayers}
        onHandleRegisterPlayer={this.onHandleRegisterPlayer}
        onHandleStepClick={this.onHandleStepClick}
        onHandleNameChange={this.onHandleNameChange}
        onHandleLogoTopClikc={this.onHandleLogoTopClikc}
        onHandleBgColorClick={this.onHandleBgColorClick}
        onHandleTopColorClick={this.onHandleTopColorClick}
        onHandleLogoTopTextClikc={this.onHandleLogoTopTextClikc}
        onHandleLogoBgClick={this.onHandleLogoBgClick}
        logoBgIcons={this.state.logoBgIcons}
        logoColor={this.state.logoColor}
        icons={this.state.icons}
        logoBg={this.state.logoBg}
        logoBgStyle={this.state.logoBgStyle}
        logoTop={this.state.logoTop}
        logoTopStyle={this.state.logoTopStyle}
        logoText={this.state.logoText}
        logoTextStyle={this.state.logoTextStyle}
        logoTextSizeStyle={this.state.logoTextSizeStyle}
        onHandleRandomLogo={this.onHandleRandomLogo}
        onHandleContactPersonNameChange={this.onHandleContactPersonNameChange}
        onHandleContactPersonPhoneChange={this.onHandleContactPersonPhoneChange}
        onHandleContactPersonEmailChange={this.onHandleContactPersonEmailChange}
      />
    );
  }
});
TeamCreateContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
module.exports = TeamCreateContainer;
