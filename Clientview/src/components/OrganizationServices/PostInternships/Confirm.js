import React, { Component } from 'react';
import './Stepper.css';
import axios from 'axios';

export class Confirm extends Component {
    
    continue = ()=> {
       
        const data = this.props.values;
   
      console.log("full details",data);
              axios.post("http://localhost:5000/internship/post",data).then((response) => {
                                console.log(response);
                             if(response.status === 400){
                              alert("Something Wrong");
                              }
                             else
                             {
                                this.props.nextStep();  
                             }
                             // alert("successfully Posted");
            //                    // window.location.reload();
            //                   //return Redirect('/Companydashboard')
                            });  



      //  this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        
        const {
            values: { title, job_function,blog, fee, city,state,duration,start_date, end_date,  industry,skillset,category,Image_Url,organizationEmail,organizationID}
        } = this.props;
       
        return (
            <div className="form-container">
                <h4 className="mb-2">Confirmation</h4>
                <ul class="list-group">
                    <li class="list-group-item">Title: {title}</li>
                    <li class="list-group-item">Jobfunction: {job_function}</li>
                    <li class="list-group-item">Description: {blog}</li>
                    <li class="list-group-item">Fee: {fee}</li>
                    <li class="list-group-item">City: {city}</li>
                    <li class="list-group-item">State: {state}</li>
                    <li class="list-group-item">Duration: {duration}</li>
                    <li class="list-group-item">Industry: {industry}</li>
                    <li class="list-group-item">Skillset: {skillset}</li>
                    <li class="list-group-item">Startdate: {start_date}</li>
                    <li class="list-group-item">Enddate: {end_date}</li>
                    <li class="list-group-item">Category: {category}</li>
                    <li class="list-group-item">Imageurl: {Image_Url}</li>
                    
                </ul>

                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm
