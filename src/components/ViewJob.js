import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ViewJob.css";

export default function ViewJob() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/job/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.error("Failed to fetch job:", err));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      await fetch(`http://localhost:8080/job/${id}`, { method: "DELETE" });
      navigate("/admin/home");
    }
  };

  const handleEdit = () => navigate(`/admin/edit-job/${id}`);

  if (!job) return <div className="view-container">Loading...</div>;

  return (
    <div className="view-container">
      <h1 className="view-title">{job.jobName}</h1>
      <div className="view-details">
        <p><strong>Job ID:</strong> {job.jobId}</p>
        <p><strong>Project:</strong> {job.projectName}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Band:</strong> {job.employeeBand}</p>
        <p><strong>Experience:</strong> {job.experience} months</p>
        <p><strong>Positions:</strong> {job.positions}</p>
        <p><strong>Skills:</strong> {job.skills}</p>
        <p><strong>Optional Skills:</strong> {job.optionalSkills}</p>
        <p><strong>Description:</strong> {job.jobDescription}</p>
      </div>
      <div className="view-actions">
        <button className="btn edit" onClick={handleEdit}>Edit</button>
        <button className="btn delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
