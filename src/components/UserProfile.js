import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './UserProfile.css';

const UserProfile = () => {
    const [profileDetails, setProfileDetails] = useState({
        profileName: '',
        firstName: '',
        lastName: '',
        gender: 'Male',
        qualification: '',
        experience: '',
        dateOfBirth: '',
        emailId: '',
        phoneNo: '',
        skills: '',
        location: ''
    });
     const navigate=useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileDetails({
            ...profileDetails,
            [name]: value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // You can handle the form submission here (e.g., send data to the server)
       const res= await fetch("http://localhost:8080/user/save-profile",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(profileDetails)
        })
        console.log(res);
        navigate("/user")
    };

    return (
        <div className="container">
            <h2>Create Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div>
                        <label htmlFor="profileName">Profile Name</label>
                        <input 
                            type="text" 
                            id="profileName" 
                            name="profileName"
                            value={profileDetails.profileName} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName"
                            value={profileDetails.firstName} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName"
                            value={profileDetails.lastName} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                </div>
                
                <div className="form-group">
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <select 
                            id="gender" 
                            name="gender"
                            value={profileDetails.gender} 
                            onChange={handleChange}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="qualification">Qualification</label>
                        <input 
                            type="text" 
                            id="qualification" 
                            name="qualification"
                            value={profileDetails.qualification} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="experience">Experience (Years)</label>
                        <input 
                            type="number" 
                            id="experience" 
                            name="experience"
                            value={profileDetails.experience} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                </div>
                
                <div className="form-group">
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input 
                            type="date" 
                            id="dateOfBirth" 
                            name="dateOfBirth"
                            value={profileDetails.dateOfBirth} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="emailId">Email</label>
                        <input 
                            type="email" 
                            id="emailId" 
                            name="emailId"
                            value={profileDetails.emailId} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNo">Phone Number</label>
                        <input 
                            type="text" 
                            id="phoneNo" 
                            name="phoneNo"
                            value={profileDetails.phoneNo} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                </div>
                
                <div className="form-group">
                    <div>
                        <label htmlFor="skills">Skills (comma separated)</label>
                        <input 
                            type="text" 
                            id="skills" 
                            name="skills"
                            value={profileDetails.skills} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input 
                            type="text" 
                            id="location" 
                            name="location"
                            value={profileDetails.location} 
                            onChange={handleChange}
                            required 
                        />
                    </div>
                </div>
                
                <input type="submit" className="submit-btn" value="Create Profile" />
            </form>
        </div>
    );
};

export default UserProfile;
