import React, { Component } from "react";
import axios from 'axios';

export class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataError: "",
      industry:[],
      category:[],
    };
  }
 componentDidMount()
{
   axios.get("http://localhost:5000/industry").then((res)=>{
    this.setState({industry: res.data})
    console.log(this.industry);
   }) 
   .catch()

   axios.get("http://localhost:5000/category").then((res)=>{
    this.setState({category: res.data})
    console.log(this.category);
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
    const {
      values: { start_date, end_date, industry, duration,skill, category, Image_Url },
    } = this.props;
    let dataValid = true;
    /**do validations hete */
    if (start_date == null || start_date == "") {
      console.log("stattdate is empty or null");
      this.state.dataError = "startdate shoud not be empty or null";
      dataValid = false;
    } else if (end_date == null || end_date == "") {
      console.log("enddate is empty or null");
      this.state.dataError = "enddate shoud not be empty or null";
      dataValid = false;
      } else if (start_date > end_date ||  "") {
      console.log("start_date shoud not be greather than end_date");
      this.state.dataError = "start_date shoud not be greather than end_date ";
      dataValid = false;
      
    } else if (industry == null || industry == "") {
      console.log("industry is empty or null");
      this.state.dataError = "industry shoud not be empty or null";
      dataValid = false;
    } else if (duration == null || duration == "") {
      console.log("duration is empty or null");
      this.state.dataError = "duration shoud not be empty or null";
      dataValid = false;
    } else if   (skill ==null || skill == "") {
      console.log("skill is empty or null");
      this.state.dataError = "skill shoud not be empty or null";
      dataValid = false;
    } else if (category == null || category == "") {
      console.log("category is empty or null");
      this.state.dataError = "category shoud not be empty or null";
      dataValid = false;
    } else if (Image_Url == null || Image_Url == "") {
      console.log("imageurl is empty or null");
      this.state.dataError = "imageurl shoud not be empty or null";
      dataValid = false;
    } else if (dataValid) {
      this.props.nextStep();
    }

    this.setState({
      update: true,
    });
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, inputChange } = this.props;
    const {industry,  category}=this.state

    return (
      <div className="form-container">
        <h4 className="mb-3">2nd step</h4>
        <error htmlFor="dataError" color="red">
          {this.state.dataError}
        </error>
        <div className="form-group">
          <label htmlFor="start_date">Startdate</label>
          <input
            type="date"
            className="form-control"
            name="start_date"
            onChange={inputChange("start_date")}
            value={values.start_date}
          />
        </div>
        <div className="form-group">
          <label htmlFor="end_date">Enddate</label>
          <input
            type="date"
            className="form-control"
            name="end_date"
            onChange={inputChange("end_date")}
            value={values.end_date}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="industry">Industry</label>
          <select name="industry" id="industry" value={this.industry} onChange={inputChange("industry")}  >
                      <option value="">industry</option>
                      {this.state.industry.map(industry => (
  <option key={industry} value={industry}>
    {industry}
  </option>
))}
                    </select>
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            className="form-control"
            name="duration"
            onChange={inputChange("duration")}
            value={values.duration}
          />
        </div>
        <div className="form-group">
          <label htmlFor="skillset">skillset</label>
          <input
            type="text"
            className="form-control"
            name="skillset"
            onChange={inputChange("skillset")}
            value={values.skillset}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select name=" category" id=" category" value={this.category} onChange={inputChange("category")}  >
                      <option value="">category</option>
                      {this.state.category.map( category => (
  <option key={category} value={category}>
    {category}
  </option>
))}
                    </select>
        </div>
        <div className="form-group">
          <label htmlFor="Image_Url">Image</label>
          <input
            type="file"
            className="form-control"
            name="Image_Url"
            onChange={inputChange("Image_Url")}
            value={values.Image_Url}
          />
        </div>

        <br />

        <div className="row">
          <div className="col-6">
            <button className="btn btn-danger" onClick={this.back}>
              Back
            </button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary" onClick={this.continue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
