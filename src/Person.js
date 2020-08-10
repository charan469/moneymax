import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import UploadScreen from './UploadScreen';
import axios from 'axios';
const initialState ={
  personId: '',
  personName: '',
  personEmail:'',
  personPassword:'',
  grade:'',
  personSection:'',
  gender:'',
  personStatus:'',
  jobType:''

}
class Person extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
     initialState,

    // buttonLabel: 'Utilization'

    }

  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Person Details"
            />
            <TextField
              hintText="Enter your PersonId"
              floatingLabelText="PersonId"
              onChange={(event, newValue) => this.setState({ personId: newValue })}
              value={this.state.personId}
            />
            <br />
            <TextField
              hintText="Enter your PersonName"
              floatingLabelText="PersonName"
              onChange={(event, newValue) => this.setState({ personName: newValue })}
              value={this.state.personName}
            />
            <br />
            <TextField
              hintText="Enter your personEmail"
              floatingLabelText="PersonEmail"
              onChange={(event, newValue) => this.setState({ personEmail: newValue })}
              value={this.state.personEmail}
              required
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your PersonPassword"
              floatingLabelText="PersonPassword"
              onChange={(event, newValue) => this.setState({ personPassword: newValue })}
              value={this.state.personPassword}
            />
            <br />
            <TextField
              hintText="Enter your Grade"
              floatingLabelText="Grade"
              onChange={(event, newValue) => this.setState({ grade: newValue })}
              value={this.state.grade}
            />
            <br />
            <TextField
              hintText="Enter your PersonSection"
              floatingLabelText="PersonSection"
              onChange={(event, newValue) => this.setState({ personSection: newValue })}
              value={this.state.personSection}
            />
            <br />
            <TextField
              hintText="Enter your Gender"
              floatingLabelText="Gender"
              onChange={(event, newValue) => this.setState({ gender: newValue })}
              value={this.state.gender}
            />
            <br />
            <TextField
              hintText="Enter your PersonStatus"
              floatingLabelText="PersonStatus"
              onChange={(event, newValue) => this.setState({ personStatus: newValue })}
              value={this.state.personStatus}
            />
            <br />
            <TextField
              hintText="Enter your JobType"
              floatingLabelText="JobType"
              onChange={(event, newValue) => this.setState({ jobType: newValue })}
              value={this.state.jobType}
            />
            <br />
            <RaisedButton label="Query" primary={true} style={style} onClick={(event) => this.handleQuery(event)} />
            <RaisedButton label="Create" primary={true} style={style} onClick={(event) => this.handleCreate(event)} />
             <RaisedButton label="Clear" primary={true} style={style} onClick={(event) => this.handleClear(event)} />
             <RaisedButton label="Delete" primary={true} style={style} onClick={(event) => this.handleDelete(event)} />
             <RaisedButton label="Update" primary={true} style={style} onClick={(event) => this.handleUpdate(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

  handleQuery(event)
{ 
  //"http://localhost:9094/utilization/get";
  var apiBaseUrl = "http://localhost:8080/Person-0.0.1-SNAPSHOT/person/find";
 // var apiBaseUrl = "http://localhost:9093/utilization/find";
  var self = this;
  var payload =
  {
    "personId":this.state.personId
    // "email": this.state.username,
    // "password": this.state.password
  }
  axios.post(apiBaseUrl, payload, {headers :{
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
}})
  //axios.post(apiBaseUrl, payload)
    .then(function (response) {
      console.log(JSON.stringify(response));
      if (response.status == 200) {
        console.log(response.data.status);
        self.setState(response.data);
        // var uploadScreen = [];
        // uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
        // self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
      }
      else if (response.status == 204) {
        console.log("Username password do not match");
        //alert("username password do not match")
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


handleCreate(event)
{ 
  //"http://localhost:9094/utilization/get";
  var apiBaseUrl = "http://localhost:8080/Person-0.0.1-SNAPSHOT/person/insert";
 // var apiBaseUrl = "http://localhost:9093/utilization/find";
  var self = this;
  var payload =
  {
    "personId":this.state.personId,
    "personName":this.state.personName,
    "personEmail":this.state.personEmail,
    "personPassword":this.state.personPassword,
    "grade":this.state.grade,
    "personSection":this.state.personSection,
    "gender":this.state.gender,
    "personStatus":this.state.personStatus,
    "jobType":this.state.jobType

    // "email": this.state.username,
    // "password": this.state.password
  }
  axios.post(apiBaseUrl, payload, {headers :{
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
}})
  //axios.post(apiBaseUrl, payload)
    .then(function (response) {
      console.log(JSON.stringify(response));
      if (response.status == 200) {
        console.log(response.data.status);
        self.setState(response.data);
        // var uploadScreen = [];
        // uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
        // self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
      }
      else if (response.status == 204) {
        console.log("Username password do not match");
        //alert("username password do not match")
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
handleClear(event)
{
    
    this.state={initialState};

}
handleDelete(event)
{ 
  //"http://localhost:9094/utilization/get";
  var apiBaseUrl = "http://localhost:8080/Person-0.0.1-SNAPSHOT/person/delete";
 // var apiBaseUrl = "http://localhost:9093/utilization/find";
  var self = this;
  var payload =
  {
    "personId":this.state.personId

    // "email": this.state.username,
    // "password": this.state.password
  }
  axios.post(apiBaseUrl, payload, {headers :{
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
}})
  //axios.post(apiBaseUrl, payload)
    .then(function (response) {
      console.log(JSON.stringify(response));
      if (response.status == 200) {
        console.log(response.data.status);
        self.setState(response.data);
        // var uploadScreen = [];
        // uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
        // self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
      }
      else if (response.status == 204) {
        console.log("Username password do not match");
        //alert("username password do not match")
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
handleUpdate(event)
{ 
  //"http://localhost:9094/utilization/get";
  var apiBaseUrl = "http://localhost:8080/Person-0.0.1-SNAPSHOT/person/update";
 // var apiBaseUrl = "http://localhost:9093/utilization/find";
  var self = this;
  var payload =
  {
    "personId":this.state.personId,
    "personName":this.state.personName,
    "personEmail":this.state.personEmail,
    "personPassword":this.state.personPassword,
    "grade":this.state.grade,
    "personSection":this.state.personSection,
    "gender":this.state.gender,
    "personStatus":this.state.personStatus,
    "jobType":this.state.jobType

    // "email": this.state.username,
    // "password": this.state.password
  }
  axios.post(apiBaseUrl, payload, {headers :{
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
}})
  //axios.post(apiBaseUrl, payload)
    .then(function (response) {
      console.log(JSON.stringify(response));
      if (response.status == 200) {
        console.log(response.data.status);
        self.setState(response.data);
        // var uploadScreen = [];
        // uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
        // self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
      }
      else if (response.status == 204) {
        console.log("Username password do not match");
        //alert("username password do not match")
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
export default Person;

