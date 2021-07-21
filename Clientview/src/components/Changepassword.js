import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

function Changepassword(){
const [new_password,setnew_password] = useState("");
const [confirm_password,setConfirmpassword] = useState("");
const [error, setError] = useState("");
let history = useHistory()

const userId = localStorage.getItem("userId")

const handleSubmit = (event) =>{
  event.preventDefault();

  setError("");
  if ( new_password === "") {
    setError("Please enter new password");
  }
  else if(confirm_password === ""){
    setError("enter confirm password");
  }
  else if(new_password !== confirm_password){
    setError("confirm password should match")
  }
  else{ 
  const data= {
    id: userId,
    new_password: new_password,
  }
      axios.post("http://localhost:5000/change-password",data).then((response) => {
            history.push("/Login")
            alert("password successfully changed");

          });
         
        }
      
}

 return(
    <div>
      <section class="section">
            <div class="container">
               <div class="row align-items-center">
                 <form onSubmit={handleSubmit}>
                  <div class="col-md-4 me-auto">
                     <h1 style={{color:"#0277bd"}} >Reset your Password </h1>
                     <p class="mb-4">
                      <div class="form-group">
                        <input type="password" name="new_password" value={new_password} style={{width:"350px"}} onChange={(e)=>setnew_password(e.target.value)} class="form-control"  placeholder="New Password" id="new_password"/>
                      </div>
                      <div class="form-group">
                        <input type="Password" name="confirm_password" value={confirm_password} style={{width:"350px"}} onChange={(e)=>setConfirmpassword(e.target.value)} class="form-control"  placeholder="Confirm New Password" id="confirm_password"/>
                      </div>
                      {error ? (
                        <Group>
                         <ErrorMessage>{error}</ErrorMessage>
                       </Group>
                        ) : null}
                      <input type="submit" value="Save" id="save" style={{width:"350px"}}/><br/>
                     </p>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Changepassword