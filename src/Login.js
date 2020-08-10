import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import UploadScreen from './UploadScreen';
import axios from 'axios';
import Person from './Person';
// charan
class Login extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      personId: '',
      personPassword: ''
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
              hintText="Enter your PersonId"
              floatingLabelText="PersonId"
              onChange={(event, newValue) => this.setState({ personId: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your PersonPassword"
              floatingLabelText="PersonPassword"
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
    //"http://localhost:9094/utilization/get";
     var apiBaseUrl = "http://localhost:8080/Person-0.0.1-SNAPSHOT/person/login";
    //var apiBaseUrl = "http://localhost:9093/person/login";
    var self = this;
    var payload =
    {

      "personId": this.state.personId,
      "personPassword": this.state.personPassword
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
            //  uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
            uploadScreen.push(<Person appContext={self.props.appContext} />)

            self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
          }
        }
        else

          if (response.status == 500) {
            console.log("PersonId password do not match");
            // alert("username password do not match")
          }
          else {
            console.log("Username does not exists");
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

