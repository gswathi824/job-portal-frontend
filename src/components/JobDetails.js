import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./JobDetails.css";


export default function JobDetails(){

    const [jobList,setJobList] =useState([]);

    const navigate=useNavigate();

    useEffect(()=>{
        const fetchJobList=async ()=>{
         const res=await fetch("http://localhost:8080/job/get-job-details",
            {
                method:"GET",
                headers:{
                    "Content-Type": "application/json"
                }
            }
         )
         const data=await res.json();
         console.log("JobList",data);
         setJobList(prev=>{
            return [...data];
         })
        }
        fetchJobList();
    },

    [])
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this job?")) {
          await fetch(`http://localhost:8080/job/${id}`, {
            method: "DELETE",
          });
          setJobList(jobList.filter((job) => job.jobId !== id));
        }
      };
    
      const handleView = (id) => navigate(`/admin/view-job/${id}`);
      const handleEdit = (id) => navigate(`/admin/edit-job/${id}`);
    
      return (
        <div className="admin-container">
          <h1 className="admin-title">Job Listings</h1>
          {jobList.length === 0 ? (
            <p>No jobs available.</p>
          ) : (
            <div className="job-list">
              {jobList.map((job) => (
                <div key={job.jobId} className="job-card">
                  <div className="job-info">
                    <h3>{job.jobName}</h3>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Band:</strong> {job.employeeBand}</p>
                    <p><strong>Experience:</strong> {job.experience} months</p>
                    <p><strong>Skills:</strong> {job.skills}</p>
                  </div>
                  <div className="job-actions">
                    <button className="btn view" onClick={() => handleView(job.jobId)}>View</button>
                    <button className="btn edit" onClick={() => handleEdit(job.jobId)}>Edit</button>
                    <button className="btn delete" onClick={() => handleDelete(job.jobId)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* <Outlet/> */}
        </div>
      );
    }
 
    
    