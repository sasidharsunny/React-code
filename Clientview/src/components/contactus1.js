import React from 'react';
import './contactus1.css'
import Header from './header'
function Contactus1(props) {
    return (
        <div>
            <Header/>
            <div class="container d-flex justify-content-center align-items-center">
    <div class="card">
        <div class="row">
            <div class="col-md-6">
                <div class="form">
                    <h2>Get in <span class="text-blue">Touch</span> </h2>
                    <div class="inputbox mt-3"> <span> Name</span> <input type="text" placeholder="Name" name="" class="form-control"/> </div>
                    <div class="inputbox mt-3"> <span>Email</span> <input type="text" placeholder="Email" name="" class="form-control"/> </div>
                    <div class="inputbox mt-3"> <span>Phone</span> <input type="text" placeholder="+1 455 445 4532" name="" class="form-control"/> </div>
                    <div class="inputbox mt-3"> <span>Message</span> <textarea class="form-control" rows="6" placeholder="Message" ng-model="message" name="message" required/> </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="text-right"> <button class="btn btn-primary">send message</button> </div> 
                    </div>
                    <div class="form-check mt-2"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-center mt-5"> <img src="https://gawvs.in//assets/img/login.png" width="360"/> </div>
            </div>
        </div>
    </div>
</div>


<div class="container address">
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
    <div class="col-lg-4 col-md-4 col-sm-4">
      <h3 class="text-left">Our  <span class="text-blue">Address</span></h3>
    
    
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

export default Contactus1;