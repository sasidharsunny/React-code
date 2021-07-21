import React from 'react';
import './footer1.css'
import {Link} from 'react-router-dom';
function Footer1(props) {
    return (
        <div>
             {/* <div class="container-fluid flex-grow-1 ">
     <div class="row py-5">
         <div class="col-lg-12 text-white text-center">
             <h1 class="display-3 ">Bootstrap footer</h1>
             <p class="lead mb-0">This footer is created by using Bootstrap.</p>
             <p class="lead py-3">Snippet by BBBootstrap.</p>
         </div>
     </div>
 </div> */}
 <footer class="bg5">
     <div class="container py-5">
         <div class="row py-3">
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Quick Links</h6>
                 <ul class="list-unstyled mb-0">
                     <Link to="/contactus">
                     <li class="mb-2"><a href="#">Contact Us</a></li>
                     </Link>
                     <Link to="/aboutus">
                     <li class="mb-2"><a href="#" >About Us</a></li>
                     </Link>
                     
                 </ul>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Connect</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><a href="#" >People</a></li>
                     <li class="mb-2"><a href="#" >Professors</a></li>
                     <li class="mb-2"><a href="#" >Proffisionals</a></li>
                    
                 </ul>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Legal</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><a href="#" >Return Policy</a></li>
                     <li class="mb-2"><a href="#" >Terms Of Use</a></li>
                     <li class="mb-2"><a href="#" >Security</a></li>
                     <li class="mb-2"><a href="#" >Privacy</a></li>
                 </ul>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Browse</h6>
                 <ul class="list-unstyled mb-0">
                     <Link to="/signin">
                     <li class="mb-2"><a href="#" >Careers</a></li>
                     </Link>
                     <Link to='/signin'>
                     <li class="mb-2"><a href="#" >Learning</a></li>
                     </Link>
                     <Link to="/signin">
                     <li class="mb-2"><a href="#">Internships</a></li>
                     </Link>
                 </ul>
             </div>
             <div class="col-lg-4 col-md-6 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">News Letters</h6>
                 <ul>
                <li class="mb-2" style={{color:"white"}}><a href="#" ></a>Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing listically</li>
                 </ul>
                 <ul class="list-inline mt-4">
                     <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fab fa-2x fa-twitter"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fab fa-2x fa-facebook-f"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fab fa-2x fa-instagram"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fab fa-2x fa-youtube"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fab fa-2x fa-google"></i></a></li>
                 </ul>
             </div>
           
         </div>
     </div>
     <hr class="p-0 m-0 b-0"/>
     <div class="bg-light ">
         <div class= "text-center">
             <p class="mb-0 py-2" style={{textAlign:"center",color:"blue",backgroundColor:"#0e425f"}}>Copyright © 2021 Albenus All Rights Reserved.</p>
         </div>
     </div>
 </footer>
        </div>
    );
}

export default Footer1;