import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "./otp.css"
import Header from '../components/header'











function Otp(){

const [otp,setOtp]=useState("");
let history = useHistory()
const [otpErr,setotpErr] = useState("");


const formValidation =()=>{
  
	let isValid = true;
	const otpErr ={};
	
  
	if ( otp === "") {
	  otpErr.lastNameRequired = "Enter valid otp";
		 isValid = false;
		 }
  
  
	 
	 setotpErr(otpErr);
	 
  
  
	 return isValid;
  
	}
  













const email = localStorage.getItem("userEmail")

const handleSubmit = (event) =>{
	const isValid = formValidation()
  event.preventDefault();

 const data ={
     email: email,
     otp: otp
 }
    axios.post("http://localhost:5000/verify-otp",data).then((response) => {
          if(response.data.success == true){
          alert(response.data.message);  
          history.push("/Changepassword")
          }
          else{
            alert(response.data.message);
            history.push("/Otp")
          }
        });      
  }
 return(
    <div >
<Header/>
<div class="container">
		<div class="row">
			<div class="col-lg-12 form-block px-4">
			<div class="col-md-6 col-md-offset-6 col-xs-12 form-box ml-auto mr-auto">
					
					<h4 class="text-left mb-4">
						OTP Verification
					</h4>
					<form onSubmit={handleSubmit}>
						<div class="form-input">
<input type="email" name="email" name="otp" value={otp} style={{width:"350px"}} onChange={(e)=>setOtp(e.target.value)} placeholder="OTP" tabindex="10"required/>
			
{Object.keys(otpErr).map((key)=>{
                return <div style={{color: "red"}}>{otpErr[key]}</div>
              })}
						
						</div>
				
        

						<div class="mb-3"> 
						<input type="submit" value="sent link" id="Login" style={{width:"350px",backgroundColor:"blue"}}/>
							</div>
                         </form>
				</div>
			</div>

			
		</div>
	</div>

</div>

  )
}

export default Otp