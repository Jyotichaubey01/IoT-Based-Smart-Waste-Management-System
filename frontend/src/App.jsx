import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import StudentDashboard from "./pages/student/StudentDashboard";
import MyRoom from "./pages/student/MyRoom";
import Complaints from "./pages/student/Complaints";
import Fees from "./pages/student/Fees";
import Profile from "./pages/student/Profile";
import Settings from "./pages/student/Settings";
import ChangePassword from "./pages/student/ChangePassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Default Route */}
                <Route
                    path="/"
                    element={<Navigate to="/student" replace />}
                />

                {/* Student Routes */}
                <Route
                    path="/student"
                    element={<StudentDashboard />}
                />

                <Route
                    path="/student/room"
                    element={<MyRoom />}
                />

                <Route
                    path="/student/complaints"
                    element={<Complaints />}
                />

                <Route
                    path="/student/fees"
                    element={<Fees />}
                />

                <Route
                    path="/student/profile"
                    element={<Profile />}
                />

                <Route
                    path="/student/settings"
                    element={<Settings />}
                />

                <Route
                    path="/student/change-password"
                    element={<ChangePassword />}
                />

                {/* Unknown URL */}
                <Route
                    path="*"
                    element={<Navigate to="/student" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;