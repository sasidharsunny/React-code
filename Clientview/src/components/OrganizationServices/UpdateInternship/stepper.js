import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Profiles from './Profiles';
import Confirm from './Confirm';
import './Stepper.css';
import axios from 'axios';
import OrganizationDashboard from '../Organizationdashboard'

export class Stepper extends Component {
    constructor(props){
        const preFilled = JSON.parse(localStorage.getItem('Stepper'))
        super(props)
        this.state = {
            step: 1,
            _id: preFilled._id,
            title: preFilled.title,
            job_function: preFilled.job_function,
            blog: preFilled.blog,
            duration: preFilled.duration,
            fee: preFilled.fee,
            skillset: preFilled.skillset,
            start_date: preFilled.start_date,
            end_date: preFilled.end_date,
            city: preFilled.city,
            state: preFilled.state,
            industry: preFilled.industry,
            category: preFilled.category,
            Image_Url: '',
        };
    }
    
    componentDidMount(){
        
        const preFilled = JSON.parse(localStorage.getItem('Stepper'))
        console.log("Pre-Filled", preFilled)
    //const id = this.props.location.id;
   // console.log("ID",id)
     
}

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
     
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

   
    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
          
     
        const { step } = this.state;
        const { _id, title, job_function,blog,  duration, fee, start_date, end_date, skillset, city, state,industry,category,Image_Url} = this.state;
        const values = { _id, title, job_function,blog,  duration, fee, start_date, end_date, skillset,  city, state,industry,category,Image_Url};
     
        switch (step) {
            case 1:
                return (
                    <AccountSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Profiles
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return (
                    <OrganizationDashboard />
                );
        }
    }
}

export default Stepper
