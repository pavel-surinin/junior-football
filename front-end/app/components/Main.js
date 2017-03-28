
var React = require('react');
var raleway = require('../styles').raleway;
var Link = require('react-router').Link;

var Main = React.createClass({
  w3_open: function(){
    var mySidebar = this.refs.mySidebar
    var overlayBg = this.refs.myOverlay
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
  },
  w3_close: function(){
    var mySidebar = this.refs.mySidebar
    var overlayBg = this.refs.myOverlay
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
  },
  render: function () {
    return (
      <div style={raleway} className='w3-light-grey'>
        <div className="w3-bar w3-top w3-green w3-large" style={{zIndex:4,backgroundImage: 'url("images/grass.jpg")', boxShadow: '0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)!important'}}>
          <button className="w3-bar-item w3-button w3-hide-large w3-hover-red w3-hover-text-light-grey" onClick={this.w3_open}><i className="fa fa-bars"></i>  Menu</button>
          <span className="w3-bar-item w3-right"><i className="fa fa-futbol-o" aria-hidden="true"></i></span>
        </div>
        <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{zIndex:3,width:'300px'}} ref='mySidebar'><br/>
        <div className="w3-container w3-row">
          <div className="w3-col s4">
            <img src="/images/avatar.png" className="w3-circle w3-margin-right" style={{width:'46px'}}/>
          </div>
          <div className="w3-col s8 w3-bar">
            <span>Welcome, <strong>Admin</strong></span><br/>
            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
          </div>
        </div>
        <hr/>
        <div className="w3-container">
          <h5>Dashboard</h5>
        </div>
        <div className="w3-bar-block">
          <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={this.w3_close} title="close menu"><i className="fa fa-remove fa-fw"></i>  Close Menu</a>
          <a href="#/tournament" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw"></i>  Turnyrai</a>
          <a href="#/team" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i>  Komandos</a>
          <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw"></i>  Settings</a><br/><br/>
        </div>
        </nav>
        <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{cursor:'pointer'}} title="close side menu" ref='myOverlay'></div>
        <div className="w3-main" style={{marginLeft:'300px',marginTop:'43px'}}>
          {this.props.children}

        </div>
      </div>
    )
  }
});

module.exports = Main;
