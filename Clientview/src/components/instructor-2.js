import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image1 from './images/inst2.jpeg';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Drop from "./test"
import './instructor.css';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

  
function Instructor() {



  const [firstname,setFName]=useState("");
  const [lastname,setLName]=useState("");
   const [email,setEmail]=useState("");
   const [phone,setPhone]=useState("");
   const [password,setPassword]=useState("");
  const [confirm_password,setPassword2] = useState("");
  const [qualification,setQualification]=useState("");
  const [skills,setSkills]=useState("");
  const [university,setUniversity]=useState("");
  const [location,setLocation]=useState("");
 
 const [firstNameErr,setFirstNameErr] = useState("");
 const [lastNameErr,setLastNameErr] = useState("");
 const [emailErr,setEmailErr] = useState("");
 const [phoneErr,setPhoneErr] = useState("");
 const [passwordErr,setPasswordErr] = useState("");
 const [confirmPasswordErr,setCPasswordErr] = useState("");
 const [qualificationErr,setQualificationErr] = useState("");
 const [skillsErr,setSkillsErr] = useState("");
 const [universityErr,setUniversityErr] = useState("");
 const [locationErr,setLocationErr] = useState("");




 
const formValidation =()=>{
  const firstNameErr ={};
  const lastNameErr ={};
  const emailErr ={};
  const phoneErr ={};
  const passwordErr ={};
  const confirmPasswordErr ={};
  const qualificationErr ={};
  const skillsErr ={};
  const universityErr ={};
  const locationErr ={};
  let isValid = true;
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if ( firstname === "") {
   firstNameErr.firstNameRequired = "FirstName is required";
    isValid = false;
    }
  if ( lastname === "") {
    lastNameErr.lastNameRequired = "LastName is required";
       isValid = false;
       }
  if ( email === "") {
    emailErr.emailRequired = "please enter email";
         isValid = false;
   }
  
   else if (reg.test(email)=== false ) {
    emailErr.emailRequired = "Invalid Email Address";
         isValid = false;
   }
   
  
  if ( phone === "") {
    phoneErr.phoneRequired = "enter mobile number";
           isValid = false;
  }
  else if ( phone.trim().length < 10) {
    phoneErr.phoneShort = "Mobilenumber must be 10 digits";
           isValid = false;
  }
  else if ( phone.trim().length > 12) {
    phoneErr.phoneLong= "Invalid mobile number";
           isValid = false;
  }
  
  if ( password === "") {
    passwordErr.passwordRequired = "enter password";
             isValid = false;
    }
    else if ( password.trim().length < 6) {
      passwordErr.passwordShort = "password must be atleast 6 characters";
             isValid = false;
    }
  
  if ( confirm_password === "") {
    confirmPasswordErr.confirmpasswordRequired = "enter confirm password";
  }isValid = false;
    if ( password != confirm_password) {
      confirmPasswordErr.confirmpasswordMatch = "confirm password must match with password";
                 isValid = false;
   }
  if ( qualification === "") {
    qualificationErr.qualificationRequired = "please select qualification";
                 isValid = false;
   }
   if ( skills === "") {
    skillsErr.skillsRequired = "enter skills";
        isValid = false;
    }
  if ( university === "") {
    universityErr.universityRequired = "enter university name";
        isValid = false;
  }
   if ( location === "") {
    locationErr.locationRequired = "enter location";
        isValid = false;
    }
  
    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setEmailErr(emailErr);
    setPhoneErr(phoneErr);
    setPasswordErr(passwordErr);
    setCPasswordErr(confirmPasswordErr);
    setQualificationErr(qualificationErr);
    setSkillsErr(skillsErr);
    setUniversityErr(universityErr);
    setLocationErr(locationErr);
    return isValid;
  }
       const handleSubmit = (event) =>{
            event.preventDefault();
            const isValid = formValidation()
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
              location
            }
                axios.post("http://localhost:5000/api/users/register",data).then((response) => {
                      console.log(response);
                    if(response.status === 400){
                      alert("email already exists");
                    }
                    else
                      alert("successfully registered");
                      return Redirect('/Login')
                    });  
                       
          }











  
return (
        <div>
              <div>

<div class="container d-flex justify-content-center align-items-center">
    <div class="card">
        <div class="row">
        <div class="col-md-6">
                <div class="text-center mt-5"> <img src="https://gawvs.in//assets/img/login.png" width="500px" height="50px"/> </div>
            </div>
            <div class="col-md-6">
             
                <div class="form">
                    <h2 style={{textAlign:"center",color:"black", fontSize:"45px", fontweight:"bold"}}>Join <span class="text-blue">Us</span></h2>
                    <hr class="blueline"/>


   <div class="row">
    
<div class="registration">
  
  
    <form   onSubmit={handleSubmit}  >
      <div class="row">
     <div class="col-md-6">

      <div class="form-group">
        <label>First Name</label>
        <input type="text" name="firstname" class="form-control" id="" aria-describedby="emailHelp"  value={firstname} onChange={(e)=>setFName(e.target.value)} placeholder="First Name"/>
        {Object.keys(firstNameErr).map((key)=>{
                return <div style={{color: "red"}}>{firstNameErr[key]}</div>
              })}
              </div>
      
      
      <div class="form-group">
        <label>Email</label>
        <input type="email"  name="email" class="form-control" id="" aria-describedby="emailHelp"  value={email}onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
        {Object.keys(emailErr).map((key)=>{
                return <div style={{color: "red"}}>{emailErr[key]}</div>
              })}
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" name="password" class="form-control"  value={password} onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"/>
        {Object.keys(passwordErr).map((key)=>{
                return <div style={{color: "red"}}>{passwordErr[key]}</div>
              })}
       </div>


     


    

    </div>
    <div class="col-md-6">
      
      <div class="form-group">
        <label>Last Name</label>
        <input type="text"name="lastname" class="form-control" id="exampleInputPassword1"value={lastname} onChange={(e)=>setLName(e.target.value)} placeholder="Lastname"/>
        {Object.keys(lastNameErr).map((key)=>{
                return <div style={{color: "red"}}>{lastNameErr[key]}</div>
              })}
      </div>

      <div class="form-group">
        <label>Phone Number</label>
        <input type="number"name="phone" class="form-control" id="exampleInputEmail1" aria-describedby="Phone Number"value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter email"/>
        {Object.keys(phoneErr).map((key)=>{
                return <div style={{color: "red"}}>{phoneErr[key]}</div>
              })}
 
  </div>

      <div class="form-group">
        <label>Re-Type Password</label>
        <input type="password"name="confirm_password" class="form-control" id="exampleInputPassword1"value={confirm_password} onChange={(e)=>setPassword2(e.target.value)} placeholder="Re-Type password"/>
        {Object.keys(confirmPasswordErr).map((key)=>{
                return <div style={{color: "red"}}>{confirmPasswordErr[key]}</div>
              })}
     
      </div>
</div>
    <div class="col-md-12"> 

<Drop/>

</div>
    <div class="col-md-12"> 

    <input type="submit" value="Submit" id="submit"  /><br/>
    
    </div>
  </div>
  </form>

</div>

</div>
<div class="account">
<p>Have an account ? </p>
<Link to="/login">
 <a href="#" class="auth-link text-black">Login</a>
        </Link>
      

        </div>
        </div>
            </div>
           
        </div>
    </div>
</div>










</div>






<div>

<nav class="navbar navbar-expand-md ">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="http://google.com">Google</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Submenu</a></li>
              <li><a class="dropdown-item" href="#">Submenu0</a></li>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 1</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                  <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                </ul>
              </li>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                  <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>




</div>

</div>
    );
}

export default Instructor;