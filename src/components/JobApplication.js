import React, { useState,useEffect } from 'react';
import './JobApplication.css'
import { useParams } from 'react-router-dom';

const JobApplication = () => {
  const [job, setJob] = useState({
  });
  const[profileId,setProfileId]=useState(0);
  const params=useParams();

  const [profileList,setProfileList]=useState([]);
  useEffect(()=>{
    let jobId=+params.id;
    const fetchJob=async()=>{
        const res=await fetch(`http://localhost:8080/job/${jobId}`,{
            method:"GET"
        });
        res.json().then((data)=>setJob({...data}));
    }
    fetchJob()

  },[])
     useEffect(()=>{
         const fetchProfiles=async()=>{
             const res=await fetch("http://localhost:8080/user/view-profiles",{
                 method:"GET",
                 headers:{
                     "Content-type":"application/json"
                 }
             });
             const data=res.json();
             data.then((data)=>{
                 setProfileList(()=> [...data]);
             })
             
 
         }
         fetchProfiles();
     },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   const res= await fetch(`http://localhost:8080/job/apply-job/${profileId}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(job)
    });
    console.log(res.json())
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="fieldGroup">
          <label htmlFor="jobId">Job ID</label>
          <input
            type="number"
            name="jobId"
            id="jobId"
            value={job.jobId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fieldGroup">
          <label htmlFor="jobName">Job Name</label>
          <input
            type="text"
            name="jobName"
            id="jobName"
            value={job.jobName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fieldGroup">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            name="jobDescription"
            id="jobDescription"
            rows="5"
            value={job.jobDescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className="fieldGroup">
          <label htmlFor="selectedProfileId">Select Profile</label>
          <select
            name="selectedProfileId"
            id="selectedProfileId"
            value={profileId}
            onChange={(event)=>setProfileId(event.target.value)}
            required
          >
            <option value="">-- Select --</option>
            {profileList.map(profile => (
              <option key={profile.profileId} value={profile.profileId}>
                {profile.profileName}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default JobApplication;
