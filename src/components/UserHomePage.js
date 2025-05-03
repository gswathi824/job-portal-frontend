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
          <li><a href="/user/apply-job">Apply Job</a></li>
          <li><a href="/user/view-profiles">My Profiles</a></li>
          <li><a href="/user/create-profile">Create Profile</a></li>
          <li><a href="/user/logout">Logout</a></li>
        </ul>
      </nav>

      <div className="container">
        <h2>Job Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="jobId">Job ID</label>
              <input type="text" name="jobId" value={formData.jobId} onChange={handleChange} placeholder="Enter Job ID" required />
            </div>
            <div>
              <label htmlFor="jobName">Job Name</label>
              <input type="text" name="jobName" value={formData.jobName} onChange={handleChange} placeholder="Enter Job Name" required />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter Location" required />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="projectName">Project Name</label>
              <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} placeholder="Enter Project Name" required />
            </div>
            <div>
              <label htmlFor="skills">Skills</label>
              <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Enter Skills" required />
            </div>
            <div>
              <label>&nbsp;</label>
              <input type="submit" className="submit-btn" value="Submit Job Application" />
            </div>
          </div>
        </form>
      </div>

      <div className="job-listing-container">
        {jobList.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Job Name</th>
                <th>Project Name</th>
                <th>Location</th>
                <th>Experience (Months)</th>
                <th>Positions</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobList.map((job) => (
                <tr key={job.jobId}>
                  <td>{job.jobName}</td>
                  <td>{job.projectName}</td>
                  <td>{job.location}</td>
                  <td>{job.experience}</td>
                  <td>{job.positions}</td>
                  <td>
                    <button><a href={`/user/apply-job/${job.jobId}`}>Apply</a></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-jobs">
            <p>No jobs available.</p>
          </div>
        )}
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  );
};

export default UserHomePage;
