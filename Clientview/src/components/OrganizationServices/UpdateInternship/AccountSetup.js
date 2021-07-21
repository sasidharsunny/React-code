import React, { Component } from "react";
import axios from 'axios';
import {
  Box,

  TextField,
  Typography,
} from "@material-ui/core";




export class AccountSetup extends Component {
  constructor(props) {
    
    super(props);
    
    this.state = {
      dataError: "",
      jobfunction:[],
    };
  }
  
  componentDidMount()
{
  axios.get(`http://localhost:5000/jobfunction`).then((res)=>{
    // jobs= [res.data];
   
    this.setState({jobfunction: res.data})
  // console.log(this.jobfunction);
   }) 
   .catch()

   
}
inputChange = event => {
  this.setState(
  {
  [event.target.name]: event.target.value,
  }
  );
  };
 
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const preFilled = JSON.parse(localStorage.getItem('Stepper'))
    //const {jobs}=this.state
    const { values, inputChange } = this.props;

    return (
      <div className="form-container">
        <h4 className="mb-3">Enter Details</h4>
       
        <br/>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={inputChange("title")}
            value={values.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="job_function">Jobfunction</label>

          <select name="Job_function" id="job_function" value={this.job_function} onChange={inputChange("job_function")}  >
                      <option value="">{preFilled.job_function}</option>
                      {this.state.jobfunction.map(jobfunction => (
  <option key={jobfunction} value={jobfunction}>
    {jobfunction}
  </option>
))}
                    </select>
        </div>
        <div className="form-group">
          <label htmlFor="blog">Description</label>
          <input
            type="text"
            className="form-control"
            name="blog"
            onChange={inputChange("blog")}
            value={values.blog}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fee">Fee</label>
          <input
            type="text"
            className="form-control"
            name="fee"
            onChange={inputChange("fee")}
            value={values.fee}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="city"
            className="form-control"
            name="city"
            onChange={inputChange("city")}
            value={values.city}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="state"
            className="form-control"
            name="state"
            onChange={inputChange("state")}
            value={values.state}
          />
        </div>

        <br />

        <div className="text-right">
          <button className="btn btn-primary" onClick={this.continue}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default AccountSetup;
