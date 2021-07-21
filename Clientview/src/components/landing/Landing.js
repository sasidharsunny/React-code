import React from "react";
import { connect } from "react-redux";

import { setCurrentUser } from "../../actions/authActions";

import "./Landing.css";

class Landing extends React.Component {
  async componentDidMount() {
    await this.props.setCurrentUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
              <>
                {isAuthenticated ? (
                  <div>
                  </div>
                ) : (
                  <div className="google-btn-container">
                    <a href="/auth/google">
                      <div className="google-btn">
                        <div className="google-icon-wrapper">
                          <img
                            className="google-icon"
                            
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="signin"
                          />
                        </div>
                        <p className="btn-text">
                          
                       <i class="fa fa-google" aria-hidden="true"></i>
                          <b>Log in with Google</b>
                        </p>
                      </div>
                    </a>
                  </div>
                )}
              </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(Landing);
