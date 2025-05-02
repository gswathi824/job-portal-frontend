import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./EditJob.css";

export default function EditJob({ onSubmit }) {
  const [form, setForm] = useState({
    jobId: "",
    jobName: "",
    jobDescription: "",
    projectName: "",
    location: "",
    skills: "",
    optionalSkills: "",
    employeeBand: "",
    experience: "",
    positions: "",
  });

  const params = useParams();
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8080/job/edit-job/submitJobDetails`,{
      method:"POST",
      headers:{
      "Content-Type": "application/json"},
      body:
       JSON.stringify(form)
      
    });
    const data = await res.json();
    navigate("/admin/home")
  };

  useEffect(() => {
    const fetchData = async () => {
      let jobId=+params.id;
      const res = await fetch(`http://localhost:8080/job/${jobId}`,{
        method:"GET",
        headers:{
        "Content-Type": "application/json"},
      });
      const data = await res.json();
      console.log(data);
      setForm(prev=>{
        return {...data}
      });
    };
    fetchData();
  }, [params.id]);

  return (
    <div className="edit-job-container">
      <h2 className="edit-job-title">Job Details Form</h2>
      <form onSubmit={handleSubmit} className="edit-job-form">
        {/* Job ID & Name */}
        <div className="edit-job-row">
          <div className="edit-job-field">
            <label htmlFor="jobId" className="edit-job-label">Job ID</label>
            <input
              type="text"
              id="jobId"
              name="jobId"
              value={form.jobId}
              onChange={handleChange}
              className="edit-job-input"
              disabled="true"
            />
          </div>
          <div className="edit-job-field">
            <label htmlFor="jobName" className="edit-job-label">Job Name</label>
            <input
              type="text"
              id="jobName"
              name="jobName"
              value={form.jobName}
              onChange={handleChange}
              className="edit-job-input"
            />
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label htmlFor="jobDescription" className="edit-job-label">Job Description</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            rows="6"
            value={form.jobDescription}
            onChange={handleChange}
            className="edit-job-textarea"
          />
        </div>

        {/* Project & Location */}
        <div className="edit-job-row">
          <div className="edit-job-field">
            <label htmlFor="projectName" className="edit-job-label">Project Name</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={form.projectName}
              onChange={handleChange}
              className="edit-job-input"
            />
          </div>
          <div className="edit-job-field">
            <label htmlFor="location" className="edit-job-label">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="edit-job-input"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="edit-job-row">
          <div className="edit-job-field">
            <label htmlFor="skills" className="edit-job-label">Skills</label>
            <textarea
              id="skills"
              name="skills"
              rows="6"
              value={form.skills}
              onChange={handleChange}
              className="edit-job-textarea"
            />
          </div>
          <div className="edit-job-field">
            <label htmlFor="optionalSkills" className="edit-job-label">Optional Skills</label>
            <textarea
              id="optionalSkills"
              name="optionalSkills"
              rows="6"
              value={form.optionalSkills}
              onChange={handleChange}
              className="edit-job-textarea"
            />
          </div>
        </div>

        {/* Band, Experience, Positions */}
        <div className="edit-job-row">
          <div className="edit-job-field">
            <label htmlFor="employeeBand" className="edit-job-label">Employee Band</label>
            <input
              type="text"
              id="employeeBand"
              name="employeeBand"
              value={form.employeeBand}
              onChange={handleChange}
              className="edit-job-input"
            />
          </div>
          <div className="edit-job-field">
            <label htmlFor="experience" className="edit-job-label">Experience (in Months)</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="edit-job-input"
            />
          </div>
          <div className="edit-job-field">
            <label htmlFor="positions" className="edit-job-label">Positions</label>
            <input
              type="number"
              id="positions"
              name="positions"
              value={form.positions}
              onChange={handleChange}
              className="edit-job-input"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="edit-job-submit">
          <button type="submit" className="edit-job-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
