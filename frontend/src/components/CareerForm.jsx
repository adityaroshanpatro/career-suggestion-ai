import { useState } from "react";
import Select from "react-select";
import "../styles.css"; // Import styles

export default function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experience: "",
    skills: [],
    interests: [],
    cv: null,
  });

  const [errors, setErrors] = useState({});
  
  // Skill Options (Predefined Skills List)
  const skillOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Data Science", label: "Data Science" },
    { value: "C++", label: "C++" },
    { value: "Java", label: "Java" },
    { value: "SQL", label: "SQL" },
    { value: "AWS", label: "AWS" },
    { value: "DevOps", label: "DevOps" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Blockchain", label: "Blockchain" },
  ];

  // Career Interest Options (Predefined Interests List)
  const interestOptions = [
    { value: "Software Engineering", label: "Software Engineering" },
    { value: "Data Science", label: "Data Science" },
    { value: "AI & Machine Learning", label: "AI & Machine Learning" },
    { value: "Web Development", label: "Web Development" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "Product Management", label: "Product Management" },
    { value: "Finance & Investment", label: "Finance & Investment" },
    { value: "Game Development", label: "Game Development" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Marketing & Advertising", label: "Marketing & Advertising" },
    { value: "Entrepreneurship", label: "Entrepreneurship" },
  ];

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Handle Multi-Select Skills Input
  const handleSkillsChange = (selectedOptions) => {
    setFormData({ ...formData, skills: selectedOptions });
    setErrors({ ...errors, skills: "" });
  };

  // Handle Multi-Select Interests Input
  const handleInterestsChange = (selectedOptions) => {
    setFormData({ ...formData, interests: selectedOptions });
    setErrors({ ...errors, interests: "" });
  };

  // Validate Form
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
    if (formData.skills.length === 0) newErrors.skills = "Please select at least one skill";
    if (formData.interests.length === 0) newErrors.interests = "Please select at least one interest";
    if (!formData.cv) newErrors.cv = "Please upload a CV";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
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
          <Select
            options={skillOptions}
            isMulti
            name="skills"
            value={formData.skills}
            onChange={handleSkillsChange}
            className="select-dropdown"
            classNamePrefix="select"
            placeholder="Type to search skills..."
          />
          {errors.skills && <p className="error">{errors.skills}</p>}
        </div>

        <div className="form-group">
          <label>Career Interests</label>
          <Select
            options={interestOptions}
            isMulti
            name="interests"
            value={formData.interests}
            onChange={handleInterestsChange}
            className="select-dropdown"
            classNamePrefix="select"
            placeholder="Type to search career interests..."
          />
          {errors.interests && <p className="error">{errors.interests}</p>}
        </div>

        <div className="form-group">
          <label>Upload CV (PDF, DOCX)</label>
          <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={(e) => setFormData({ ...formData, cv: e.target.files[0] })} required />
          {errors.cv && <p className="error">{errors.cv}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
