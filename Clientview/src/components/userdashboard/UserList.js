import React, {useState} from 'react';
import '.././UserProfile/UserList.css'
import image from '../components/images/propic.jpg'
import InternHeader from '../components/Header/update2'

function UserList(props) {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('UserData')));


    return (
        <div>
             <InternHeader/>
             <div class="userlistbanner">
       

       
            <div class="container">
                <h2 style={{marginBottom:'40px', marginTop:'40px',color:"blue"}}>{data.length} Results found..</h2>
                <div>
                {data && data.map(item =>
  <div class="product">
    <div class="img-container">
      <img src={image} />
    </div>
    <div class="product-info">
      <div class="product-content">
        <p>{item.firstname}</p>
        <ul>
          <li>Email: {item.email}</li>
          <li>Phone: {item.phone}</li>
          <li>location: {item.location}</li>
        </ul>
        <div class="buttons">
        
        </div>
      </div>
    </div>
      </div> 
                )} 
      </div> 
</div>
</div>
</div>
    );
}

export default UserList;