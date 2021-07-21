import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import styled from "styled-components";
import GoogleAuth from '../components/landing/Landing'
import Header from '../components/header'
import {  authenticate} from './auth';
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../components/auth";
import Footer from './footer1'
const Group = styled.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.0rem;
  font-weight: 700;
  color: red;
`;

function Login(){
  let history = useHistory();
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error, setError] = useState("");
const [emailErr,setemailErr] = useState("");
 const [passwordErr,setpasswordErr] = useState("");
const [values, setValues] = useState({
  redirectToReferrer : false
});

const formValidation =()=>{
  let isValid = true;
  const emailErr ={};
  const passwordErr ={};

  if ( email === "") {
    emailErr.lastNameRequired = "email is required";
       isValid = false;
       }
  if ( password === "") {
    passwordErr.lastNameRequired = "password is required";
         isValid = false;
   }

   
   setemailErr(emailErr);
   setpasswordErr(passwordErr);

return isValid;

}

const handleSubmit = (event) =>{
  event.preventDefault();
  const isValid = formValidation()
  setError("");
  if ( email === "") {
    console.log("Please enter email");
  }
  else if(password === ""){
    console.log("enter password");
  }
  else{ 
  const data= {
    email,
    password,
  }
     axios.post("http://localhost:5000/login",data).then((response) => {
          console.log("Data",response)
          if(response.status === 401)
          {
            alert("Invalid User")
          }
          else if(response.data.success === false) {
            alert("Account not verified. Please check your mail.")
          }
          else{   
            authenticate(response.data, () => {
              setValues({
                  redirectToReferrer: true
              });
          }); 
            {isAuthenticated() && isAuthenticated().user.role === 'Student' && (
            history.push("/StudentDashboard")
            )}
            {isAuthenticated() && isAuthenticated().user.role === 'Organization' && (
              history.push("/CompanyDashboard")
              )}
          }
          });         
        }   
}
return(
    <div>
            <Header/>


  <div class="signin">
<div class="container">
<div class="row">
<div class="col-md-12 ml-auto mr-auto">
<h2 class="text-center mb-4">SignIn to start your <span class="text-blue">Career</span></h2>
</div>
</div>

<div id="login">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-5">
                    <div id="login-box" class="col-md-12">
                        <form onSubmit={handleSubmit}>
                           
                            <div class="form-group">
                                <label for="email" class="text-black">Email Address:</label><br/>
                                <input type="text" name="email"value={email} onChange={(e)=>setEmail(e.target.value)} id="email" class="form-control"/>
                                {Object.keys(emailErr).map((key)=>{
                return <div style={{color: "red"}}>{emailErr[key]}</div>
              })}
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-black">Password:</label><br/>
                                <input type="password" name="password"value={password} onChange={(e)=>setPassword(e.target.value)} id="password" class="form-control"/>
                                {Object.keys(passwordErr).map((key)=>{
                return <div style={{color: "red"}}>{passwordErr[key]}</div>
              })}
               </div>

                            {error ? (
                        <Group>
                         <ErrorMessage>{error}</ErrorMessage>
                       </Group>
                        ) : null}
							<div class="row">
							<div class="col-md-12">
 
                            <div id="register-link">
                                
                            <p>Have an account?</p>                  
        
        <Link to="/join">
   <a  class="text-black">Register here</a>
        </Link>
          </div>
							</div>
							</div>

 <div class="row d-flex mb-3">
  <div class="col-md-12">
	<div>
						<span><Link to='/Forgotpassword'>Forgot Password?</Link></span> 	or login with 
						</div>
            </div>
             </div>			
					 <div class="row mb-3">
							<div class="col-12">
              <div ><GoogleAuth /></div>
							</div>
             </div>
							
							<div class="form-group">
							<input type="submit" value="Login" id="submit" class="btn btn-primary btn-lg" style={{ backgroundColor: '#2D4988', color: 'white',}} /><br/>
							</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

</div>


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

<Footer/>
 </div>
  )
}

export default Login