
import { useEffect, useState } from "react";
import StudentNavbar from "../../components/StudentNavbar";

function Profile() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser =
            localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className="student-page-wrapper">

            <StudentNavbar />

            <main className="student-main">

                <div className="student-header">

                    <div>
                        <span className="student-label">
                            MY ACCOUNT
                        </span>

                        <h1>My Profile 👤</h1>

                        <p>
                            View your personal and academic information.
                        </p>
                    </div>

                </div>

                <section className="student-panel profile-page-card">

                    <div className="profile-large-avatar">
                        {user?.name
                            ?.charAt(0)
                            .toUpperCase() || "S"}
                    </div>

                    <h2>
                        {user?.name || "Student"}
                    </h2>

                    <span className="profile-role">
                        Student
                    </span>

                    <div className="profile-details">

                        <div>
                            <span>Full Name</span>
                            <strong>
                                {user?.name || "Student"}
                            </strong>
                        </div>

                        <div>
                            <span>Email</span>
                            <strong>
                                {user?.email || "Not available"}
                            </strong>
                        </div>

                        <div>
                            <span>Role</span>
                            <strong>Student</strong>
                        </div>

                        <div>
                            <span>Room</span>
                            <strong>204</strong>
                        </div>

                        <div>
                            <span>Block</span>
                            <strong>A Block</strong>
                        </div>

                        <div>
                            <span>Department</span>
                            <strong>
                                Computer Science & Engineering
                            </strong>
                        </div>

                    </div>

                </section>

            </main>
        </div>
    );
}

export default Profile;