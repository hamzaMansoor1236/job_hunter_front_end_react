import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./HrLogin.css";
function HrLogin() {
  //array to fetch all the Hr's data
  var [hrArr, setHrArr] = useState([]);

  //regular expression for email validation
  let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  //state of the Email and Password
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  //boolean for form submission alert
  var [isSubmit, setSubmit] = useState(false);

  //boolean for email error alert
  var [emailOk, setEmailOk] = useState(true);

  //variable to check is the user is found
  var userFound = false;

  //navigation handling to the Userdashboard
  var navigate = useNavigate();

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:5000/HR", { headers })
      .then((response) => response.json())
      .then((data) => {
        setHrArr(data);
      });
  }, []);

  //validationg Email
  function dealEmail(e) {
    setEmail(e.target.value);
    if (regexEmail.test(email)) {
      console.log("good Email");
      setEmailOk(true);
    } else {
      setEmailOk(false);
    }
  }

  //navigating to userDashboard
  function nav() {
    navigate("/HRDashboard");
  }

  //handling the submission of form
  function handleSubmit(e) {
    e.preventDefault();

    //validating the fields
    if (emailOk) {
      for (var i = 0; i < hrArr.length; i++) {
        if (hrArr[i].email === email && hrArr[i].password === password) {
          console.log("User Match");
          setSubmit(true);
          localStorage.setItem('hr_id',hrArr[i].id);
          localStorage.setItem('username',hrArr[i].user_name)

          userFound = true;
          break;
        }
      }

      //verifying user in database
      if (userFound) {
        setTimeout(nav, 1500);
      } else {
        alert("User not found Please Check Credentials");
      }
      //////////////////////////////////////////////////////////////
    } else {
      alert("The email format is not OK");
    }
    /////////////////////////////////////////////////////////////////
  }

  return (
    <div className="container  mt-5">
      {/* If isSubmit true show success alert */}
      {isSubmit ? (
        <div
          className="alert alert-success text-success text-center"
          role="alert"
        >
          Login Successful
        </div>
      ) : null}
      {/* /////////////////////////////////////////////////////////// */}
      <h1 className="text-success">HR Login</h1>
      <br></br>
      {/* form */}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {/* Email input field */}
        <div className="form-group">
          <label>
            <b className="text-success">Email address:</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email address"
            required
            onChange={(e) => {
              dealEmail(e);
            }}
          />
          {/* /////////////////////////////////////////////////////// */}
          {/* If email is invalid Error message  */}
          {!emailOk ? (
            <div
              className="alert alert-danger text-danger text-center"
              role="alert"
            >
              The email format is incorrect!!
            </div>
          ) : null}
          {/* /////////////////////////////////////////////////////// */}
        </div>
        {/* ///////////////////////////////////////////////////////// */}
        <br></br>
        {/* password input field */}
        <div className="form-group">
          <label>
            <b className="text-success">Password:</b>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your email password"
            required
            minLength={3}
            maxLength={16}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* ///////////////////////////////////////////////////////// */}
        <br></br>
        {/* button login and sign up */}
        <button type="submit" className="btn btn-outline-success custom">
          Login
        </button>
        <button
          type="submit"
          className="btn btn-outline-success custom mx-4"
          onClick={() => {
            navigate("/hrsignup");
          }}
        >
          Sign up
        </button>
        {/* ///////////////////////////////////////////////////////// */}
        <br></br>
        <br></br>
      </form>
      {/* /////////////////////////////////////////////////////////// */}
    </div>
  );
}
export default HrLogin;
