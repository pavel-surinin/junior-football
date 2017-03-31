var React = require('react');
var PropTypes = React.PropTypes;
var PlayerCreate = require('../components/PlayerCreate');
var TeamLogo = require('../components/TeamLogo');
var valid = require('../utils/validation.js');
var TeamCreate = React.createClass({
  render: function() {
    var self = this;
    var previewLogo = (
      <span className="fa-stack fa-3x">
        <i className={'fa fa-'+ self.props.logoBg +' fa-stack-2x' + ' ' + self.props.logoBgStyle}></i>
        <i className={'logo-shadow fa fa-' + self.props.logoTop +' fa-stack-1x' + ' ' + self.props.logoTopStyle}></i>
        <i className={'logo-shadow logo-letter' + ' ' + self.props.logoTextStyle + ' ' + self.props.logoTextSizeStyle}>{self.props.logoText}</i>
      </span>
    );
    var colorListBg = this.props.logoColor.map(function(c, idx){
        return <li key={idx} onClick={self.props.onHandleBgColorClick}><i className={'fa fa-fw fa-square ' + c} aria-hidden="true"></i></li>;
    });
    var colorListTop = this.props.logoColor.map(function(c, idx){
        return <li key={idx} onClick={self.props.onHandleTopColorClick}><i className={'fa fa-fw fa-square ' + c} aria-hidden="true"></i></li>;
    });
    var icons = this.props.icons.map(function(i,idx){
      return <i onClick={self.props.onHandleLogoTopClikc} key={idx} className={'logo-change fa fa-fw fa-2x fa-' + i} aria-hidden="true"></i>;
    });
    var stackIcons = this.props.logoBgIcons.map(function(icon,idx){
      return (
          <i key={idx} onClick={self.props.onHandleLogoBgClick} className={'logo-change fa fa-fw fa-2x fa-'+ icon}></i>
      );
    });
    var validationMessages = valid.showMessages(this.props.errors);
    var nameValidationMessages = valid.showMessages(this.props.nameErrors);
    var contactsErrors = valid.showMessages(this.props.contactsErrors);
    var players = [];
    for (var i = 0; i < this.props.numberOfPlayers; i++) {
      players.push(
        <PlayerCreate key={i*18*13} pl={i} onHandleRegisterPlayer={this.props.onHandleRegisterPlayer}/>
      );
    }
    var navEls = document.getElementsByName('tab');
    var contentEls = document.getElementsByName('content');
    if (navEls.length != 0 && contentEls.length != 0) {
      navEls.forEach(function(n){n.className = '';});
      navEls[this.props.step].className = 'active';
      contentEls.forEach(function(c){c.className = 'tab-pane fade';});
      contentEls[this.props.step].className = 'tab-pane fade active in';
    }
    return (
      <div className="w3-container w3-animate-right w3-theme-l5">
        <h4>Kurti komandą</h4>
        <ul id="tab1" className="nav nav-tabs team-create-tabs">
            <li name='tab'><a>Pavadinimas</a></li>
            <li name='tab'><a>Žaidėjai</a></li>
            <li name='tab'><a>Logotipas</a></li>
            <li name='tab'><a>Kontaktai</a></li>
        </ul>
        <div className="tab-content team-create-content">
          {/*KOMANDOS PAVADINIMAS*/}
          <div name='content' className="tab-pane" id="name">
            <h6>Komandos Pavadinimas</h6>
            <input onChange={this.props.onHandleNameChange} className='w3-input' placeholder='pvz. Kalnų Ereliai' required/>
            <button className='w3-button w3-theme margin-tr' name='1' onClick={this.props.onHandleStepClick}>Toliau</button>
            {nameValidationMessages}
          </div>
          {/*ŽAIDĖJAI*/}
          <div name='content' className="tab-pane fade" id="players">
            {players}
            <button onClick={this.props.onHandleStepClick} name='0' className='w3-button w3-theme margin-tr'>Atgal</button>
            <button onClick={this.props.onHandleStepClick} name='2' className='w3-button w3-theme margin-tr'>Toliau</button>
            {validationMessages}
          </div>
          {/*LOGO*/}
          <div name='content' className="tab-pane fade " id="logo">
            <div style={{display: 'inline-block'}} className="dropdown">
              <button className="w3-button w3-theme dropdown-toggle" type="button" data-toggle="dropdown">Pagrindas
                <span className="caret"></span>
              </button>
              <ul style={{minWidth : '395px'}} className="dropdown-menu logo-color-list">
                {stackIcons}
              </ul>
            </div>
            <div style={{display: 'inline-block'}} className="dropdown">
              <button className="w3-button w3-theme-d1 dropdown-toggle" type="button" data-toggle="dropdown">Logotipai
                <span className="caret"></span>
              </button>
              <ul style={{minWidth : '395px'}} className="dropdown-menu logo-color-list">
                {icons}
                <i onClick={self.props.onHandleLogoTopTextClikc} className={'logo-change fa logo-top-initials-icon'} aria-hidden="true">Komandos inicialai</i>
              </ul>
            </div>
            <div style={{display: 'inline-block'}} className="dropdown">
              <button className="w3-button w3-theme-d2 dropdown-toggle" type="button" data-toggle="dropdown">Bottom lygio spalva
                <span className="caret"></span></button>
                <ul className="dropdown-menu logo-color-list">
                  {colorListBg}
                </ul>
              </div>
              <div style={{display: 'inline-block'}} className="dropdown">
                <button className="w3-button w3-theme-d3 dropdown-toggle" type="button" data-toggle="dropdown">Top lygio spalva
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu logo-color-list">
                  {colorListTop}
                </ul>
              </div>
              <button onClick={this.props.onHandleRandomLogo} className='w3-button w3-theme-d4'>Random</button>
              <br/>
              <hr/>
              <div className='logo-preview'>
                <TeamLogo
                  size={4}
                  logoBg={this.props.logoBg}
                  logoBgStyle={this.props.logoBgStyle}
                  logoTop={this.props.logoTop}
                  logoTopStyle={this.props.logoTopStyle}
                  logoTextStyle={this.props.logoTextStyle}
                  logoTextSizeStyle={this.props.logoTextSizeStyle}
                  logoText={this.props.logoText}
                />
              </div>
              <br/>
              <button onClick={this.props.onHandleStepClick} name='1' className='w3-button w3-theme margin-tr'>Atgal</button>
              <button onClick={this.props.onHandleStepClick} name='3' className='w3-button w3-theme margin-tr'>Toliau</button>
            </div>
          <div name='content' className="tab-pane fade" id="contacts">
            <h6>Kontaktinis asmuo</h6>
            <input onChange={this.props.onHandleContactPersonNameChange} className='w3-input' placeholder='Vardas Pavardė' required/>
            <h6>Telefono numeris</h6>
            <input onChange={this.props.onHandleContactPersonPhoneChange} className='w3-input' placeholder='+37061234567' required/>
            <h6>El. paštas</h6>
            <input onChange={this.props.onHandleContactPersonEmailChange} className='w3-input' type='email' placeholder='el@pastas.lt' required/>
            {contactsErrors}
            <button onClick={this.props.onHandleStepClick} name='2' className='w3-button w3-theme margin-tr'>Atgal</button>
            <button onClick={this.props.onHandleStepClick} name='4' className='w3-button w3-theme margin-tr'>Toliau</button>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = TeamCreate;
