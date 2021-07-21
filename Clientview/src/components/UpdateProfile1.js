import React, { Component } from 'react';
import './registform.css'
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Header from '../components/header'

const data = {
    "Student": [
      { id: '', text: 'Select' },
      { id: 'Internship', text: 'Internship' },
      { id: 'Projects', text: 'Projects' },
      { id: 'Workshop', text: 'Workshop' },
      { id: 'Seminars', text: 'Seminars' }
    ],
    "Organization": [
      { id: '', text: 'Select' },
      { id: 'Internship', text: 'Internship' },
      { id: 'Technical Support', text: 'Technical Support' },
      { id: 'Workshop', text: 'Workshop' },
      { id: 'Seminars', text: 'Seminars' },
      { id: 'JobPosting', text: 'JobPosting' }
    ],
    "Individual": [
      { id: '', text: 'Select' },
      { id: 'Internship', text: 'Internship' },
      { id: 'Technical Support', text: 'Technical Support' },
      { id: 'Workshop', text: 'Workshop' },
      { id: 'Seminars', text: 'Seminars' }
    ]
  }









class UpdateProfile extends Component {

    constructor(props){
        super(props)

        this.state = {
            showField: false,
            showField1:false,
            showField2:false,
            dataValue: this.state,
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            password:"",
        confirm_password:"",
        qualification:"",
        skills:"",
        university:"",
        location:"",
        role:"",
        interest:"",
       
        formErrors: {}   
        
          }
          this.handleSubmit=this.handleSubmit.bind(this)
       }


       handleFormValidation() {    
        const { firstname, email, phone,password, confirm_password,lastname,interest,skills,qualification} = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!firstname) {    
            formIsValid = false;    
            formErrors["firstNameErr"] = "Name is required.";    
        }    
        if (!skills) {    
          formIsValid = false;    
          formErrors["skillsErr"] = "skills are required.";    
      }    

      if (!lastname) {    
        formIsValid = false;    
        formErrors["lastnameErr"] = " Last Name is required.";    
    }   

    if (!interest) {    
      formIsValid = false;    
      formErrors["interestErr"] = " Please select your interest";    
  }  

  if (!qualification) {    
    formIsValid = false;    
    formErrors["qualificationErr"] = " Please select your qualification";    
}  
      if (!password) {    
        formIsValid = false;    
        formErrors["passwordErr"] = " password is required.";    
    }    
    else if ( password.trim().length < 6) {
      formErrors["passwordErr"]   = "password must be atleast 6 characters";
      formIsValid = false; 
    }






    if (!confirm_password) {    
      formIsValid = false;    
      formErrors["confirm_passwordErr"] = " confirm password is required";    
  }    
  if ( password != confirm_password) {
    formErrors["confirm_passwordErr"]  = "confirm password must match with password";
    formIsValid = false; 
 }

        //Email    
        if (!email) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
    
        //DOB    
       
    
 
    
        //Phone number    
        if (!phone) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phone)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
        //City    
  
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    

   
    handleChange = (e) => {    
      const { name, value } = e.target;    
      this.setState({ [name]: value });    
  }  


















       
         Onchange=({ target: { value} }) => {
            this.setState({ 
              showField: value === "Organization",
              showField1: value === "Student",
              showField2: value === "Individual",
              dataValue: value
             });
          }


          firsthandler = (event) => {
            this.setState({
                firstname: event.target.value
            })
        }
        lasthandler = (event) => {
            this.setState({
                lastname: event.target.value
            })
        }
    
        phonehandler =(event)=>{
            this.setState({
                phone: event.target.value
    
            })
        }
    
        emailhandler=(event)=>{
            this.setState({
                email:event.target.value
            })
        }
        passwordhandler = (event) => {
            this.setState({
                password: event.target.value
            })
        }
    
        confirmpasswordhandler = (event) => {
            this.setState({
              confirm_password : event.target.value
            })
        }
    
        qualificationhandler = (event) => {
            this.setState({
              qualification : event.target.value
            })
        }

        skillshandler = (event) => {
            this.setState({
              skills : event.target.value
            })
        }

        universityhandler = (event) => {
            this.setState({
              university : event.target.value
            })
        }

        locationhandler = (event) => {
            this.setState({
              location : event.target.value
            })
        }

        rolehandler = (event) => {
            this.setState({
              role : event.target.value
            })
        }

        interesthandler = (event) => {
            this.setState({
              interest : event.target.value
            })
        }
    
//validation 

    handleSubmit = (event) => {

      
      if (this.handleFormValidation()) {    
        alert('You have been successfully registered.')    
        this.setState(this.initialState)    
    }  
event.preventDefault()
const { firstname,
    lastname,
    email,
    phone,
    password, 
    confirm_password,
    qualification,
    skills,
    university,
    location,
  role,
  interest
    
}=this.state

const data= {
    firstname,
    lastname,
    email,
    phone,
    password, 
    confirm_password,
    qualification,
    skills,
    university,
    location,
  role,
  interest
    }

console.log("data is",this.state)

axios.post("http://localhost:5000/register",data).then((response) => {
    console.log(response);
  if(response.status === 400){
    alert("email already exists");
  }
  else
    alert("successfully registered");
    return Redirect('/Login')
  });  

}  
 

render() {
  const { firstNameErr,lastnameErr, emailIdErr,qualificationErr, passwordErr,confirm_passwordErr,phoneNumberErr,skillsErr,interestErr} = this.state.formErrors;    

//console.log(this.state)
        const { dataValue,showField, showField1,showField2} = this.state;
        const options = data[dataValue];
 return (
            <div>
<Header/>
<div>
  <div class="register">
<div class="container">

<div class="row">
<div class="col-md-12 ml-auto mr-auto">
<h2 class="text-center mb-4"><div class="border-style"></div>Update Your <span class="text-blue">Profile </span>  </h2>
</div>
</div>
<form onSubmit={this.handleSubmit}>
<div class="row">
<div class="col-md-6 col-md-offset-6 ml-auto mr-auto"  id="login-box">
<div class="row">
<div class="col-md-12">
<div class="form-group">
<label>First Name</label>
<input type="text" name="firstNameErr"  value={this.state.value}  onChange={this.firsthandler} class="form-control"  placeholder="First Name"className={firstNameErr ? ' showError' : ''} />
<div style={{ color: "red", paddingBottom: 10 }}>{firstNameErr}</div>    
</div>
{/* <div class="form-group">
<label>Email</label>
<input type="email" name="emailIdErr" value={this.state.value} onChange={this.emailhandler} class="form-control" id=""  placeholder="Enter email"className={emailIdErr ? ' showError' : ''} />
<div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div> 


</div> */}
{/* <div class="form-group">
<label>Password</label>
<input type="password" name="passwordErr" value={this.state.value} onChange={this.passwordhandler} class="form-control" id="exampleInputPassword1" placeholder="Password" className={passwordErr ? ' showError' : ''} />
<div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>   

</div> */}
</div>
<div class="col-md-12">
<div class="form-group">
<label>Last Name</label>
<input type="text" name="lastnameErr" value={this.state.value} onChange={this.lasthandler} class="form-control" id="exampleInputPassword1" placeholder="Lastname"className={lastnameErr ? ' showError' : ''} />
<div style={{ color: "red", paddingBottom: 10 }}>{lastnameErr}</div>   

</div>
<div class="form-group">
<label>Phone Number</label>
<input type="number" name="phoneNumberErr" value={this.state.value} onChange={this.phonehandler} class="form-control" id="exampleInputEmail1" aria-describedby="Phone Number" placeholder="phone number" className={phoneNumberErr ? ' showError' : ''} />
{phoneNumberErr &&  <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>}  

</div>
{/* <div class="form-group">
<label>Re-Type Password</label>
<input type="password" name="confirm_passwordErr" value={this.state.value} onChange={this.confirmpasswordhandler} class="form-control" id="exampleInputPassword1" placeholder="Re-Type password" className={confirm_passwordErr ? ' showError' : ''} />
{confirm_passwordErr &&  <div style={{ color: "red", paddingBottom: 10 }}>{confirm_passwordErr}</div>} 



</div> */}
</div>
</div>

<div class="row">
    <div class="col-md-12"> 


    <div>
             <label>Are You:</label>
        <select name="roleErr" onChange={this.Onchange} value={this.state.value}>
          <option  value ="" >--Select--</option>
          <option  value="Student">Organization</option>
          <option  value="Organization">student</option>
          <option  value="Individual" >Individual</option>
      
        </select>
        {/* <div style={{ color: "red", paddingBottom: 10 }}>{roleErr}</div>    */}
    
        
        { showField ? (
      
      <div> 
   
      <label>Looking For:</label>
  
     <select  value={this.state.value} onChange={this.interesthandler} className={interestErr ? ' showError' : ''}   >
     {options && options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
 </select>
 <div style={{ color: "red", paddingBottom: 10 }}>{interestErr}</div> 
 
       <label>Qualification</label>
       <select name="qualificationErr" value={this.state.value} onChange={this.qualificationhandler} >
             <option value="BSC">BSC</option>
             <option value="BTech">BTech</option>
             <option value="MTech">MTech</option>
             <option value="Degree">Degree</option>
             <option value="MSC">MSC</option>
       </select>
       <div style={{ color: "red", paddingBottom: 10 }}>{qualificationErr}</div> 
       <br/>
       <br/>
       <div class="row">
         <div class="col-6">
     <input type ="text" name="University" value={this.state.value} onChange={this.universityhandler} id="University"placeholder="University" style={{width:'200px'}}/><br/><br/>
       
             
            
    
    
     </div>

     <div class="col-6">

     <input type ="text" name="Location" value={this.state.value} onChange={this.locationhandler} id="Location"placeholder="Location" style={{width:'200px'}}/>
     </div>
     </div>
     </div>
) : null }
       <br/>
       { showField1 ? (
         
         <div> 
 <label>Looking For:</label>

         <select name="interest"  value={this.state.value} onChange={this.interesthandler}className={interestErr ? ' showError' : ''} >
          {options && options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
        </select>

        <div style={{ color: "red", paddingBottom: 10 }}>{interestErr}</div> 
    <br/><br/>

    
    <input type ="text" name="Location" value={this.state.value} onChange={this.locationhandler} id="Location" placeholder="Location" style={{width:'200px'}}/>
   </div>
          ) : null } 
          
          { showField2 ? (
          <div> 
             <label >Looking For:</label>
              <select  value={this.state.value} onChange={this.interesthandler} className={interestErr ? ' showError' : ''}>
  
       {options && options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
  
    </select>
    <div style={{ color: "red", paddingBottom: 10 }}>{interestErr}</div> 
        <br/>
        <br/>
               <div class="row">
                 <div class="col-6">
              <input type ="text" name="Skills" value={this.state.skills} onChange={this.skillshandler} id="Skills"placeholder="Skill Set"className={skillsErr ? ' showError' : ''}   style={{width:'200px'}}/><br/><br/>
             
              <div style={{ color: "red", paddingBottom: 10 }}>{skillsErr}</div>    
             
              </div>

              <div class="col-6">
          
          <input type ="text" name="Location" value={this.state.location} onChange={this.locationhandler} id="Location"placeholder="Location" style={{width:'200px'}}/>
          </div>
            </div>
            </div>
          ) : null }

        </div>
<br/>

</div>


</div>








{/* 

<div class="row">
<div class="col-md-6">

</div>
<div class="col-md-6">
<div id="register-link" class="text-right">
  <Link to="/signin">
	<a href="signin.html" class="text-black">Signin here</a>
  </Link>
</div>
</div>
</div> */}
<div class="form-group">
<input type="submit" value="Submit" id="submit" class="btn btn-primary btn-lg" style={{ backgroundColor: '#2D4988', color: 'white',}} /><br/>
    
</div>
</div>
</div>
</form>
</div>
</div>


</div>
{/* 
<div class="hiring bg">
<div class="container">
<div class="row">
<div class="col-md-9 col-md-offset-3 ml-auto mr-auto">
<div class="row">
<div class="col-md-8 mt-4">
<h2>Every 8 seconds, someone is hired with LinkedIn</h2>
<p class="pt-2">Post your job on the world’s largest professional network and get matched with the most qualified candidates for your role.</p>
</div>
<div class="col-md-4">
<img src="https://bizguide.vegas/wp-content/uploads/sites/43/2019/10/Post-Job-Opening.png" class="img-fluid"/>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="how-works  pt-5 pb-5">
<div class="container">
<div class="row">
<div class="col-md-12">
<h1 class="text-center mb-5">How does it work?</h1>
</div>
</div>
<div class="row">

<div class="col-md-6">
<h2>Post your job</h2>
<p class="mt-3"><b>Get your job description just right</b> using prepopulated templates for over 130 of LinkedIn’s most popular job titles.</p>
<p><b>Screen for qualified applicants</b>  by adding required questions to the job application.</p>
<div class="media">
  <span class="percentage">80%</span>
  <div class="media-body">
    <p>of jobs with screening questions get a qualified applicant within a day.</p>
  </div>
</div>
</div>
<div class="col-md-6">
<img src="https://static-exp1.licdn.com/sc/h/a7ko494kxu5j9hb6ec6o31bn9" class="img-fluid"/>
</div>

</div>
</div>
</div>
 */}

{/* 
<div class="how-works pt-5 pb-5">
<div class="container">
<div class="row">

<div class="col-md-6">
<img src="https://static-exp1.licdn.com/sc/h/44at2zxu7o4s5nsaq5sqx79dq" class="img-fluid"/>
</div>
<div class="col-md-6">
<h2>Target relevant candidates</h2>
<p class="mt-3"><b>Put your job in front of the right people</b> through promoted search results, email and text alerts, and more.</p>
<p><b>Get instant recommended matches</b> of people who haven’t applied, but would be a good fit for your role.</p>
<div class="media">
  <span class="percentage">25M+</span>
  <div class="media-body">
    <p>professionals view and apply to jobs on LinkedIn every week.</p>
  </div>
</div>
</div>

</div>
</div>
</div>



<div class="how-works pt-5 pb-5">
<div class="container">
<div class="row">

<div class="col-md-6">
<h2>Find the person you want to hire</h2>
<p class="mt-3"><b>Filter for the most qualified applicants</b> based on the criteria that matters, such as experience and location.</p>
<p><b>Automatically reject applicants</b>  who don’t meet your needs, so that every applicant hears back from you.</p>
<div class="media">
  <span class="percentage">#1</span>
  <div class="media-body">
    <p class="pt-4">rated by customers in delivering quality hires.</p>
  </div>
</div>
</div>
<div class="col-md-6">
<img src="https://static-exp1.licdn.com/sc/h/99jz63jef4fn37c5i6hehyszd" class="img-fluid"/>
</div>

</div>
</div>
</div>

<div class="bg1 pt-5 pb-5">
<div class="container">
<div class="row">
<div class="col-md-12">
<h2 class="mb-5 text-center">You control how much you want to spend</h2>
</div>
</div>
<div class="row">
<div class="col-md-4 text-center">
<h4>Choose your budget</h4>
<p>You can adjust your spending or close your job at any time.</p>
</div>
<div class="col-md-4 text-center">
<h4>Receive more applicants</h4>
<p>Pay to promote your job post to relevant candidates across LinkedIn.</p>
</div>
<div class="col-md-4 text-center">
<h4>Only pay for results</h4>
<p>Your budget is only used when someone clicks on your job post.</p>
</div>
</div>
</div>
</div>
 */}

<div class="bg-light ">
         <div class= "text-center">
             <p class="mb-0 py-2" style={{textAlign:"center",color:"white",backgroundColor:"#0e425f"}}>Copyright © 2021 Albenus All Rights Reserved.</p>
         </div>
     </div>


















            </div>

         
        );

    }
}

export default UpdateProfile;