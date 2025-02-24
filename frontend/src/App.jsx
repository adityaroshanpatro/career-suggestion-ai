import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Navbar */}
        <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI Career Suggestion</h1>
          <div>
            <Link to="/" className="mr-4 hover:underline">Home</Link>
            <Link to="/form" className="hover:underline">Get Suggestions</Link>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<CareerForm />} />
        </Routes>
      </div>
    </Router>
  );
}

// Placeholder Components
function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h2 className="text-4xl font-bold text-blue-600">Discover Your Ideal Career</h2>
      <p className="mt-4 text-lg text-gray-700">
        Upload your resume and get AI-driven career recommendations.
      </p>
      <Link to="/form">
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all">
          Get Started
        </button>
      </Link>
    </div>
  );
}

function CareerForm() {
  return (
    <div className="flex items-center justify-center h-[80vh] text-xl">
      <p>Career Suggestion Form (Coming Soon!)</p>
    </div>
  );
}
