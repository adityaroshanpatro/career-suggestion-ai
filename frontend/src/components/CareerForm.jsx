import { useState } from "react";
import "../styles.css"; // Import styles

export default function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experience: "",
    skills: "",
    interests: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! (Integration pending)");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Career Suggestion Form</h2>
      <form onSubmit={handleSubmit} className="career-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Work Experience (Years)</label>
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Skills</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g., JavaScript, Python, Data Analysis" required />
        </div>

        <div className="form-group">
          <label>Career Interests</label>
          <input type="text" name="interests" value={formData.interests} onChange={handleChange} placeholder="e.g., AI, Web Development, Finance" required />
        </div>

        <div className="form-group">
          <label>Upload CV (PDF, DOCX)</label>
          <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
