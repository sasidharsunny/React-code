import React, { Component } from 'react';

//import './verticaltab.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router' ;
import OrganizationHeader from '../Header/OrganizationHeader'
 import Footer from '../footer1'
 import './organizationdashboard.css'
class Organizationdashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],

           
        }
    }
    componentDidMount()
    {
       const data =JSON.parse(localStorage.getItem('jwt'));

       const organizationID =data.user._id;
       

    
        axios.get(`http://localhost:5000/internship/organizationID/${organizationID}`)
        .then((res)=>{
            console.log("Response:", res.data)
            this.setState({posts: res.data,
            
             })
            
    })
    }

   handleEdit = async(data)=> {
    axios.get(`http://localhost:5000/internship/${data}`).then((res)=>{
        localStorage.setItem('Stepper', JSON.stringify(res.data));
        this.props.history.push({
            pathname:"/Stepper",
             });
        console.log("bubujnk",res.data);
    })
          
        }
    render() {
        const {posts}=this.state
    return(
        <div>
            <div>
            <OrganizationHeader></OrganizationHeader>
            </div>
            <div class="organizationbanner">
            <div class="row">
            <section class="py-5 jobs">
    <div class="container py-4">       
        <div class="row">
            <div class="col-md-2">              
           
                <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link p-3  active" id="v-pills-Web-tab" data-toggle="pill" href="#v-pills-Web" role="tab" aria-controls="v-pills-Web" aria-selected="true">
					<div class="media">
					  
					  <div class="media-body" >

						<h5 class="mt-0 mb-0 font-weight-bold text-uppercase">Saved Items</h5>
                       <br/>
                       <br/>
					  </div>
					</div>
					</a>					
                    </div>
                   
            </div>
            <div class="col-md-8">    
              {/*   <!-- Tabs content --> */}             
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade shadow rounded bg-white show active" id="v-pills-Web" role="tabpanel" aria-labelledby="v-pills-Web-tab">
					<section class="topcard">
                    <h4 style={{color:"#000",fontSize:"2.2rem",  fontWeight: "bold"}}>Posted <span class="text-blue">Internships</span></h4><br/>
                    
                        <div class="row">
                        {posts.map(post=>
                            <div class="col-md-6" >
                      
                              <div class="card job-card" style={{width:'310px',height:'360px'}} id="card">
                                <div class="card-body">
                                <h4 class="mb-4">{post.organization}</h4><br/>
                                <div>
                                    <span class="card-link"> <img src={post.Image_Url}/></span>
  
                                  </div>
                                 <div class="job-content">
                                   <h5 class="card-title">{post.title}</h5>
                             	</div>
                                 <div class ="row">
                                 <h4 class="mb-4">
                                 <button type="button" class="btn btn-primary btn-md rounded-pill mt-3" onClick={()=>this.handleEdit(`${post._id}`)}>Edit </button>
                                
                                 </h4>
                            </div>
                                 </div>
                                  </div>
	                    	
                                   </div>	
                                    )}          
                               </div>
						</section>				
                    </div>         
                </div>
            </div>
            <div class="col-md-2">
                <div class="tab-content">
                <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link p-3  active" id="v-pills-Web-tab" data-toggle="pill" href="#v-pills-Web" role="tab" aria-controls="v-pills-Web" aria-selected="true">
					<div class="media">
					  
					  <div class="media-body" >
                      <Link to="/Postinternship">
                                   <h4 class="card-title"><button type="button" class="btn btn-primary btn-md rounded-pill mt-3">Post a Internship</button></h4>
                                </Link>
                                <h5>Purchase Internship postings</h5>
                    <a href="#">Get Discount</a>
                    <h5>Billing Information</h5>
                    <a href="#">Payment method</a><br/>
                    <a href="#">Purchase history</a>
					  </div>
					</div>
					</a>					
                    </div>
                    <div>

                    </div>
                 
            </div>
            </div>
        </div>
    </div>
</section>
     
            </div>

        
            </div>
            <Footer/>
        </div>
    )
}
}

export default withRouter (Organizationdashboard)