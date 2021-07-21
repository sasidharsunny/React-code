const sendMail = require("./nodemail")


const verifyEmail = function(mailDetails){
    let EmailObject = {
        from: 'sk.sonu4526@gmail.com',
        subject: 'Verify Email',
    }
    let confirmationLink = `http://localhost:5000/auth/verify/${mailDetails.token}`
    Object.assign(EmailObject, {
        to : mailDetails.email,
        html: `
        <html>
        <style>
        .button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        }

        .button2 {width: 50%;}
        </style>
        <center><h1>Welcome to Tech Portal, ${mailDetails.name}!</h1></center>
        <center><p>Your account is almost ready.</p></center>
        <center><button type ="submit" class="button button2"><a href="https://www.mongodb.com/"><b>Activate your account</b></a></button></center><br><hr></hr></br></br>
        You can also paste the following link into your browser: </br> ${confirmationLink}</br></br></br>

        Cheers,</br>
        Team Albenus
        </html>`
    })
    console.log(EmailObject)
    return sendMail.sendMail(EmailObject)
}

const forgetPasswordEmail = function(mailDetails){
    let EmailObject = {
        from: 'sonuverman@gmail.com',
        subject: 'Forget password email',
    }
    console.log(mailDetails.otp)
    Object.assign(EmailObject, {
        to : mailDetails.email,
        html: `
        <html>
          <h1>Validate OTP(One Time Passcode)</h1>
          <p>Below is your one time passcode</p>
          <h2>${mailDetails.otp}</h2></br></br></br>
          <p>We're here to help if you need it. Visit the Ablenus Support for more or contact us.</p></br></br><hr></hr>
          Cheers,</br>
          Team Albenus

        </html>`
    })
    return sendMail.sendMail(EmailObject)
}

const soldOutMail = function(mailDetails){
    let EmailObject = {
        from: 'sonuverman@gmail.com',
        subject: 'Internship Enrollment',
    }
    console.log(mailDetails)
    Object.assign(EmailObject, {
        to : mailDetails,
        html: `
        <html>
          <h1>Congrates ! Your Internship Post has been Enrolled .</h1>
          <p>Below is the details of the enrolled user...</p>
          <h4>Cource Name    :     Backend Development </h4>
          <h5>User Name      :     Sonu Verman</h5>
          <h5>Contact        :     7389748343</h5>
          <h5>Email          :     sonu.verman@albenus.com</h5><hr></hr>
          Cheers,</br>
          Team Albenus
          <p>We're here to help if you need it. Visit the Ablenus Support for more or contact us.</p></br></br>
          

        </html>`
    })
    return sendMail.sendMail(EmailObject)
}


module.exports  = {
    verifyEmail,
    forgetPasswordEmail,
    soldOutMail
}