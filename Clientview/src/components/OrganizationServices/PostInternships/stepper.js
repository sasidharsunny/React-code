import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Profiles from './Profiles';
import Confirm from './Confirm';
import Success from './Success';
import './Stepper.css';


export class Stepper extends Component {
    state = {
        step: 1,
        title: '',
        job_function: '',
        blog:'',
        duration: '',
        fee: '',
        start_date: '',
        end_date: '',
        city: '',
        state: '',
        industry:'',
        category:'',
        Image_Url:'',
    };

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
        const info = JSON.parse(localStorage.getItem('jwt'))
        const organizationID =  info.user._id;
       const  organizationEmail = info.user.email;
        const { step } = this.state;
        const { title, job_function,blog,  duration, fee, start_date, end_date, skillset, city, state,industry,category,Image_Url} = this.state;
        const values = {  title, job_function,blog,  duration, fee, start_date, end_date, skillset,  city, state,industry,category,Image_Url,organizationID,organizationEmail};

        switch (step) {
            case 1:
                return (
                    <div>
                
                    <AccountSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                    </div>
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
                    <Success />
                );
        }
    }
}

export default Stepper
