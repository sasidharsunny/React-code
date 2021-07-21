import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyCart.css'
import Header from './Header/update2'

function MyCart(props) {
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
        <div>
          <Header></Header>
<div class="container mt-5 mb-5">

<div class="row">
<div class="col-md-12 p-2 border">
 <h4>Your Cart</h4>
</div>
</div>
<div class="row bg-light border">
   <div class="col-md-12">

<table class="table mt-2">
  <thead class="thead-light">
    <tr class="text-center">
      <th scope="col">Item</th>
      <th>Title</th>
      <th scope="col">Amount</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {data &&  data.map(val=> 
    <tr class="text-center">
      <td><img class="img-fluid cart-img" src="http://localhost/bhargavi/vsjit/edu.hrlooks.com/edu.hrlooks.com/uploads/course/372750406_1613218766.jpg" alt="" style={{width:'303px', height:'100%'}} /></td>
      <td>{val.title}</td>     
      <td>{val.fee}</td>
      <td><button type="button" class="btn btn-danger" onClick={()=> removeFromCart(val._id)}>delete</button></td>
    </tr>
  )}
  </tbody>
</table>
</div>
</div>

<div class="row pb-5  bg-light">
<div class="col-md-4  mt-5">
<div class="coupon-sec">
<h5 class="card-title">Coupon</h5>
<div class="form-group">
            <input type="text" name="user_name" id="user_name" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp" placeholder="Enter Coupon Code" />
          </div>
          <button type="button" class="btn btn-primary">Apply</button>
</div>
</div>
<div class="col-md-8 mt-5">

<table class="table table-light">
  <thead>
    <tr>
      <th scope="col">Total</th>
      <th scope="col text-right">00</th>
    </tr>
  </thead>
  </table>


 <div class="row mt-5">
<div class="col-md-8">
<h5><b><i class="fa fa-cart-plus" aria-hidden="true"></i> Continue Shopping</b></h5>
</div>
<div class="col-md-4">
<h5><button type="button" class="btn btn-success" onClick={()=> getEnrollCource()}><i class="fa fa-money" aria-hidden="true" ></i> Check Out</button></h5>
</div>
</div>
</div>
</div>

</div>

        </div>
    );
}

export default MyCart;