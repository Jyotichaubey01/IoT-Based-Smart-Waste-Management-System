import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <nav className="dashboard-navbar">
        <h2>Student Dashboard</h2>

        <button onClick={() => navigate("/")}>
          Logout
        </button>
      </nav>

      <div className="dashboard-content">

        <h1>Welcome, Student 👋</h1>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3>🛏️ Room Details</h3>
            <p>Room No: 205</p>
            <p>Block: A</p>
          </div>

          <div className="dashboard-card">
            <h3>💰 Fee Status</h3>
            <p>Status: Paid</p>
          </div>

          <div className="dashboard-card">
            <h3>📝 Complaints</h3>
            <p>No pending complaints</p>
          </div>

          <div className="dashboard-card">
            <h3>📢 Notices</h3>
            <p>3 new notices</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;