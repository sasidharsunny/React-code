import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "./forgotpassword.css"
import Header from '../components/header'

function Forgotpassword(){
const [email,setEmail] = useState("");
const [emailErr,setemailErr] = useState("");
let history = useHistory()



const formValidation =()=>{
  
  let isValid = true;
  const emailErr ={};
  

  if ( email === "") {
    emailErr.lastNameRequired = "email is required";
       isValid = false;
       }


   
   setemailErr(emailErr);
   


   return isValid;

  }









const handleSubmit = (event) =>{
  const isValid = formValidation()
  event.preventDefault();
  // if ( email === "") {
  //   alert("Please enter email");
  // }
 
 const data = {email}
  axios.post("http://localhost:5000/forget-password",data).then((response) => {
        if(response.status === 200 && response.data.success)
        {
          alert(response.data.message);
          localStorage.setItem("userEmail", response.data.user.email)
          localStorage.setItem("userId", response.data.user._id)
          history.push("/Otp")
        }
        else{   
           alert(response.data.message);
        }
      });  
}

 return(
    <div >
            <Header/>
      <div>
<div class="container">
		<div class="row">
			
				<div class="col-md-6 col-md-offset-6 col-xs-12 form-box ml-auto mr-auto">
					
					<h4 class="text-center mb-4">
						Reset Your Password
					</h4>
					<form onSubmit={handleSubmit}>
          <div class="form-group">
                                <label for="email" class="text-black">Email Address:</label><br/>
                                <input type="text" name="email"value={email} onChange={(e)=>setEmail(e.target.value)} id="email" class="form-control"/>
                                {Object.keys(emailErr).map((key)=>{
                return <div style={{color: "red"}}>{emailErr[key]}</div>
              })}
          
                         </div>
				
        

						<div class="mb-3 ml-auto mr-auto"> 
            <input type="submit" value="submit" id="Login" class="btn btn-primary btn-lg" style={{ backgroundColor: '#2D4988', color: 'white'}}/>
							
							
						</div>
      </form>
				</div>
			</div>
	</div>
	</div>  
</div>
 
         
       
   
  )
}

export default Forgotpassword