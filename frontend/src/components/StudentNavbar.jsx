
import { useNavigate } from "react-router-dom";

function StudentNavbar() {
    const navigate = useNavigate();

    return (
        <nav className="student-navbar">

            {/* Logo */}
            <div className="student-brand">
                <div className="student-brand-icon">
                    🏠
                </div>

                <div>
                    <h2>HostelHub</h2>
                    <span>Student Portal</span>
                </div>
            </div>


            {/* Right Side */}
            <div className="student-nav-right">

                {/* Notification */}
                <div className="notification">
                    🔔
                    <span>3</span>
                </div>


                {/* Profile */}
                <div className="student-profile">

                    <div className="profile-avatar">
                        J
                    </div>

                    <div>
                        <strong>Jyoti Chaubey</strong>
                        <small>Student</small>
                    </div>

                </div>


                {/* Logout */}
                <button
                    className="student-logout"
                    onClick={() => navigate("/")}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default StudentNavbar;