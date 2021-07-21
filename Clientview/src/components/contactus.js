import React from 'react';
import './contactus.css';
import Header from './header'

function Contactus() {
    return (
        <div>
<Header/>
                 <div class="box">
    <div class="logo">
         </div>
    <div class="text">
    <h1 style={{textAlign: 'center'}}>Contact <span class="text-blue">Us</span></h1>
    
    <p  style={{textAlign: 'center'}}>Have Questions ? We have answers ( may be )</p>
    </div>
  </div>

  <div class="touch">
    <h2>Get in  <span class="text-blue">touch</span></h2>
    
  </div>
  
  <form  name="contact-form">
  <div class="container form-margin">
    <div class="row">
    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>     <div class="col-lg-4 col-md-4 col-sm-4">
      <div class="form-group">
    <input type="text" class="form-control" placeholder="First Name" ng-model="firstname" name="firstname" required/>    
      </div>
    <div class="form-group">
    <input type="text" class="form-control" placeholder="internship" ng-model="company" name="company" required/>    
      </div>
    <div class="form-group">
    <input type="text" class="form-control" placeholder="Phone" ng-model="phone" name="firstname" required/>    
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4">
      <div class="form-group">
    <input type="text" class="form-control" placeholder="Last Name" ng-model="lastname" name="lastname" required/>    
      </div>
      <div class="form-group">
    <input type="email" class="form-control" placeholder="E-mail" ng-model="email" name="email" required/>    
      </div>
      <div class="form-group">
    <input type="text" class="form-control" placeholder="Duration" ng-model="course" name="course" required/>    
      </div>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
    </div>
  </div>
  
  <div class="container">
    <div class="row">
    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
    <div class="col-lg-8 col-md-8 col-sm-8">
      <div class="form-group">
    <textarea class="form-control" rows="6" placeholder="Message" ng-model="message" name="message" required/>
  </div>  
      <div class="pager">
      <button type="submit" class="btn btn-primary">SEND MESSAGE</button>
      </div>
      </div>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
  
  </div>
  </form>

  <div class="container address">
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
    <div class="col-lg-4 col-md-4 col-sm-4">
      <h3 style={{textAlign: 'left'}}>Our <span class="text-blue">Address</span></h3>
      <div class="redline-address"></div>
      <p class="font-italic text-muted mb-4">Manjeera Trinity Corporate, Hyderabad- 500072, Telangana, India.<span>  <p><span class="glyphicon glyphicon-envelope"> </span> info@albenus.com</p></span><span>  <p><span class="glyphicon glyphicon-envelope"> </span> 7789765654</p></span>
    </p>
     
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.019213593812!2d77.62060731482127!3d12.906485990898592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14eed2a26dbb%3A0x98f64960052a26b0!2sTrainingMug!5e0!3m2!1sen!2sin!4v1504259922701" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>

    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>

  </div>
  
  <div class="bottom-gap"></div>
  
        </div>
    );
}

export default Contactus;