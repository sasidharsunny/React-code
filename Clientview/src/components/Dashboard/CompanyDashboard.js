import React from 'react';
import { useHistory } from "react-router-dom";
import { signout, isAuthenticated } from '../auth';
import OrganizationDashboard from '../OrganizationServices/Organizationdashboard'

function CompanyDashboard(props) {
    let history = useHistory();
    return (
        <div>
            {/* <div className="jumbotron" style={{textAlign:'center', margin:'100px'}}>
            {isAuthenticated() && (
                <button style={{float:'right'}}
                onClick={() =>
                    signout(() => {
                        alert("Signout Success !!")
                        history.push("/");
                    })
                }>Signout</button>
                )}
                <h2>Organization Dashboard</h2>
                <p className="lead">Organization Dashboard</p>
            </div> */}
            <OrganizationDashboard></OrganizationDashboard>
        </div>
    );
}

export default CompanyDashboard;