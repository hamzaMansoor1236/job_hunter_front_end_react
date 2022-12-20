import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./UserDashBoard.css";
import UserPreferences from "../ChildComponents/UserPreferences";

function UserDashboard() {
  

  //variable to navigate to the desired route
  var navigate = useNavigate();
  ///////////////////////////////////////////////////////////////////

  //variable to hold section heading
  var [sectionHeading, setSectionHeading] = useState("Please select action");
  ///////////////////////////////////////////////////////////////////

  //variable to hold section heading
  var [sectionPreference, setSectionPreference] = useState(false);
  ///////////////////////////////////////////////////////////////////

  //variable to hold section heading
  var [sectionJobAlerts, setSectionJobAlerts] = useState(false);
  ///////////////////////////////////////////////////////////////////

  //function deals preferences
  function dealPreferencesSection() {
    setSectionHeading("User Preferences");
    setSectionJobAlerts(false);
    setSectionPreference(true);
  }

  //function deals preferences
  function dealJobAlertsSection() {
    setSectionHeading("Job Alerts Matching Your Profile");
    setSectionPreference(false);
    setSectionJobAlerts(true);
  }

  return (
    <div className="mt-2">
      <nav className="navbar  ">
        <div className="container-fluid">
          <p className="navbar-brand text-primary customP">
            <b className="mx-3"> Dashboard</b>
          </p>
          <form className="d-flex">
            <button
              className="btn btn-outline-primary custom"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>

      <div className="sidebar">
        <a className="border " href="#home" onClick={dealPreferencesSection}>
          Set Preferences
        </a>
        <a className="border " href="#news" onClick={dealJobAlertsSection}>
          Job Alerts
        </a>
        <a className="border " href="#contact">
          Contact
        </a>
        <a className="border " href="#about">
          About
        </a>
      </div>

      <div className="content border border bg-light">
        <div>
          <h4 className="text-primary ">{sectionHeading}</h4>
        </div>
        {/* Condidtional REndering the  */}
        {sectionPreference ? (
          <div>
            <UserPreferences
              setSectionHeading={setSectionHeading}
              setSectionPreference={setSectionPreference}
            ></UserPreferences>
          </div>
        ) : null}

        {/* Condidtional REndering the  */}
        {sectionJobAlerts ? (
          <div>
            
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UserDashboard;
