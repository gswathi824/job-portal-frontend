import React, { useState } from 'react';
import './UserHomePage.css';
import {Outlet} from 'react-router-dom'

const UserHomePage = () => {
  const [formData, setFormData] = useState({
    jobId: '',
    jobName: '',
    location: '',
    projectName: '',
    skills: '',
  });

  const [jobList, setJobList] = useState([]); // Populate with API call

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res=await fetch("http://localhost:8080/user/job-search/process",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
     res.json().then((data)=>setJobList([...data])).catch((error)=>console.log(error));
  };

  return (
    <>
      <nav>
        <ul>
          <li><a href="/user/job-search-form">Apply Job</a></li>
          <li><a href="/user/view-profiles">My Profiles</a></li>
          <li><a href="/user/create-profile">Create Profile</a></li>
          <li><a href="/user/logout">Logout</a></li>
        </ul>
      </nav>

      <div className="container">
        <Outlet/>
      </div>
     
    </>
  );
};

export default UserHomePage;
