var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;

function Home () {
  return (
    <div>
    <header className="w3-container" style={{paddingTop:'22px'}}>
        <h5><b><i className="fa fa-dashboard"></i> My Dashboard</b></h5>
    </header>

    <div className="w3-row-padding w3-margin-bottom">
      Lorem shmipsum
    </div>
  </div>
  )
}

module.exports = Home;
