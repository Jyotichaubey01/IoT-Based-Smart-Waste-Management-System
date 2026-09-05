
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ==================== NAVBAR ==================== */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-indigo-700">
          College / Admin Dashboard
        </h2>

        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
        >
          Logout
        </button>
      </nav>

      {/* ==================== DASHBOARD CONTENT ==================== */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          Welcome, Admin 👋
        </h1>

        {/* ==================== DASHBOARD CARDS ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Students */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-lg font-bold text-slate-800">
              Students
            </h3>
            <p className="text-slate-500 mt-2">
              Total Students: <span className="font-bold text-indigo-600">250</span>
            </p>
          </div>

          {/* Rooms */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
            <div className="text-4xl mb-4">🛏️</div>
            <h3 className="text-lg font-bold text-slate-800">
              Rooms
            </h3>
            <p className="text-slate-500 mt-2">
              Total Rooms: <span className="font-bold text-indigo-600">100</span>
            </p>
          </div>

          {/* Wardens */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
            <div className="text-4xl mb-4">👨‍💼</div>
            <h3 className="text-lg font-bold text-slate-800">
              Wardens
            </h3>
            <p className="text-slate-500 mt-2">
              Total Wardens: <span className="font-bold text-indigo-600">10</span>
            </p>
          </div>

          {/* Complaints */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-lg font-bold text-slate-800">
              Complaints
            </h3>
            <p className="text-slate-500 mt-2">
              Pending Complaints: <span className="font-bold text-red-500">5</span>
            </p>
          </div>

        </div>

        {/* ==================== QUICK ACTIONS ==================== */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <button className="bg-indigo-600 text-white p-5 rounded-xl font-semibold hover:bg-indigo-700 transition">
              Manage Students
            </button>

            <button className="bg-blue-600 text-white p-5 rounded-xl font-semibold hover:bg-blue-700 transition">
              Manage Rooms
            </button>

            <button className="bg-purple-600 text-white p-5 rounded-xl font-semibold hover:bg-purple-700 transition">
              View Complaints
            </button>

          </div>
        </section>

      </main>
    </div>
  );
}

export default AdminDashboard;

