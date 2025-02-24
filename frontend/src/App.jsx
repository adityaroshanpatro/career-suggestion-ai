import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css"; // Import CSS

export default function App() {
  return (
    <Router>
      {/* Ensure the navbar is always present */}
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<CareerForm />} />
        </Routes>
      </div>
    </Router>
  );
}

// ✅ Separate Navbar Component (Ensures it’s only rendered once)
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="text-3xl font-bold">AI Career Suggestion</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/form" className="nav-link">Get Suggestions</Link>
      </div>
    </nav>
  );
}

// ✅ Landing Page
function LandingPage() {
  return (
    <div className="landing-page">
      <h2 className="landing-title">Discover Your Ideal Career</h2>
      <p className="landing-description">
        Upload your resume and get AI-driven career recommendations.
      </p>
      <Link to="/form">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  );
}

// ✅ Career Form Page (Ensure no extra navbar inside)
function CareerForm() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] text-2xl">
      <p>Career Suggestion Form (Coming Soon!)</p>
    </div>
  );
}
