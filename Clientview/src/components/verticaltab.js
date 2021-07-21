import React, { Component } from 'react';
import { withRouter } from 'react-router'; 
import { Grid } from "@material-ui/core";
import axios from 'axios'
import { Link } from "react-router-dom"
import './verticaltab.css'
import Header from './Header/update2'
import Footer from './footer1'
class Verticaltab extends Component {
    constructor(props){
        super(props)
        this.state={
            category:[],
            intern:[],
            link:'All Internships'
        }
    }
    
componentDidMount()
{
   axios.get("http://localhost:5000/category").then((res)=>{
       this.setState({category: res.data})
       this.setState({intern: res.data})
   }) 
   .catch()

   axios.get("http://localhost:5000/AllInternships").then((res)=>{
       this.setState({intern: res.data})
   }) 
   .catch()
}

getDataByCategory = async(type) => {
    const category = type
    this.setState({link: type})	
    console.log("type", category)
    await axios.get(`http://localhost:5000/internship/category/${category}`).then((res)=>{
       console.log("Data ", res.data)
       this.setState({intern: res.data})
   }) 
   .catch()    
  }

  getInternships = async(value) => {
    const jobfunction = value;
      await axios.get(`http://localhost:5000/internship/job_function/${jobfunction}`).then((res)=>{
        console.log("Data ", res.data)
        this.props.history.push({
        pathname: '/internshipfilter',
        jobfunction: jobfunction,
        });
}) 
.catch()
  }


render() {
  const {category}=this.state
  const {intern}=this.state
  const {link} = this.state
  return (
          <div class="div">
            <Header></Header>
<div class="internbanner">
<section class="py-5 jobs">
    <div class="container py-4">       
        <div class="row">
            <div class="col-md-3">              
            {category.map(post=>
                <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical" onClick={()=> this.getDataByCategory(`${post}`)} >
                    <a class="nav-link p-3  active" id="v-pills-Web-tab" data-toggle="pill" href="#v-pills-Web" role="tab" aria-controls="v-pills-Web" aria-selected="true">
					<div class="media">
					  <img class="mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-snKxqn3QRb5QmvGhl2ozd6vQdc9j6zPp1g&usqp=CAU" alt="Generic placeholder image"/>
					  <div class="media-body" >
						<h5 class="mt-0 mb-0 font-weight-bold text-uppercase text-center">{post}</h5>
                       
					  </div>
					</div>
					</a>					
                    </div>
                     )
                    }
            </div>
            <div class="col-md-9">    
              {/*   <!-- Tabs content --> */}             
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade shadow rounded bg show active" id="v-pills-Web" role="tabpanel" aria-labelledby="v-pills-Web-tab">
					<section class="topcards">
                            <h5>{link}</h5>
                     <h4 class="mb-4">{intern.category}</h4><br/>
                        <div class="row">
                        {intern.map(intern=>
                            <div class="col-md-4" onClick={()=> this.getInternships(`${intern.job_function}`)}>
                              <a href="#"><div class="card job-card">
                                <div class="card-body">
                                   <div>
                                   <span class="card-link"> <img class="internimgurl" src={intern.Image_Url} style={{width:"150px",textAlign:"center"}} alt="Card image cap"/></span>
                                 </div>
                                 <br/>
                                 <div class="job-content">
      <h5 class="card-title">{intern.job_function}</h5>
                             	</div>
                                 </div>
                                  </div></a>
		
                                   </div>	
                                    )}          
                               </div>
						</section>				























                    </div>         
                </div>
            </div>
        </div>
    </div>
</section>
</div>
<Footer/>
</div> 
)}}

export default withRouter( Verticaltab);