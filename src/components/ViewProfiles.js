import React, { useEffect, useState } from 'react';
import './ViewProfiles.css';

const ViewProfiles = () => {
    const [profileList,setProfileList]=useState([]);
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
              </div>
              <div className="profile-actions">
                <button className="edit-btn">
                  <a href={`/user/edit-profile/${profile.profileId}`}>Edit</a>
                </button>
                <button className="delete-btn">
                  <a href={`/user/delete-profile/${profile.profileId}`}>Delete</a>
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

export default ViewProfiles;
