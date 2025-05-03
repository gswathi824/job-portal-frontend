import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ViewProfiles.css';

const JobProfiles = () => {
    const [profileList,setProfileList]=useState([]);
    const navigate=useNavigate();
    const params=useParams();
    useEffect(()=>{
        const fetchProfiles=async()=>{
            let jobId=+params.id;
            const res=await fetch(`http://localhost:8080/job/view-profiles/${jobId}`,{
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

   async function handleDeleteProfile(profileId){
      const res= await fetch(`http://localhost:8080/user/delete-profile/${profileId}`,{
        method:"DELETE"
       })
       console.log(res);
       setProfileList(profileList.filter(profile=>profile.profileId!==profileId));
       navigate("/user/view-profiles")
    }
  return (
    <div>
      

      <div className="profiles-container">
        {profileList && profileList.length > 0 ? (
          profileList.map((profile) => (
            <div key={profile.profileId} className="profile-card">
              <div className="profile-header">
                {profile.profileId}: {profile.profileName}
              </div>
              <div className="profile-details">
                <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
                <p><strong>Location:</strong> {profile.location}</p>
                <p><strong>Experience:</strong> {profile.experience} months</p>
                <p><strong>Skills:</strong> {profile.skills}</p>
                <p><strong style={{"color":"orange"}}>Status:Pending</strong></p>
              </div>
              <div className="profile-actions">
                <button className="edit-btn">
                  <a href={`/user/edit-profile/${profile.profileId}`}>Edit</a>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No profiles found.</p>
        )}
      </div>
    </div>
  );
};

export default JobProfiles;
