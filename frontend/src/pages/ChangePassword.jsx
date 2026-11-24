import { useState } from "react";
import StudentNavbar from "../components/StudentNavbar";

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!currentPassword || !newPassword || !confirmPassword) {
            alert("Please fill all fields.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("New passwords do not match.");
            return;
        }

        if (newPassword.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        alert("Password changed successfully!");

        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="student-page-wrapper">

            <StudentNavbar />

            <main className="student-main">

                <div className="student-header">
                    <div>
                        <span className="student-label">
                            ACCOUNT SECURITY
                        </span>

                        <h1>Change Password 🔒</h1>

                        <p>
                            Keep your account secure with a strong password.
                        </p>
                    </div>
                </div>

                <section className="student-panel password-panel">

                    <div className="panel-heading">
                        <h2>🔐 Update Password</h2>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Current Password</label>

                            <input
                                type="password"
                                placeholder="Enter current password"
                                value={currentPassword}
                                onChange={(e) =>
                                    setCurrentPassword(e.target.value)
                                }
                            />
                        </div>

                        <div className="form-group">
                            <label>New Password</label>

                            <input
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) =>
                                    setNewPassword(e.target.value)
                                }
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm New Password</label>

                            <input
                                type="password"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="complaint-btn"
                        >
                            Update Password
                        </button>

                    </form>

                </section>

            </main>
        </div>
    );
}

export default ChangePassword;