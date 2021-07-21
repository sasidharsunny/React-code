const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirm_password = !isEmpty(data.confirm_password) ? data.confirm_password : "";
  data.qualification = !isEmpty(data.qualification) ? data.qualification : "";
  data.university = !isEmpty(data.university) ? data.university : "";
  data.location = !isEmpty(data.location) ? data.location : "";

  // Name checks
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "FirstName field is required";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "LastName field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Mobile number is required";
  }
  if (!Validator.isLength(data.phone, { min: 10, max: 14 })) {
    errors.phone = "mobile number must be at least 10 digits";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.confirm_password)) {
    errors.confirm_password = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.confirm_password)) {
    errors.confirm_password = "Passwords must match";
  }
  
  // if (Validator.isEmpty(data.qualification)) {
  //   errors.qualification = "please select qualification ";
  // }

  // if (Validator.isEmpty(data.university)) {
  //   errors.university = "Please enter University Name";
  // }

  if (Validator.isEmpty(data.location)) {
    errors.location = "Please enter Location";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
