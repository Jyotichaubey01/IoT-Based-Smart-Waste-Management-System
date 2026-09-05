
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Home / Landing Page */}
                <Route path="/" element={<LandingPage />} />

                {/* Login */}
                <Route path="/login" element={<Login />} />

                {/* Student Dashboard */}
                <Route
                    path="/student"
                    element={<StudentDashboard />}
                />

                {/* Admin / College Dashboard */}
                <Route
                    path="/admin"
                    element={<AdminDashboard />}
                />

                {/* Unknown URL */}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;

