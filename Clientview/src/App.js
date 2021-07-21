import React from 'react';
import './App.css';
import Home from './components/userdashboard/Home';
import Signin from './components/Signin';
import Registform from './components/registform';
import Footer1 from './components/userdashboard/footer1';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Forgotpassword from './components/Forgotpassword';
import Otp from './components/Otp';
import Changepassword from './components/Changepassword';
import EmailVerification from './components/EmailConfirmation'
import GoogleAuth from "./components/landing/Landing";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProfile from './components/UpdateProfile'
import UserList from './components/UserList'
import Verticaltab from "./components/verticaltab"
import Internheader from './components/internheader';
import Internshipfilter from './components/Internshipfilter';
import StudentDashboard from './components/Dashboard/StudentDashboard'
import CompanyDashboard from './components/Dashboard/CompanyDashboard'
import Testing from './Testing';
import MyInternship from './MyInternship'
import MyCart from './components/MyCart'
import Header from './components/Header/update2'
import Mynetwork from './components/mynetwork';
import Aboutus from './components/aboutus';
import Contactus from './components/contactus';
import Contactus1 from './components/contactus1';
import OrganizationDashboard from './components/OrganizationServices/Organizationdashboard'
import PostInternship from './components/OrganizationServices/PostInternships/Postinternship'
import Stepper from './components/OrganizationServices/UpdateInternship/stepper'

function App() {
  return (
    <div className="App">
    
    <Provider store={store}>
    <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} /> 
    <Route exact path="/vertical" component={Verticaltab} />
    <Route exact path="/internheader" component={Internheader} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/googleAuth" component={GoogleAuth} />
   <Route exact path="/join" component={Registform} />
    <Route exact path="/Forgotpassword" component={Forgotpassword}/>
    <Route exact path="/Otp" component={Otp}/>
    <Route exact path="/Changepassword" component={Changepassword}/>
    <Route exact path="/EmailVerification" component={EmailVerification}/>
    <Route exact path="/UpdateProfile/:id" component={UpdateProfile}/>
    <Route exact path="/UserList" component={UserList}/>
    <Route exact path="/Internshipfilter" component={Internshipfilter}/>
    <Route exact path="/StudentDashboard" component={StudentDashboard} />
    <Route exact path="/CompanyDashboard" component={CompanyDashboard} />
    <Route exact path="/Testing" component={Testing} />
    <Route exact path="/MyCart" component={MyCart} />
    <Route exact path="/MyInternship" component={MyInternship} />
    <Route exact path="/Header" component={Header} />
    <Route exact path="/OrganizationDashboard" component={OrganizationDashboard} />
    <Route exact path="/PostInternship" component={PostInternship} />
    <Route exact path="/network" component={Mynetwork} />
    <Route exact path="/aboutus" component={Aboutus} />
    <Route exact path="/footer1" component={Footer1} />
    <Route exact path="/contactus" component={Contactus} />
    <Route exact path="/contactus1" component={Contactus1} />
    <Route exact path="/OrganizationDashboard" component={OrganizationDashboard} />
    <Route exact path="/PostInternship" component={PostInternship} />
    <Route exact path="/Stepper" component={Stepper} />

    
</Switch>     

</BrowserRouter>
</Provider>
</div>
  );
}

export default App;
