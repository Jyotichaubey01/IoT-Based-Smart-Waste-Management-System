import StudentNavbar from "../../components/StudentNavbar";

function StudentDashboard() {
    return (
        <div className="student-page-wrapper">
            <StudentNavbar />

            <main className="student-main">
                <div className="student-header">
                    <div>
                        <span className="student-label">STUDENT DASHBOARD</span>
                        <h1>Welcome, Student 👋</h1>
                        <p>Manage your hostel information from one place.</p>
                    </div>

                    <div className="current-date">
                        📅 {new Date().toLocaleDateString()}
                    </div>
                </div>

                <div className="student-stats">
                    <div className="student-stat-card">
                        <div className="stat-icon room-stat">🛏️</div>
                        <div>
                            <span>My Room</span>
                            <h3>204</h3>
                            <small>Block A</small>
                        </div>
                    </div>

                    <div className="student-stat-card">
                        <div className="stat-icon fee-stat">💰</div>
                        <div>
                            <span>Pending Fees</span>
                            <h3>₹2,500</h3>
                            <small>Due soon</small>
                        </div>
                    </div>

                    <div className="student-stat-card">
                        <div className="stat-icon complaint-stat">📝</div>
                        <div>
                            <span>Complaints</span>
                            <h3>2</h3>
                            <small>1 pending</small>
                        </div>
                    </div>

                    <div className="student-stat-card">
                        <div className="stat-icon notice-stat">🔔</div>
                        <div>
                            <span>Notices</span>
                            <h3>3</h3>
                            <small>New notices</small>
                        </div>
                    </div>
                </div>

                <div className="student-grid">
                    <section className="student-panel">
                        <div className="panel-heading">
                            <h2>🛏️ My Room</h2>
                        </div>

                        <div className="room-number">204</div>

                        <div className="room-info">
                            <div>
                                <span>Block</span>
                                <strong>A</strong>
                            </div>

                            <div>
                                <span>Floor</span>
                                <strong>2nd Floor</strong>
                            </div>

                            <div>
                                <span>Room Type</span>
                                <strong>Double Sharing</strong>
                            </div>
                        </div>
                    </section>

                    <section className="student-panel">
                        <div className="panel-heading">
                            <h2>💰 Fee Status</h2>
                        </div>

                        <div className="fee-summary">
                            <span>Pending Amount</span>
                            <h2>₹2,500</h2>
                        </div>

                        <div className="fee-progress">
                            <div className="progress-top">
                                <span>Payment Progress</span>
                                <span>75%</span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: "75%" }}
                                ></div>
                            </div>
                        </div>
                    </section>

                    <section className="student-panel">
                        <div className="panel-heading">
                            <h2>📢 Latest Notices</h2>
                        </div>

                        <div className="notice-item">
                            <div className="notice-icon">📢</div>
                            <div>
                                <strong>Hostel Inspection</strong>
                                <p>Hostel inspection will be conducted this week.</p>
                            </div>
                        </div>

                        <div className="notice-item">
                            <div className="notice-icon">🔔</div>
                            <div>
                                <strong>Mess Timing Update</strong>
                                <p>Breakfast timing has been updated.</p>
                            </div>
                        </div>

                        <div className="notice-item">
                            <div className="notice-icon">📅</div>
                            <div>
                                <strong>Holiday Notice</strong>
                                <p>Check the holiday schedule for upcoming dates.</p>
                            </div>
                        </div>
                    </section>

                    <section className="student-panel">
                        <div className="panel-heading">
                            <h2>📝 Recent Complaints</h2>
                        </div>

                        <div className="complaint-item">
                            <div>
                                <strong>Water Problem</strong>
                                <p>Submitted 2 days ago</p>
                            </div>
                            <span className="status pending">Pending</span>
                        </div>

                        <div className="complaint-item">
                            <div>
                                <strong>Room Light</strong>
                                <p>Submitted 5 days ago</p>
                            </div>
                            <span className="status resolved">Resolved</span>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default StudentDashboard;