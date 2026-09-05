import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <nav className="dashboard-navbar">
        <h2>College / Admin Dashboard</h2>

        <button onClick={() => navigate("/")}>
          Logout
        </button>
      </nav>

      <div className="dashboard-content">

        <h1>Welcome, Admin 👋</h1>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3>🎓 Students</h3>
            <p>Total Students: 250</p>
          </div>

          <div className="dashboard-card">
            <h3>🛏️ Rooms</h3>
            <p>Total Rooms: 100</p>
          </div>

          <div className="dashboard-card">
            <h3>👨‍💼 Wardens</h3>
            <p>Total Wardens: 10</p>
          </div>

          <div className="dashboard-card">
            <h3>📝 Complaints</h3>
            <p>Pending Complaints: 5</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;