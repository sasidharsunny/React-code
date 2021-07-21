import React,{useState} from 'react';
 import './Register.css';
 import axios from 'axios';
 import {Link, Redirect} from 'react-router-dom';
 import { useParams } from "react-router";
 

function UpdateProfile(){

let { id } = useParams();
const [phone,setPhone]=useState("");
const [qualification,setQualification]=useState("");
const [skills,setSkills]=useState("");
const [university,setUniversity]=useState("");
const [location,setLocation]=useState("");
  
const [phoneErr,setPhoneErr] = useState("");
const [qualificationErr,setQualificationErr] = useState("");
const [skillsErr,setSkillsErr] = useState("");
const [universityErr,setUniversityErr] = useState("");
const [locationErr,setLocationErr] = useState("");
 

const formValidation =()=>{

const phoneErr ={};
const qualificationErr ={};
const skillsErr ={};
const universityErr ={};
const locationErr ={};
let isValid = true;
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



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

 
setPhoneErr(phoneErr);
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
            phone,
            qualification,
            skills,
            university,
            location
        }
              axios.post(`http://localhost:5000/update-profile/${id}`,data).then((response) => {
                    console.log(response);
                  if(response.status === 400){
                    alert("email already exists");
                  }
                  else
                    alert("Profile Updated Succefully");
                    return Redirect('/Login')
                  });  
                     
    }

    return( 
        <div>
             <div class="container" style={{marginLeft:'500px'}}>  
            <div class="row">
            <div class="col-md-4 col-xs-12 col-sm-12 trainig-form">
              
        <div>
          <form onSubmit={handleSubmit}>
            <h2 style={{textAlign:"center",color:"#0277bd"}}>Update your <span class="text-blue">Profile</span></h2>
              <div class="form-group">
               <input type="Number"name="phone"value={phone} onChange={(e)=>setPhone(e.target.value)} class="form-control"placeholder="Mobile Number*"id="phone" />
               {Object.keys(phoneErr).map((key)=>{
                return <div style={{color: "red"}}>{phoneErr[key]}</div>
              })}
              </div>
              <div class="form-group">
              <select name="qualification" id="qualification" value={qualification} onChange={(e)=>setQualification(e.target.value)} >
                        <option value="">Select Qualification</option>
                        <option value="BE/B.Tech">BE/B.Tech</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="M.Sc">M.Sc</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="MBA">MBA</option>
                        <option value="others">others</option>
               </select>
               
               {Object.keys(qualificationErr).map((key)=>{
                return <div style={{color: "red"}}>{qualificationErr[key]}</div>
              })}
              </div>

              <div class="form-group">
               <input type="text"name="skills"value={skills} onChange={(e)=>setSkills(e.target.value)} class="form-control"placeholder="Skill Set*"id="skills" />
               {Object.keys(skillsErr).map((key)=>{
                return <div style={{color: "red"}}>{skillsErr[key]}</div>
              })}
              </div>

              <div class="form-group">
               <input type="text"name="university"value={university} onChange={(e)=>setUniversity(e.target.value)} class="form-control"placeholder="University Name*"id="university" />
               {Object.keys(universityErr).map((key)=>{
                return <div style={{color: "red"}}>{universityErr[key]}</div>
              })}
              </div>

              <div class="form-group">
               <input type="text"name="location"value={location} onChange={(e)=>setLocation(e.target.value)} class="form-control"placeholder="Location*"id="location" />
               {Object.keys(locationErr).map((key)=>{
                return <div style={{color: "red"}}>{locationErr[key]}</div>
              })}
              </div>
            <input type="submit" value="Submit" id="submit"  /><br/>
          </form>       
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default UpdateProfile