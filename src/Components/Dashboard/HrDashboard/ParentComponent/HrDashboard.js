import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HrDashboard.css";
import PostJOb from "../ChildComponets/postJobComponent";
import ManageJobs from "../ChildComponets/ManageJobs";

function HRDashboard() {
  var navigate = useNavigate();

  useEffect(()=>{
    abc();
  },[]);

  function abc(){
    console.log("Hello World");
    var present=localStorage.getItem('hr_id')
    console.log("value of present = ",present)
    if(present==null)
    {
      navigate('/hrlogin')
    }

  }

 
  var [sectionHeading, setSectionHeading] = useState("Please select action ");
  var [postJobSection, setPostJobSection] = useState(false);
  var [manageJobSection, setManageJobSection] = useState(false);
 


  function dealHome() {
    setPostJobSection(true);
    setManageJobSection(false);
    setSectionHeading("Post Job");
  }
  function dealNews() {
    setPostJobSection(false);
    setManageJobSection(true);
    setSectionHeading("Manage Job Postings");
  }

  return (
    <div className=" mt-1">
      <nav className="navbar  ">
        <div className="container-fluid">
          <p className="navbar-brand text-success customP">
            <b className="mx-3"> Dashboard</b>
          </p>
          <form className="d-flex">
            <button
              className="btn btn-outline-success custom"
              onClick={() => {
                localStorage.clear();
                navigate("/hrLogin");
              }}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>

      <div className="conatiner">
        <div className="sidebaar">
          <a className="border " href="#home" onClick={dealHome}>
            Post Job
          </a>
          <a className="border " href="#news" onClick={dealNews}>
            Manage Jobs
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
            <h4 className="text-success ">{sectionHeading}</h4>
          </div>
          {/* Condidtional REndering the  */}
          {postJobSection ? (
            <div>
              <PostJOb
                handleDisplay={setPostJobSection}
                sectionHeading={setSectionHeading}
              ></PostJOb>
            </div>
          ) : null}

          {manageJobSection ? (
           <ManageJobs handleDisplay={setManageJobSection} sectionHeading={setSectionHeading}></ManageJobs>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;
