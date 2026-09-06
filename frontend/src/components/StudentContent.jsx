
function StudentContent() {
    return (
        <main className="student-main">

            {/* =====================================================
                PAGE HEADER
            ====================================================== */}
            <div className="student-header">

                <div>

                    <span className="student-label">
                        STUDENT DASHBOARD
                    </span>

                    <h1>
                        Welcome back, Jyoti 👋
                    </h1>

                    <p>
                        Here's an overview of your hostel information.
                    </p>

                </div>


                <div className="current-date">
                    📅 September 2026
                </div>

            </div>


            {/* =====================================================
                STATISTICS
            ====================================================== */}
            <section className="student-stats">

                {/* Room */}
                <div className="student-stat-card purple">

                    <div className="stat-icon">
                        🛏️
                    </div>

                    <div>
                        <span>Room Number</span>
                        <strong>205</strong>
                        <small>Block A • 2nd Floor</small>
                    </div>

                </div>


                {/* Fee */}
                <div className="student-stat-card green">

                    <div className="stat-icon">
                        💰
                    </div>

                    <div>
                        <span>Fee Status</span>
                        <strong>Paid</strong>
                        <small>Next due: Oct 10, 2026</small>
                    </div>

                </div>


                {/* Complaints */}
                <div className="student-stat-card orange">

                    <div className="stat-icon">
                        📝
                    </div>

                    <div>
                        <span>Complaints</span>
                        <strong>02</strong>
                        <small>1 resolved • 1 pending</small>
                    </div>

                </div>


                {/* Notices */}
                <div className="student-stat-card blue">

                    <div className="stat-icon">
                        📢
                    </div>

                    <div>
                        <span>New Notices</span>
                        <strong>03</strong>
                        <small>Updated today</small>
                    </div>

                </div>

            </section>


            {/* =====================================================
                MAIN DASHBOARD GRID
            ====================================================== */}
            <section className="student-grid">

                {/* =================================================
                    ROOM DETAILS
                ================================================== */}
                <div className="student-panel room-panel">

                    <div className="panel-heading">

                        <div>
                            <span>ACCOMMODATION</span>
                            <h2>Room Details</h2>
                        </div>

                        <span className="panel-icon">
                            🛏️
                        </span>

                    </div>


                    <div className="room-number">

                        <span>ROOM</span>

                        <strong>205</strong>

                        <small>Block A</small>

                    </div>


                    <div className="room-info">

                        <div>
                            <span>Floor</span>
                            <strong>2nd Floor</strong>
                        </div>

                        <div>
                            <span>Room Type</span>
                            <strong>Double Sharing</strong>
                        </div>

                        <div>
                            <span>Bed Number</span>
                            <strong>Bed B</strong>
                        </div>

                        <div>
                            <span>Hostel</span>
                            <strong>Girls Hostel</strong>
                        </div>

                    </div>


                    <button className="outline-btn">
                        View Room Details →
                    </button>

                </div>


                {/* =================================================
                    FEE DETAILS
                ================================================== */}
                <div className="student-panel fee-panel">

                    <div className="panel-heading">

                        <div>
                            <span>PAYMENT</span>
                            <h2>Fee Details</h2>
                        </div>

                        <span className="panel-icon">
                            💰
                        </span>

                    </div>


                    <div className="fee-amount">

                        <span>Total Hostel Fee</span>

                        <strong>
                            ₹45,000
                        </strong>

                    </div>


                    <div className="fee-progress">

                        <div className="progress-top">

                            <span>
                                Payment Progress
                            </span>

                            <strong>
                                100%
                            </strong>

                        </div>


                        <div className="progress-bar">

                            <div className="progress-fill"></div>

                        </div>


                        <small>
                            All fees have been paid successfully.
                        </small>

                    </div>


                    <div className="fee-summary">

                        <div>

                            <span>
                                Paid
                            </span>

                            <strong>
                                ₹45,000
                            </strong>

                        </div>


                        <div>

                            <span>
                                Pending
                            </span>

                            <strong>
                                ₹0
                            </strong>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    RECENT NOTICES
                ================================================== */}
                <div className="student-panel notices-panel">

                    <div className="panel-heading">

                        <div>
                            <span>ANNOUNCEMENTS</span>
                            <h2>Recent Notices</h2>
                        </div>

                        <span className="panel-icon">
                            📢
                        </span>

                    </div>


                    <div className="notice-item">

                        <div className="notice-icon">
                            📅
                        </div>

                        <div>

                            <strong>
                                Hostel Meeting
                            </strong>

                            <p>
                                Monthly hostel meeting will be
                                held tomorrow at 10 AM.
                            </p>

                            <small>
                                Today
                            </small>

                        </div>

                    </div>


                    <div className="notice-item">

                        <div className="notice-icon">
                            🔔
                        </div>

                        <div>

                            <strong>
                                Maintenance Notice
                            </strong>

                            <p>
                                Water supply maintenance on
                                Sunday from 8 AM to 11 AM.
                            </p>

                            <small>
                                Yesterday
                            </small>

                        </div>

                    </div>


                    <div className="notice-item">

                        <div className="notice-icon">
                            📚
                        </div>

                        <div>

                            <strong>
                                Study Hall Timings
                            </strong>

                            <p>
                                Study hall will remain open
                                until 11 PM during exams.
                            </p>

                            <small>
                                2 days ago
                            </small>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    COMPLAINTS
                ================================================== */}
                <div className="student-panel complaint-panel">

                    <div className="panel-heading">

                        <div>
                            <span>SUPPORT</span>
                            <h2>My Complaints</h2>
                        </div>

                        <span className="panel-icon">
                            📝
                        </span>

                    </div>


                    <div className="complaint-item">

                        <div>

                            <strong>
                                Water Issue
                            </strong>

                            <small>
                                Room 205
                            </small>

                        </div>

                        <span className="status pending">
                            Pending
                        </span>

                    </div>


                    <div className="complaint-item">

                        <div>

                            <strong>
                                Fan Repair
                            </strong>

                            <small>
                                Room 205
                            </small>

                        </div>

                        <span className="status resolved">
                            Resolved
                        </span>

                    </div>


                    <button className="complaint-btn">
                        + Submit New Complaint
                    </button>

                </div>

            </section>

        </main>
    );
}

export default StudentContent;