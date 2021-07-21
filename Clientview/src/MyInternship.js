import React, { useState, useEffect }  from 'react';

import './MyInternship.css'
import image from '../src/components/images/nodejs.png'
import axios from 'axios';
import Header from './components/Header/update2'


function MyInternship(props) {
    const [data, setData] = useState('');

    useEffect(async () => {
        const jwt = JSON.parse(localStorage.getItem("jwt"))
        const userId = jwt.user._id
        const resultData = await axios.get(`http://localhost:5000/my-enrolled-internship/${userId}`)
          // setData(resultData.data[0].internships);
        // console.log("Data",resultData.data[0].internships)
        console.log("EDXS", resultData)
        setData(resultData.data)
          }, []);
    return (
        <div>
         <Header></Header>   
<div className="container mt-5">
<div className="row">
<div className="col-md-12  mt-5 mb-5 text-center">
<h1>My Internships</h1>
<hr></hr>
</div>
</div>
<div className="row">
{data &&  data.map(val=>
<div className="col-md-3">
<div className="course-box">
            <div className="course-img-box teradata">
            <img className="img-fluid img" src={image} alt="" style={{width:'255px', height:'100%'}} />
            </div>
                <h4 className="font-18 blue-color text-left pl-2 pr-2 mt-3" style={{minHeight:'60px'}}>{val.title}</h4>
                <h4 className="font-18 blue-color text-left pl-2 pr-2" mt-1="">Instructor :John</h4>
            <div className="clearfix pl-2 pr-2 pb-3">
            <div className="font-weight-normal float-left" style={{color:' red'}}>Amount: <i></i>Free&nbsp; </div>
                 <p className="btn btn-primary float-right btn-sm"><i className="fa fa-info-circle"></i>Details</p>
            </div>
</div>
</div>
)}
</div>
</div>
</div>
    );
}

export default MyInternship;