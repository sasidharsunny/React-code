import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image4 from '../images/link1.svg';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({



      bgimg:{
       backgroundImage:`url(${Image4})`,
       backgroundSize: "cover",
       height: "800px",
       width: "100%",
       marginBottom: "10px",
       textAlign: "center",
       paddingTop: '120px',
       margin: "auto", 
       color: "white",
      },
}));
function Linkedin(props) {
    const classes = useStyles();
    return (
        <div>
           
             <div className={classes.bgimg}>
             <h1 style={{textAlign: 'center',paddingTop:"50px",color:"#000",fontSize:"2.2rem",  fontWeight: "bold"}}>Join to our Tech community</h1>
             </div>

</div>


















        
    );
}

export default Linkedin;