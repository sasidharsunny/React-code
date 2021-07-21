import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Testing.css'


function Testing(props) {
    const [data, setData] = useState('');

    useEffect(async () => {
    const jwt = JSON.parse(localStorage.getItem("jwt"))
    const userId = jwt.user._id
    const resultData = await axios.get(`http://localhost:5000/cart/${userId}`)
  	// setData(resultData.data[0].internships);
    // console.log("Data",resultData.data[0].internships)
    setData(resultData.data)
  	}, []);
     
    const removeFromCart = async(value) => {
      const Id = value
      const resultData = await axios.get(`http://localhost:5000/cart/${Id}/delete`)
      window.location.reload(false);
      console.log("Removed Item",resultData.data )
    }

    const getEnrollCource = async() => {
      const jwt = JSON.parse(localStorage.getItem("jwt"))
      const userId = jwt.user._id
      const resultData = await axios.get(`http://localhost:5000/enroll-cource/${userId}`)
      console.log("resultData.data", resultData.data)
      alert("Congrat! Enrollment Successfull..")    
    }
      return (
        <>
    
          <div className="main">
            <h1>Cart</h1>
            <p>You have { !!data?.length ? data.length : 0} Internships in your cart</p>
          <table>
          <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Organization</th>
          <th>Amount</th>
          <th></th>
          </tr>
          {data &&  data.map(val=> 
          <tr>
          <td>{val.image}</td> 
          <td>{val.title}</td>
          <td>{val.organization}</td>
          <td>{val.fee}</td>
          <td><button class="button button3" onClick={()=> removeFromCart(val._id)}>Delete</button></td>
          </tr>
          )} 
          </table>       
          <button class="buttonEnroll" onClick={()=> getEnrollCource()}>Enroll for Free</button>
        </div>
        </>
      );
    }

export default Testing;