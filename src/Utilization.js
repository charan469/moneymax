import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
 import Login from './Login';
 import Person from './Person';
import axios from 'axios';

class Utilization extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      personId: '',
      personMonth: '',
      personYear: '',
      waterUtilized: '',
      electricityUtilized:'',
      updateDate:''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Utilization Details"
            />
            <TextField
              hintText="Enter PersonId"
              floatingLabelText="PersonId"
              onChange={(event, newValue) => this.setState({ personId: newValue })}
              value={this.state.personId}
            />
            <br />
            <TextField
              hintText="Enter PersonMonth"
              floatingLabelText="PersonMonth"
              onChange={(event, newValue) => this.setState({ personMonth: newValue })}
              value={this.state.personMonth}
            />
            <br />
            <TextField
              hintText="Enter PersonYear"
              floatingLabelText="PersonYear"
              onChange={(event, newValue) => this.setState({ personYear: newValue })}
              value={this.state.personYear}
            />
            <br />
            <TextField
              hintText="Enter WaterUtilized"
              floatingLabelText="WaterUtilized"
              onChange={(event, newValue) => this.setState({ waterUtilized: newValue })}
              value={this.state.waterUtilized}
            />
            <br />
            <TextField
              hintText="Enter ElectricityUtilized"
              floatingLabelText="ElectricityUtilized"
              onChange={(event, newValue) => this.setState({ electricityUtilized: newValue })}
              value={this.state.electricityUtilized}
            />
            <br />
            <TextField
              hintText="Enter UpdateDate"
              floatingLabelText="UpdateDate"
              onChange={(event, newValue) => this.setState({ updateDate: newValue })}
              value={this.state.updateDate}
            />
            <br />


            {/* <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
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
        var loginmessage = "Person Utilization Details";
        self.props.parentContext.setState({
          loginscreen: loginscreen,
          loginmessage: loginmessage,
          buttonLabel: "Utilization",
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
export default Utilization; */}


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
  var apiBaseUrl = "http://localhost:8080/Person-0.0.1-SNAPSHOT/utilization/find";
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
  var apiBaseUrl = "http://localhost:8080/Person-0.0.1-SNAPSHOT/utilization/insert";
 // var apiBaseUrl = "http://localhost:9093/utilization/find";
  var self = this;
  var payload =
  {
    "personId":this.state.personId,
    "personMonth":this.state.personMonth,
    "personYear":this.state.personYear,
    "waterUtilized":this.state.waterUtilized,
    "electricityUtilized":this.state.electricityUtilized,
    "updateDate":this.state.updateDate
    

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
    
    this.state={};

}
handleDelete(event)
{ 
  //"http://localhost:9094/utilization/get";
  var apiBaseUrl = "http://localhost:8080/Person-0.0.1-SNAPSHOT/utilized/delete";
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
  var apiBaseUrl = "http://localhost:8080/Person-0.0.1-SNAPSHOT/utilization/update";
 // var apiBaseUrl = "http://localhost:9093/utilization/find";
  var self = this;
  var payload =
  {
    "personId":this.state.personId,
    "personMonth":this.state.personMonth,
    "personYear":this.state.personYear,
    "waterUtilized":this.state.waterUtilized,
    "electricityUtilized":this.state.electricityUtilized,
    "updateDate":this.state.updateDate
   

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
export default Utilization;






