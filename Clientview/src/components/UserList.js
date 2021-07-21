import React, {useState} from 'react';
import '.././UserProfile/UserList.css'
import image from '../components/images/pic1.jpg'
import InternHeader from '../components/Header/update2'
import Footer from './footer1'

function UserList(props) {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('UserData')));


    return (
        <div>
             <InternHeader/>
             <div class="userlistbanner">
       

       
            <div class="container">
                <h2 style={{marginBottom:'40px', marginTop:'40px',color:"#106695"}}>{data.length} Results found..</h2>
                <div>
                {data && data.map(item =>
 
 
 <div class="product">
    <div>
      <img src={image} />
    </div>
    <div class="product-info">
      <div class="product-content">
        <h5>{item.firstname}</h5>
        <ul>
          <span><p> {item.email}</p></span>
         <p>{item.phone}</p> 
         <p> {item.location}</p>



         <div class="buttons">
             
             <button type="button" class="btn btn-primary btn-sm">Send message</button>
             </div>
        </ul>

   
      </div>
    </div>
      </div> 
      
                )} 
     
             
      </div> 
    
</div>
</div>
<Footer/>
</div>
    );
}

export default UserList;