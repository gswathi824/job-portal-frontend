import { useState } from "react";
import "./CreateJob.css";
import {useNavigate} from "react-router-dom"
export default function CreateJob() {
  const [form, setForm] = useState({
    jobName: "",
    jobDescription: "",
    projectName: "",
    location: "",
    skills: "",
    optionalSkills: "",
    employeeBand: "",
    experience: 0,
    positions: 0,
  });
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting", form);
    await fetch("http://localhost:8080/job/submitJobDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    navigate("/admin/home")
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Job Details Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="jobName" className="label">Job Name</label>
            <input
              type="text"
              id="jobName"
              name="jobName"
              value={form.jobName}
              onChange={handleChange}
              placeholder="Enter Job Name"
              className="input"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="jobDescription" className="label">Job Description</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            rows="6"
            value={form.jobDescription}
            onChange={handleChange}
            placeholder="Enter Job Description"
            className="textarea"
          />
        </div>

        <div className="form-group">
          <div className="input-group">
            <label htmlFor="projectName" className="label">Project Name</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={form.projectName}
              onChange={handleChange}
              placeholder="Enter Project Name"
              className="input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="location" className="label">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter Job Location"
              className="input"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <label htmlFor="skills" className="label">Skills</label>
            <textarea
              id="skills"
              name="skills"
              rows="6"
              value={form.skills}
              onChange={handleChange}
              placeholder="Enter Skills"
              className="textarea"
            />
          </div>
          <div className="input-group">
            <label htmlFor="optionalSkills" className="label">Optional Skills</label>
            <textarea
              id="optionalSkills"
              name="optionalSkills"
              rows="6"
              value={form.optionalSkills}
              onChange={handleChange}
              placeholder="Enter Optional Skills"
              className="textarea"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <label htmlFor="employeeBand" className="label">Employee Band</label>
            <input
              type="text"
              id="employeeBand"
              name="employeeBand"
              value={form.employeeBand}
              onChange={handleChange}
              placeholder="Enter Employee Band"
              className="input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="experience" className="label">Experience (in Months)</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              placeholder="Enter Experience"
              className="input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="positions" className="label">Positions</label>
            <input
              type="number"
              id="positions"
              name="positions"
              value={form.positions}
              onChange={handleChange}
              placeholder="Enter Positions"
              className="input"
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}
