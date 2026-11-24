import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import MyRoom from "./pages/MyRoom";
import Complaints from "./pages/Complaints";
import Fees from "./pages/Fees";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ChangePassword from "./pages/ChangePassword";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Landing & Public Pages */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />

                {/* Student Pages */}
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/student/room" element={<MyRoom />} />
                <Route path="/student/complaints" element={<Complaints />} />
                <Route path="/student/fees" element={<Fees />} />
                <Route path="/student/profile" element={<Profile />} />
                <Route path="/student/settings" element={<Settings />} />
                <Route path="/student/change-password" element={<ChangePassword />} />

                {/* Warden & Director Placeholder Routes (Admin Dashboard fallback for now) */}
                <Route path="/warden" element={<AdminDashboard />} />
                <Route path="/director" element={<AdminDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
