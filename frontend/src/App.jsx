
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Default Route */}
                <Route
                    path="/"
                    element={<Navigate to="/student" replace />}
                />

                {/* Student Dashboard */}
                <Route
                    path="/student"
                    element={<StudentDashboard />}
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