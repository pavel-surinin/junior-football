var React = require('react');
var PropTypes = React.PropTypes;

var TeamLogo = React.createClass({
  render: function() {
    var p = this.props;
    return (
      <span className={'fa-stack fa-' + p.size + 'x'}>
        <i className={'fa fa-'+ p.logoBg +' fa-stack-2x' + ' ' + p.logoBgStyle}></i>
        <i className={'logo-shadow fa fa-' + p.logoTop +' fa-stack-1x' + ' ' + p.logoTopStyle}></i>
        <i className={'logo-shadow logo-letter' + ' ' + p.logoTextStyle + ' ' + p.logoTextSizeStyle}>{p.logoText}</i>
      </span>
    );
  }

});

module.exports = TeamLogo;
