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

  const [errors, setErrors] = useState({}); // State to track validation errors

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Allow only PDF, DOC, DOCX
    if (file && !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      setErrors({ ...errors, cv: "Only PDF or DOC files are allowed" });
      setFormData({ ...formData, cv: null });
    } else {
      setErrors({ ...errors, cv: "" }); // Clear error
      setFormData({ ...formData, cv: file });
    }
  };

  // Validate form before submission
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.experience.trim() || isNaN(formData.experience) || Number(formData.experience) <= 0) {
      newErrors.experience = "Please enter a valid number for experience";
    }
    if (!formData.skills.trim()) newErrors.skills = "Skills are required";
    if (!formData.interests.trim()) newErrors.interests = "Career interests are required";
    if (!formData.cv) newErrors.cv = "Please upload a CV";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Form successfully submitted! (Integration pending)");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Career Suggestion Form</h2>
      <form onSubmit={handleSubmit} className="career-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Work Experience (Years)</label>
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
          {errors.experience && <p className="error">{errors.experience}</p>}
        </div>

        <div className="form-group">
          <label>Skills</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
          {errors.skills && <p className="error">{errors.skills}</p>}
        </div>

        <div className="form-group">
          <label>Career Interests</label>
          <input type="text" name="interests" value={formData.interests} onChange={handleChange} required />
          {errors.interests && <p className="error">{errors.interests}</p>}
        </div>

        <div className="form-group">
          <label>Upload CV (PDF, DOCX)</label>
          <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
          {errors.cv && <p className="error">{errors.cv}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
