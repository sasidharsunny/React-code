import React from 'react';
import {Link} from 'react-router-dom';


function Emailconfirmation(){
    return(
     <div class="container" style={{textAlign:"center",boxSizing:"border-box",borderLeft:"1px solid#c1c1c2",borderRight:"1px solid#c1c1c2",borderTop:"2px solid#c1c1c2",borderBottom:"2px solid#c1c1c2", marginTop:'50px', marginBottom:'250px'}}>
         <div>
             <div>
                 <img src="https://clipartart.com/images/animation-clipart-success-4.gif"alt="success" style={{ height:"130px",width:"130px"}}/> </div>
         <h4 style={{fontFamily: "Serif"}}>Account Email Address confirmed</h4><br/>
         <h6 style={{color:"solid#c1c1c2"}}>Congratulations! Your account email address has been successfully confirmed.</h6><br/>

         <Link to="/Login"><input type="button" name="Login" value="Login" id="Login" style={{width:"200px",backgroundColor:"#007bff",border:"none",color: "white",fontFamily: 'Helvetica',borderRadius:"5px"}}/></Link>
        
        <br/>
        <br/>
         </div>
         <div>

         </div>
    </div>
    )
}
export default Emailconfirmation