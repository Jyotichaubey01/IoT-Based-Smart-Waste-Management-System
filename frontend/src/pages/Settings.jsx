
import { useState } from "react";
import StudentNavbar from "../components/StudentNavbar";

function Settings() {

    const [notifications, setNotifications] =
        useState(true);

    const [emailNotifications, setEmailNotifications] =
        useState(true);

    const handleSave = () => {
        alert("Settings saved successfully!");
    };

    return (
        <div className="student-page-wrapper">

            <StudentNavbar />

            <main className="student-main">

                <div className="student-header">

                    <div>
                        <span className="student-label">
                            ACCOUNT SETTINGS
                        </span>

                        <h1>Settings ⚙️</h1>

                        <p>
                            Manage your account preferences.
                        </p>
                    </div>

                </div>

                <section className="student-panel settings-panel">

                    <div className="panel-heading">
                        <h2>🔔 Notifications</h2>
                    </div>

                    <div className="setting-item">

                        <div>
                            <strong>
                                Push Notifications
                            </strong>

                            <p>
                                Receive notifications about hostel updates.
                            </p>
                        </div>

                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={() =>
                                    setNotifications(
                                        !notifications
                                    )
                                }
                            />

                            <span className="slider"></span>
                        </label>

                    </div>

                    <div className="setting-item">

                        <div>
                            <strong>
                                Email Notifications
                            </strong>

                            <p>
                                Receive important updates by email.
                            </p>
                        </div>

                        <label className="switch">

                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={() =>
                                    setEmailNotifications(
                                        !emailNotifications
                                    )
                                }
                            />

                            <span className="slider"></span>

                        </label>

                    </div>

                    <div className="panel-heading">
                        <h2>🔐 Security</h2>
                    </div>

                    <div className="setting-item">

                        <div>
                            <strong>
                                Change Password
                            </strong>

                            <p>
                                Update your account password.
                            </p>
                        </div>

                        <button
                            className="outline-btn"
                            onClick={() =>
                                window.location.href =
                                    "/student/change-password"
                            }
                        >
                            Change
                        </button>

                    </div>

                    <button
                        className="complaint-btn"
                        onClick={handleSave}
                    >
                        Save Settings
                    </button>

                </section>

            </main>
        </div>
    );
}

export default Settings;