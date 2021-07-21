import React , { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from "react-router-dom";
import './Home.css';
import Linkedin from './linkedin';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Footer from './footer1'


const transitionDuration = 1000;
const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}))

function Home() {
  let history = useHistory();
  const classes = useStyles();
  const [email,setEmail] = useState("");

  const [skillset,setskillSet] = useState("");
const [city,setcity] = useState("");
const [Posts,setPosts] = useState([]);


const handleSearch = (event) =>{
  event.preventDefault();

const Sdata={
    skillset,
    city
}
  
  axios.post("http://localhost:5000/internship/search",Sdata).then((response) => {
    
                

    console.log("Data",response.data)




    let json = JSON.stringify(response.data);
    localStorage.setItem('SearchData', json);
    history.push({
      pathname: '/internshipfilter'


});         
  }

  )}





  const handleSubmit = (event) =>{
  event.preventDefault();
  const data = {}
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    data.email = email
  } else {
    data.firstname = email;
  }
  axios.post("http://localhost:5000/find-people",data).then((response) => {
    console.log(response.data)
    let json = JSON.stringify(response.data);
    localStorage.setItem('UserData', json);
    history.push({
      pathname: '/UserList'
    });   
  })

       
  }
  return (
<div>
<div>      
<header class="bg-blue">
        <nav class="navbar navbar-expand-lg navbar-dark bg-blue">
            <div class="container">
               <div class="row">
               <div class="col-md-4">
               <a class="navbar-brand" href="#"><span>TECH PORTAL</span></a>
               </div>
               </div>

            
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
      <div class="col-md-4 header-btns">

        <Link to="/join">
        <button type="button" class="btn btn-primary mr-3" >  Join Now</button>
        </Link>

        
        <Link to="/signin">
        <button type="button" class="btn btn-outline-primary">Sign In</button>
        </Link>
      
      </div>
            
            </div>
          </nav>
      </header>
   
<div class="banner">
      <div class="container">
          <div class="row">
              <div class="col-md-5 people-hiring">
                <h1 class="text-black">Open <span class="text-blue">Internships</span> People <span class="text-blue">hiring.</span></h1>


<div id="tabs"  class="mt-4">
				<nav>
					<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a class="nav-item nav-link active" id="nav-Jobs-tab" data-toggle="tab" href="#nav-Jobs" role="tab" aria-controls="nav-Jobs" aria-selected="true">Internships</a>
						<a class="nav-item nav-link" id="nav-People-tab" data-toggle="tab" href="#nav-People" role="tab" aria-controls="nav-People" aria-selected="false">People</a>
						<a class="nav-item nav-link" id="nav-Learning-tab" data-toggle="tab" href="#nav-Learning" role="tab" aria-controls="nav-Learning" aria-selected="false" style={{color:"#FFF !important"}}>Learning</a>
					</div>
				</nav>
				<div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div class="tab-pane fade show active" id="nav-Jobs" role="tabpanel" aria-labelledby="nav-Jobs-tab">
                        
                        
<form class="mt-2"  onSubmit={handleSearch} >
    <div class="form-icons">
      <div class="input-group">
        <span class="input-group-label">
          <i class="fa fa-search"></i>
        </span>
      
        <input class="input-group-field"placeholder=" search by skillset" type="text"onChange={(e)=>setskillSet(e.target.value)} value={skillset} />
       
      </div>
  
      <div class="input-group">
        <span class="input-group-label">
          <i class="fa fa-map-marker"></i>
        </span>
       
        <input class="input-group-field" type="text"onChange={(e)=>setcity(e.target.value)} value={city} placeholder=" search by location"/>                     
      </div>
  
    </div>
    
  <button type="submit" class="btn btn-primary btn-lg">Search Internship</button>

  </form>
                        
					</div>
					<div class="tab-pane fade" id="nav-People" role="tabpanel" aria-labelledby="nav-People-tab">
                        
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                              <input type="text" name= "email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or Username"/>
                             </div>
                           
                             
                             <button type="submit" class="btn btn-primary btn-lg">Search People</button>
                            
                           
                          </form>

					</div>
					<div class="tab-pane fade" id="nav-Learning" role="tabpanel" aria-labelledby="nav-Learning-tab">
                        
                          
                        <form>
                            <div class="form-group">
                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search skills, subjects, or software"/>
                             </div>
                           
                            <button type="button" class="btn btn-primary btn-lg">Search Learning</button>
                          </form>


					</div>
	</div>
</div>

    </div>
              <div class="col-md-7 home-banner">
                  <img src="https://freepngimg.com/thumb/technology/32333-4-technology-transparent.png" class="img-fluid"/>
              </div>
             
          </div>
      </div>
      </div>

<div>
<section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">

        <div class="row">
          <div class="col-lg-7">
          <h3 style={{color:"#000",fontSize:"2.2rem",  fontWeight: "bold"}}>post your <span class="text-blue">internship</span> and find the people you need</h3>

            
            <p style={{color:"black",fontSize:"1.1rem"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br/>
            <div>
            <Button variant="contained" class="btn btn-outline-primary" style={{ backgroundColor: '#2D4988', color: 'white',}}>post a internship</Button>
            </div>
          </div>
          <div class="col-lg-5 cta-btn-container">
            <img src='https://bootstrapmade.com/demo/templates/Bikin/assets/img/features-2.png' width="100%"/>
          </div>
        </div>

      </div>
    </section>
</div>



<div class="technical-support">
<div class="container ">
<div class="row content">
           <div class="col-md-5 order-1 order-md-1" data-aos="fade-left">
            <img src="https://www.eventmobi.com/wp-content/uploads/2019/10/EventMobi-vereinte-plattform-1024x833.png" height="200px" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-7 order-2 order-md-2" data-aos="fade-right"> 
          <h1 style={{color:"#000",fontSize:"2.2rem",  fontWeight: "bold !important"}} > Choose <span class="text-blue">Right Internship</span> to your <span class="text-blue"></span>career </h1><br/>
          <p style={{color:"black",fontSize:"1.1rem"}}> With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that youre looking for new job opportunities</p>
          <Link to="/signin">
  <button type="submit" class="btn btn-primary btn-md">connect</button>
    </Link>
          </div>
         
        </div>       
        </div>
        </div>


<div>

  {/* <Sidebyside/> */}

</div>



<div>
<div class="call_section connect-learning connect-people">
			<div class="wrapper">
				<div class="container">
					
					<div class="row">
					
            <div class="col-md-6">
						<h2 style={{paddingTop:"0px"}}>Seamlessly <span class="text-blue">Communicate</span></h2>
                   <div class="btn-group">
                   <p style={{textAlign:"left",color:"black",fontSize:"17px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
						</div>
            <div class="col-md-6">
          <img class="right-img" src="https://www.goteso.com/assets/images/training/banner/best-online-it-training.png"/> 
          </div>

					</div>
				</div>
			
			</div>
		</div>
</div>








<div>
<div class="call_section connect-learning">
			<div class="wrapper">
				<div class="container">
					
					<div class="row">
          <div class="col-md-6">
          <img src="https://www.eventtia.com/hubfs/Ilustratrion_newsite_2019/b2b_1_op.png"/> 
          </div>

            <div class="col-md-6">
						<h2 class="thick-blue" style={{paddingTop:"20px"}}>Connect with  <span class="text-blue">people</span> <br/> can  <span class="text-blue">help</span></h2>
                   <div class="btn-group">
                   <p style={{textAlign:"left",color:"black",fontSize:"17px"}}> <a href="#"> Find people you know <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                 
                  </div>
						</div>
          
					</div>
				</div>
			
			</div>
		</div>
</div>





<div>
<div class="connect-people connect-learning light-blue">
			<div class="wrapper">
				<div class="container">
					
					<div class="row">
          
            <div class="col-md-6">
						<h2 style={{paddingTop:"20px"}}>Learn the  <span class="text-blue">skills</span> <br/>  that can <span class="text-blue">help</span> you now  </h2>
                   <div class="btn-group">
                   <div class="btn-group"><button type="button" class="learning-cta__label dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose a topic to learn about</button><div class="dropdown-menu dropdown-menu-right mt-3"><button class="dropdown-item" type="button">Action</button><button class="dropdown-item" type="button">Another action</button><button class="dropdown-item" type="button">Something else here</button></div></div>
                  </div>
						</div>
            <div class="col-md-6">
          <img src="https://itsquest.bpl.fyi/wp-content/uploads/2019/11/illustration-userinterface.png"/> 
          </div>


					</div>
				</div>
			
			</div>
		</div>
</div>



</div>

<div>
  <Linkedin/>
</div>

<Footer/>
</div>
    );
}

export default Home;
