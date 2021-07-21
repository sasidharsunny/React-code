import React, { Component } from 'react';
import axios from 'axios'
import "./Internshipfilter.css"
import moment from 'moment';
import { json } from 'body-parser';
import Header from '../components/Header/update2'
import Footer from './footer1'

class Internshipfilter extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[],
            intern:[],
        }
    }
    
componentDidMount()
{


  const data = JSON.parse(localStorage.getItem('SearchData'));

  console.log("Data home",data)
  const skillset=data[0].skillset
console.log("skill set",skillset)

const city=data[0].city
 console.log("city",city)



 const jobfunction = this.props.location.jobfunction;


  if(skillset || city){
    console.log("JWT",skillset)
    const datas = {
          city: city,
         skillset: skillset,
         
         }
         console.log("hfbujhefb", datas)
         axios.post("http://localhost:5000/internship/search",datas).then((response) => {
       console.log(response);
           this.setState({posts: response.data})
           this.setState({intern: [response.data[0]]})
           }); 
   }
  
  
   else if (!jobfunction)
  { 
    console.log("JWT",skillset)
const datas = {
      city: city,
     skillset: skillset,
     
     }
     console.log("hfbujhefb", datas)
 
     axios.get(`http://localhost:5000/AllInternships`).then((res)=>{



      this.setState({posts: res.data})
      this.setState({intern: [res.data[0]]})
  }) 
   
}
  
  
  
  
  
  
else {
  axios.get(`http://localhost:5000/internship/job_function/${jobfunction}`).then((res)=>{
     console.log("DataResponse:", res.data)
      this.setState({posts: res.data})
      this.setState({intern: [res.data[0]]})
  }) 
  .catch()

}
}

getDataByCategory = async(type) => {
    const id = type	
    await axios.get(`http://localhost:5000/internship/${id}`).then((res)=>{
       console.log("Data ", res.data)
       this.setState({intern:[res.data]})
   }) 
   .catch()    
  }

   getDataToCart = async(type) => {
     const jwt = JSON.parse(localStorage.getItem("jwt"))
     //const userId = jwt.user._id
     //const internId = type._id
     console.log("Type", type)
     const data = {
      userId: jwt.user._id,
      internshipId: type._id,
      Image_Url: type.Image_Url,
      title: type.title,
      organization: type.organization,
      organizationEmail: type.organizationEmail,
      fee: 'Free'    
    }
    await axios.post(`http://localhost:5000/addToCart`, data).then((res)=>{
       console.log("Data ", res.data)
       alert("Item added to your Cart")
   }) 
   .catch()
  }
  

  changeCompany = (event) => {  
    this.setState({
        [event.target.name]: event.target.value      
    });
   console.log(event.target.value)
    }

    changeIndustry = (event) => {
        this.setState({  
            [event.target.name]: event.target.value
          });    
          console.log(event.target.value)
      }

      changeJobfunction = (event) => {
        this.setState({
           [event.target.name]: event.target.value   
        });   
        }
        
       changeTitle = (event) => {
            this.setState({
                [event.target.name]: event.target.value        
            });
            
          }

         changeLocation = (event) => {
            this.setState({
                [event.target.name]: event.target.value       
            });
            console.log(event.target.value)
            }

  handleClick = () =>{
   
    const { organization, skillset, industry,job_function,title,city,state,location} = this.state;
    const data = {
      organization,
      industry,
      job_function,
      title,
     city,
      state,
      skillset,
    location
    }
    axios.post("http://localhost:5000/internship/search",data).then((response) => {
      console.log(response);
      this.setState({posts: response.data})
      this.setState({intern: [response.data[0]]})
      
    }); 
  }
handleHide = () =>{

}
  handleClear = (e) => {
    this.setState({value:""});
    window.location.reload();
    axios.get("http://localhost:5000/AllInternships").then((res)=>{
        this.setState({posts: res.data})
        this.setState({intern: [res.data[0]] })
  }) 
  }

render() {
  const {posts}=this.state
  const {intern}=this.state
 
  return (
          <div class="div">
               <Header></Header>

<div  class="internbanner">
<form>
        <select onChange={this.changeCompany} value={this.state.value} name="organization" style={{width: "160px"}}>
             <option value="">company</option>
             <option value="Albenus">Albenus</option>
             <option value="SevenPharma">SevenPharma</option>
             <option value="IBM">IBM</option>
        </select>

        <select onChange={this.changeIndustry} value={this.state.value} name="industry" style={{width: "160px"}}>
             <option value="">Industry</option>
             <option value="Pharmacy">Pharmacy</option>
             <option value="Staffing and Recruiting">Staffing and Recruiting</option>
             <option value="IT"> IT</option>
             <option value="Computer Software">Computer Software</option>
            
        </select>

        <select onChange={this.changeJobfunction} value={this.state.value} name="job_function" style={{width: "160px"}}>
             <option value="">Job Function</option>
             <option value="Engineering">Engineering</option>
             <option value="Medicine">Medicine</option>
             <option value="Information Technology">Information Technology</option>
        </select>

        <select onChange={this.changeTitle} value={this.state.value} name="title"  style={{width: "160px"}}>
             <option value="">Job Title</option>
             <option value="Pharmacy">Pharmacy</option>
             <option value="Software Engineer">Software Engineer</option>
             <option value="Full Stack developer"> Full Stack developer</option>
            
        </select>

     
        <select onChange={this.changeLocation} value={this.state.value} name="location" style={{width: "160px"}}>
             <option value="">Location</option>
             <option value="Hyderabad">Hyderabad</option>
             <option value="Banglore">Banglore</option>
             <option value="Mumbai">Mumbai</option>
        </select>
     
        
        <input type="button" name="Apply" value="apply" style={{width: "160px"}} onClick={this.handleClick}/>
        <input type="button" name="Reset" value="Reset" style={{width: "160px"}} onClick={this.handleClear} />
      </form>
</div>
               
<section class="py-5 jobs">
    <div class="container py-4">       
        <div class="row">
            <div class="col-md-4">              
            { posts.length ? 
              posts.map(post=>
              <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical" onClick={()=> this.getDataByCategory(`${post._id}`)}>
               <a class="nav-link p-3  active" id="v-pills-Web-tab" data-toggle="pill" href="#v-pills-Web" role="tab" aria-controls="v-pills-Web" aria-selected="true">
				        	<div class="media">
				        	  <img class="mr-3" src={post.Image_Url} alt="Generic placeholder image"/>
					          <div class="media-body" >
					         	<h5 class="mt-0 mb-0 font-weight-bold text-uppercase">{post.skillset}</h5>
                    <span>{post.organization}</span> <br/> <small>{post.location}</small>
					         </div>
				       	</div>
				      	</a>					
              </div>
                     ): (
                         <div>
                             No Result Found
                         </div>
                     )          
                }
            </div>
            <div class="col-md-8">    
                          
                    { intern.length? (
                      intern.map(intern=>
                        <div class="tab-content" id="v-pills-tabContent">
                          <div class="tab-pane fade shadow rounded bg-white show active" id="v-pills-Web" role="tabpanel" aria-labelledby="v-pills-Web-tab">
                            <section class="topcard">
                                 <img class="mr-3" src={!!intern?.Image_Url ? intern.Image_Url: null} alt="Generic placeholder image"/>
                                {/* {!!intern?.Image_Url ? intern.Image_Url: ''} */}
                                 <h4 class="mb-4">
                                 <button type="button" class="btn btn-primary btn-md rounded-pill mt-3" onClick={()=>this.getDataToCart(intern)}>Enroll </button>
                                 </h4>
                              <div class="row">
                              <div class="col-md-12">                     
                                <p><a href="#">{ !!intern?.organization ? intern.organization : null}</a></p>
                                <p><b>{ !!intern?.location ? intern.location : null}</b></p>
                                <p><span>2 days ago</span> . Over 200 applicants</p><br/> 
                                <p>Experience required: { !!intern?.experience ? intern.experience : null}</p><br/>
                                <p><b>Duration:  { !!intern?.duration ? intern.duration : null}</b></p><br/> 
                                <p>Skills required:  { !!intern?.skillset ? intern.skillset : null}</p>
                                <p><br/>{ !!intern?.blog ? intern.blog : null}</p>                      
                                <br/><br/>
                               <p>Industry:  { !!intern?.industry ? intern.industry : null}</p><br/> 
                               <p>Job Function:  { !!intern?.job_function ? intern.job_function : null}</p>
                              </div>           
                              </div>
                            </section>				
                          </div>         
                        </div>
                  
		               	)) : (
                     <div>
                      
                     </div>

                     )
               }			          
            </div>
        </div>
    </div>
</section>
<Footer/>
</div> 
)}}

export default  Internshipfilter;



