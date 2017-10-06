var React = require('react');
var PropTypes = require('prop-types');

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    var stopper = this.state.text + '...';

    this.interval = window.setInterval(function() {
      this.setState(function(prevState) {
        return this.state.text === stopper ? 
                { text: this.props.text  } : 
                { text: prevState.text + '.' } ;
        
      })
    }.bind(this), this.props.speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

module.exports = Loading;