import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './profile.css'
import image from '../components/images/Profile.jpg'

import styled from "styled-components";
import InternHeader from '../components/Header/update2'


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

function Mynetwork(){
const [email,setemail] = useState("");


const [Posts,setPosts] = useState([]);
const[notes,Allnotes] = useState("")

const handleSubmit = (event) =>{
  event.preventDefault();

const data={
    email,
    
}
  
  axios.post("http://localhost:5000/find-people",data).then((response) => {

              
    
                setPosts(response.data)
                

    console.log("Data",response.data)


});         
  }


return(
    <div>

<InternHeader/>
<div class="bannerone">
          <div class="container">
<h2> People in Your <span class="text-blue">Network</span></h2>

<br/>
     
      <form   onSubmit={handleSubmit}>
  
                    <div className="row">
                        <div className="col-md-6">
                 <div className="form-group is-empty">
                                <input type="text" placeholder="Search people by email or name" className="form-control" value={email}  onChange={(e)=>setemail(e.target.value)} />
                                <span className="material-input"></span></div>  
                              </div>
                     
  
                        <div className="col-md-6">
                          
				<input type="submit" value="Search People" id="Login" style={{width:"350px"}}/>



                        </div>
                      
                    </div>
                
                </form>
                </div>
            
                <div class="container"> 


                <h2 style={{marginBottom:'40px', marginTop:'40px'}}>{Posts.length} matching profiles found...</h2>
                <div>
                {Posts && Posts.map(post =>
  // 
<div> 
  <div class="container d-flex justify-content-center mt-5">
  <div class="card">
    <div class="top-container">
      <div class="media"> <img src="https://i.imgur.com/G1pXs7D.jpg" class="img-fluid profile-image" width="70"/>
          <div class="media-body ml-3">
              <h5 class="name">name:{post.firstname}</h5>
              <p class="mail">Email: {post.email}</p>
              <p class="mail">Phone: {post.phone}</p>
              <p class="mail">Location: {post.location}</p>
          </div>
          </div>
      </div>
      <div class="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
          <div class="dollar-div px-3">
              <div class="round-div"><i class="fa fa-dollar dollar"></i></div>
          </div>
          <div class="d-flex flex-column text-right mr-2"> <span class="current-balance">Fees</span> <span class="amount"><span class="dollar-sign">Rs</span>14760</span> </div>
      </div>
      <div class="recent-border mt-4"> <span class="recent-orders">Web development</span> </div>
      <div class="wishlist-border pt-2"> <span class="wishlist">Reactjs</span> </div>
      <div class="wishlist-border pt-2"> <span class="wishlist">Nodejs</span> </div>
      <div class="fashion-studio-border pt-2"> <span class="fashion-studio">Albenus software solutions</span> </div>
  </div>
</div>


</div>










                )} 
      </div> 


             

</div>
</div>
    </div>

)




}





export default Mynetwork