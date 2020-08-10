import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Person from './Person';
import Register from './Register';
import Utilization from './Utilization';

class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
         loginscreen: [],
      loginmessage: '',
      // buttonLabel: 'Register',
    //  buttonLabel: 'Utilization',
      isLogin: true
    }
  }
  componentWillMount() {
    var loginscreen = [];
     loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext} />);
   // loginscreen.push(<Person parentContext={this} appContext={this.props.parentContext} />);
    // var loginmessage = "Not registered yet, Register Now";
    var loginmessage = "Person Utilization Details";
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage
    })
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        {/* <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
          <div>
              <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div> */}
      </div>
    );
  }

  handleClick(event)
{
  // console.log("event",event);
  var loginmessage;
  if (this.state.isLogin) {
    var loginscreen = [];
    loginscreen.push(<Utilization parentContext={this} />);
    loginmessage = "Go Back to Person Details";
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage,
      buttonLabel: "Person",
      isLogin: false
    })
  }
  else {
    var loginscreen1 = [];
    // loginscreen1.push(<Login parentContext={this} />);
    loginscreen1.push(<Person parentContext={this} />);
    loginmessage = "Utilization Details";
    this.setState({
      loginscreen1: loginscreen1,
      loginmessage: loginmessage,
      buttonLabel: "Utilization",
      isLogin: true
    })
  }
}
}
const style =
{
  margin: 15,
};



export default Loginscreen;