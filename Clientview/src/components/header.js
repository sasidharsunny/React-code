import React from 'react';
import { Link } from "react-router-dom";

function header() {
    return (
        <div>
            
     
            <header class="bg-blue">
        <nav class="navbar navbar-expand-lg navbar-dark bg-blue">
            <div class="container">
<Link to="/">
        <a class="navbar-brand" href="#"><span>TECH PORTAL</span></a>
        </Link>
             
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
     
            
            </div>
          </nav>
      </header>









        </div>
    );
}

export default header;