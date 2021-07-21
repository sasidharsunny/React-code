import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
Grid:{
color: "white",
backgroundColor: "#2962ff",

padding: "50px",
},

  text: {
    padding: theme.spacing(2, 2, 0)
  },

  appBar: {
   
    top: "auto",
    bottom: 0,
    alignItems: 'center',
  }
  
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Grid container className={classes.Grid}> 
        <Grid  item xs={12} md={2.4} lg={2.4} sm={6}>
          <h6>QUICK LINKS</h6>
           <ul>
            <li>Pricing</li>
            <li>Directory</li>
            <li>Contact</li>
            <li>Business Opportunity</li>
            <li>Partner Login</li>
          </ul>
        </Grid>
        <Grid  item xs={12} md={2.4} lg={2.4} sm={6}>
          <h6>QUICK LINKS</h6>
           <ul>
            <li>Pricing</li>
            <li>Directory</li>
            <li>Contact</li>
            <li>Business Opportunity</li>
            <li>Partner Login</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={2.4} lg={2.4} sm={6}>

          <h6> BUSSINESS SOLUTION</h6>
         <ul>
            <li>Talent</li>
            <li>Marketing</li>
            <li>sales</li>
            <li>learning</li>
            <li>services</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={2.4} lg={2.4} sm={6}>
          <h6>DIRECTORIES</h6>
          
          <ul>
            <li>members</li>
            <li>jobs</li>
            <li>articles</li>
            <li>learning</li>
            <li>companies</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={2.4} lg={2.4} sm={6}>
          <h6>BROWSE INTERNSHIPS</h6>
           <ul>
            <li> Courses</li>
            <li>learning</li>
            <li>services</li>
            <li>careeer</li>
            <li>featured</li>
          </ul>
        </Grid>
      </Grid>
      <AppBar position="static" style={{backgroundColor: 'black'}} className={classes.appBar}>
        <Toolbar >
        <Typography variant="p">
          

<div class="container">
<div class="row">
<div class="col-md-12 text-center">
<p>Albenus Job Portal © 2021</p>
Copyright © 2021 Albenus All Rights Reserved
</div>
</div>
</div>
      
          </Typography></Toolbar>
      </AppBar>
    </React.Fragment>
  );
}