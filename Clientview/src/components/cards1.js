
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Image4 from './images/bgimg.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./cards1.css"





const useStyles = makeStyles((theme) => ({

    root: {
      
                
        textAlign: "center",
        margin: theme.spacing(2),
        '&:hover':{
            boxShadow: '0 20px 40px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)',
          },
          [theme.breakpoints.down('sm')]: {
            minWidth: 200,
        },
        [theme.breakpoints.up('md')]: {
            minWidth: 280,
        },
        [theme.breakpoints.up('lg')]: {
                minWidth: 250,
        },
        [theme.breakpoints.up('xl')]: {
            minWidth: 350,
        },

        
      },
      main: {
        textAlign: "center",
        backgroundColor: "white",
    },

    
    btn:{
        backgroundColor:'#01579b',
         color:'white',
        },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },

      bgimg:{
       backgroundImage:`url(${Image4})`,
       backgroundSize: "cover",
       height: "330px",
       width: "100%",
       marginBottom: "10px",
       textAlign: "center",
       paddingTop: '120px',
       margin: "auto", 
       color: "white",
      },
    
      div: {
        [theme.breakpoints.down('sm')]: {
            margin: "auto"
        },

        [theme.breakpoints.up('md')]: {
            display: 'flex',
            margin: "auto",

        },

        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            margin: "auto",
            padding: "50px"
        },
        [theme.breakpoints.up('xl')]: {
            display: 'flex',
            margin: "auto",
            padding: "50px"
        },
    },




   
}));
function Cards1(props) {
    const classes = useStyles();
    return (
    
        <div>
            <div className={classes.bgimg}>
            
            <h1 style={{fontSize:"3.9rem",color:"white",}}>INTERNSHIP</h1> 
           
            </div>
            <br/>

      <section id="intern" class="pt-90 pb-120 gray-bg">
        <div class="container">
            <div class="row">
            <hr/>
                <div class="col-lg-8">
                  
                    <div class="intern-left mt-30">
                        <div class="title">
                          
                            <h3>Choose Your  <span class="text-blue">Internships</span></h3>
                        </div> {/* <!-- title --> */}
                     
                        <div class="intern-image pt-50">
                            <img src="https://gawvs.in//assets/img/login.png" alt="Courses"/>
                        </div> {/* <!-- corses comment image --> */}
                        
                        <div class="corses-tab mt-30">
                            <ul class="nav nav-justified" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                                </li>
                                <li class="nav-item">
                                    <a id="curriculam-tab" data-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false">Internship</a>
                                </li>
                                <li class="nav-item">
                                    <a id="Description-tab" data-toggle="tab" href="#Description" role="Description" aria-controls="Description" aria-selected="false">Description</a>
                                </li>
                                <li class="nav-item">
                                    <a id="instructor-tab" data-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">Instructor</a>
                                </li>
                               
                                <li class="nav-item">
                                    <a id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                </li>
                            </ul>
                            
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                    <div class="overview-description">
                                        <div class="comment-description pt-40">
                                            <h6>Internship Summery</h6>
                                            <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                        </div>
                                        <div class="comment-description pt-40">
                                            <h6>Requrements</h6>
                                            <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                        </div>
                                    </div>{/*  <!-- overview description --> */}
                                </div>




                             <div class="tab-pane fade" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                                    <div class="Description-cont">
                                   
                                        <div class="Description-author">
                                            <div class="author-thum">
                                                <img src="" alt=""/>
                                            </div>
                                           
                                        </div>
                                        <div class="Description-description pt-25">
                                            <h5><strong>Description</strong></h5>
                                            <p>Webdesigning is an open-source, interpreted, and object-oriented scripting language that can be executed at the server-side. Webdesigning is well suited for web development. Therefore, it is used to develop web applications (an application that executes on the server and generates the dynamic page.<br/>Webdesigning stands for Hypertext Preprocessor.
Webdesigning is an interpreted language, i.e., there is no need for compilation.<br/>Webdesigning is faster than other scripting languages, for example, ASP and JSP.<br/>
Webdesigning is a server-side scripting language, which is used to manage the dynamic content of the website.<br/>
Webdesigning can be embedded into HTML.<br/>
webdesigning is an object-oriented language<br/>
Webdesigning is an open-source scripting language<br/>
Webdesigning is simple and easy to learn language.</p>
                                        </div>
                                    </div>{/*  <!--Description cont --> */}
                                </div>      


                                <div class="tab-pane fade" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">
                                    <div class="curriculam-cont">
                                        <div class="title">
                                            <h6>Internship in Hyderabad</h6>
                                        </div>
                                        <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="card-header" id="headingOne">
                                                    <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <ul>
                                                           
                                                            <li><span class="head">Senior fullstack Developer</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span>posted in 4 days ago</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>

                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Good knowledge reactjs <br/>Minmum 3 years exp required,<br/>Hyderabad Telagana India .</p>
                                                        <Button variant="contained"  style={{ backgroundColor: '#2D4988', color: 'white',}}>ApplyNow</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="card">
                                                <div class="card-header" id="headingTow">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseTow" aria-expanded="true" aria-controls="collapseTow">
                                                        <ul>
                                                            
                                                            
                                                            <li><span class="head">Webdeveloper</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span> posted in 4 days ago</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>

                                                <div id="collapseTow" class="collapse" aria-labelledby="headingTow" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                    <p>Good knowledge reactjs <br/>Minmum 3 years exp required,<br/>Hyderabad Telagana India .</p>
                                                        <Button variant="contained"  style={{ backgroundColor: '#2D4988', color: 'white',}}>ApplyNow</Button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-header" id="headingThree">
                                                    <a href="#" data-toggle="collapse" class="collapsed" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <ul>
                                                          
                                                           
                                                            <li><span class="head">Wordpress Developer</span></li>
                                                            <li><span class="time d-none d-md-block"><i class="fa fa-clock-o"></i> <span>posted in 1 weekago</span></span></li>
                                                        </ul>
                                                    </a>
                                                </div>
                                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            

                
                                            
                                           
                               




                                        </div>
                                    </div> {/* <!-- curriculam cont --> */}
                                </div>
                                <div class="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                    <div class="instructor-cont">
                                        <div class="instructor-author">
                                            <div class="author-thum">
                                                <img src="https://lh3.googleusercontent.com/cH1NkNeUq_E1RwmGP8EudIwLy5CeJsUo2rw9L_lOjURY-JgFxscGS2YD3HS6kDrBFuqKxA=s85" alt="Instructor"/>
                                            </div>
                                            <div class="author-name">
                                                <a href="#"><h5>Suresh</h5></a>
                                                <span>Senior Web Developer</span>
                                               
                                            </div>
                                        </div>
                                        <div class="instructor-description pt-25">
                                            <p>Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem Lorem lorem lorem lorrem lorem lorem lorem </p>
                                        </div>
                                    </div>{/*  <!-- instructor cont --> */}
                                </div>



                                <div class="tab-pane fade" id="Description" role="tabpanel" aria-labelledby="Enroll-tab">
                                    <div class="Enroll-cont">
                                        <div class="Enroll-author">
                                            <div class="author-thum">
                                                <img src="" alt="Enroll"/>
                                            </div>
                                           
                                        </div>
                                        <div class="Enroll-Enroll pt-25">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga ratione molestiae unde provident quibusdam sunt, doloremque. Error omnis mollitia, ex dolor sequi. Et, quibusdam excepturi. Animi assumenda, consequuntur dolorum odio sit inventore aliquid, optio fugiat alias. Veritatis minima, dicta quam repudiandae repellat non sit, distinctio, impedit, expedita tempora numquam?</p>
                                        </div>
                                    </div>{/*  <!--Enroll cont --> */}
                                </div>      




                                <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                    <div class="reviews-cont">
                                        <div class="title">
                                            <h6> Reviews</h6>
                                        </div>
                                        <ul>
                                           <li>
                                               <div class="comment-reviews">
                                                    <div class="reviews-author">
                                                        <div class="author-thum">
                                                            <img src="" alt=""/>
                                                        </div>
                                                        <div class="author-name">
                                                            <h6>Lakshmi</h6>
                                                            <span>Feb5, 2021</span>
                                                        </div>
                                                    </div>
                                                    <div class="reviews-description pt-20">
                                                        <p>Lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem</p>
                                                        <div class="rating">
                                                            <ul>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                             
                                                            </ul>
                                                            <span>/ 5 Star</span>
                                                        </div>
                                                    </div>
                                                </div> {/* <!-- comment reviews --> */}
                                           </li>
                                           <li>
                                               <div class="comment-reviews">
                                                    <div class="reviews-author">
                                                        <div class="author-thum">
                                                            <img src="" alt=""/>
                                                        </div>
                                                        <div class="author-name">
                                                            <h6>Sasidhar</h6>
                                                            <span>Febuary 5 2021</span>
                                                        </div>
                                                    </div>
                                                    <div class="reviews-description pt-20">
                                                        <p>Lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem</p>
                                                        <div class="rating">
                                                            <ul>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                             
                                                            </ul>
                                                            <span>/ 5 Star</span>
                                                        </div>
                                                    </div>
                                                </div> {/* <!-- comment reviews --> */}
                                           </li>
                                          
                                        </ul>
                                        <div class="title pt-15">
                                            <h6>Leave A Comment</h6>
                                        </div>
                                        <div class="reviews-form">
                                            <form action="#">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-comment">
                                                            <input type="text" placeholder="Fast name"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-comment">
                                                            <input type="text" placeholder="Last Name"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-comment">
                                                            <div class="rate-wrapper">
                                                                <div class="rate-label">Your Rating:</div>
                                                                <div class="rate">
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-comment">
                                                            <textarea placeholder="Comment"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-comment">
                                                            <button type="button" class="main-btn">Post Comment</button>
                                                        </div>
                                                    </div>
                                                </div>{/*  <!-- row --> */}
                                            </form>
                                        </div>
                                    </div>{/*  <!-- reviews cont --> */}
                                </div>
                            </div> {/* <!-- tab content --> */}
                        </div>
                    </div> {/* <!-- corses comment left --> */}
                    
                </div>
                <br/>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12 col-md-6">
                            <div class="intern-features mt-5">
                              
                               <h4 style={{fontSize:"1.4rem",fontFamily:"Open Sans",color:"#000",fontWeight: "bold"}}>Internship Features</h4>
                                <ul>
                                    <li><i class="fa fa-clock-o"></i>Duaration : <span>10 Hours</span></li>
        
                                    <li><i class="fa fa-clock-o"></i>Duaration : <span>10 Hours</span></li>
                                    <li><i class="fa fa-clock-o"></i>Duaration : <span>10 Hours</span></li>

                                
                                    <li><i class="fa fa-user-o"></i>Students :  <span>100</span></li>
                                </ul>
                                <div class="price-button pt-10">
                                    
                                    <a href="#" class="main-btn">Enroll Now</a>
                                  
                                    <br/>
                                
                                </div>
                            </div>
                          
                            <br/>
                        </div>
                        <br/>
                        <br/>
                        <div class="col-lg-12 col-md-6">
                            <div class="enrolllist mt-30">
                                
                                <h4 style={{fontSize:"1.4rem",fontFamily:"Open Sans",color:"#000",fontWeight: "bold"}}>Page people also viewed</h4>
                                <div class="enroll mt-20">
                                    <div class="image">
                                        <img src="https://media.istockphoto.com/photos/technology-abstract-picture-id1148091793?k=6&m=1148091793&s=612x612&w=0&h=m2vuawlHNUvykE4qVanxHaldO6ge2SxFx5EiGSe9nE0=" alt="Image"/>
                                    </div>
                                    <div class="cont">
                                        <a href="#"><h4>Basics of Nodejs</h4></a>
                
                                    </div>
                                </div>
                                <br/>
                               
                               
                                <div class="enroll mt-20">
                                    <div class="image">
                                        <img src="https://media.istockphoto.com/photos/technology-abstract-picture-id1148091793?k=6&m=1148091793&s=612x612&w=0&h=m2vuawlHNUvykE4qVanxHaldO6ge2SxFx5EiGSe9nE0=" alt="Image"/>
                                    </div>
                                    <div class="cont">
                                        <a href="#"><h4>Basics of reactjs</h4></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* <!-- row --> */}
                           
                      
              
           
        </div> {/* <!-- container --> */}
    </section>
 </div>


       
    );
}

export default Cards1;
