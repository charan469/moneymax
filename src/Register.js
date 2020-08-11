import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Login from './Login';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
 
      email: '',
 
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Register"
            />
            {/* <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange={(event, newValue) => this.setState({ first_name: newValue })}
            />
            <br />
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange={(event, newValue) => this.setState({ last_name: newValue })}
            />
            <br /> */}
              <InputLabel id="demo-controlled-open-select-label">OAuthProviderType</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                // open={open}
                // onClose={handleClose}
                // onOpen={handleOpen}
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'gmail'}>Gmail</MenuItem>
                <MenuItem value={'facebook'}>Facebook</MenuItem>
                <MenuItem value={'bank'}>Bank</MenuItem>
              </Select>
              <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />

            {/* <TextField
              hintText="Enter your Country code "
              type="email"
              floatingLabelText="Country Code"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            /> */}
              {/* <InputLabel id="demo-controlled-open-select-label">Country Code</InputLabel> */}
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                // open={open}
                // onClose={handleClose}
                // onOpen={handleOpen}
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'+91'}>+91</MenuItem>
                <MenuItem value={'+971'}>+971</MenuItem>
                <MenuItem value={'+92'}>+92</MenuItem>
                <MenuItem value={'+1'}>+1</MenuItem>
              </Select>
             <TextField
              hintText="Enter your Mobile No "
              type="email"
              floatingLabelText="Mobile No"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />

            {/* <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
             
            />
            <br /> */}

          
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

  handleClick(event)
{
  var apiBaseUrl = "http://localhost:4000/api/";
  console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
  //To be done:check for empty values before hitting submit
  var self = this;
  var payload =
  {
    "first_name": this.state.first_name,
    "last_name": this.state.last_name,
    "email": this.state.email,  
    "password": this.state.password
  }
  axios.post(apiBaseUrl + '/register', payload)
    .then(function (response) {
      console.log(response);
      if (response.data.code === 200) {
        //  console.log("registration successfull");
        var loginscreen = [];
        loginscreen.push(<Login parentContext={this} />);
        var loginmessage = "Not Registered yet.Go to registration";
        self.props.parentContext.setState({
          loginscreen: loginscreen,
          loginmessage: loginmessage,
          buttonLabel: "Register",
          isLogin: true
        });
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
export default Register;





