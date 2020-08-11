import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import UploadScreen from './UploadScreen';
import axios from 'axios';

// charan
class Login extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      clientGUID: '',
      oAuthProviderReturnKey: ''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Login"
            />
            <TextField
              hintText="Enter your MoneyMaxId"
              floatingLabelText="MoneyMaxId"
              onChange={(event, newValue) => this.setState({ personId: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ personPassword: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

  handleClick(event) {
  
     var apiBaseUrl = "http://localhost:9095/client/login";
   
    var self = this;
    var payload =
    {

      "personId": this.state.clientGUID,
      "personPassword": this.state.oAuthProviderReturnKey
    }
    axios.post(apiBaseUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      }
    })
    axios.post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(JSON.stringify(response));
        if (response.status == 200) {
          if (response.data.status == 'STS001') {
            console.log(response.data.message);

          }
          else if(response.data.status == 'STS002')
          
          {
            console.log(response.data.message);
          }
          else
          {

            console.log(response.data.message);
            var uploadScreen = [];
              uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
           // uploadScreen.push(<Person appContext={self.props.appContext} />)

            self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
          }
        }
        else

          if (response.status == 500) {
            //console.log("PersonId password do not match");
            // alert("username password do not match")
          }
          else {
            //console.log("Username does not exists");
            //alert("Username does not exist");
          }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
const style =
{
  margin: 15,
};
export default Login;

