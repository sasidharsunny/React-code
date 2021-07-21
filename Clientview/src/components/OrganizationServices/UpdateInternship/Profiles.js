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
    //console.log(this.industry);
   }) 
   .catch()

   axios.get("http://localhost:5000/category").then((res)=>{
    this.setState({category: res.data})
   // console.log(this.category);
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

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const preFilled = JSON.parse(localStorage.getItem('Stepper'))
    const { values, inputChange } = this.props;
    const {industry,  category}=this.state

    return (
      <div className="form-container">
        <h4 className="mb-3">2nd step</h4>
       
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
                      <option value="">{preFilled.industry}</option>
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
                      <option value="">{preFilled.category}</option>
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
