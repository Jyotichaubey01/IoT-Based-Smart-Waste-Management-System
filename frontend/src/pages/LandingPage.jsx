import { useNavigate } from "react-router-dom";
import "../App.css";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">

            {/* ================= HERO ================= */}
            <section className="hero">

                <div className="hero-left">

                    <div className="badge">
                        ✨ Smart & Secure Hostel Management
                    </div>

                    <h1>
                        Manage Your Hostel
                        <span> Smarter & Better</span>
                    </h1>

                    <p>
                        A modern digital platform to manage students,
                        rooms, wardens, fees, complaints and hostel
                        activities — all from one powerful system.
                    </p>

                    <div className="features">
                        <span>✓ Easy Management</span>
                        <span>✓ Secure System</span>
                        <span>✓ Real-Time Updates</span>
                    </div>

                    <div className="stats">

                        <div>
                            <h3>500+</h3>
                            <p>Students</p>
                        </div>

                        <div>
                            <h3>100+</h3>
                            <p>Rooms</p>
                        </div>

                        <div>
                            <h3>24/7</h3>
                            <p>Support</p>
                        </div>

                    </div>

                </div>


                {/* ================= DASHBOARD ================= */}
                <div className="dashboard-wrapper">

                    <div className="dashboard">

                        <div className="dashboard-header">

                            <div>
                                <small>HOSTEL MANAGEMENT</small>
                                <h3>Dashboard Overview</h3>
                            </div>

                            <span className="live">
                                ● Live
                            </span>

                        </div>


                        <div className="welcome">
                            <small>Welcome back 👋</small>
                            <h3>Today's Overview</h3>
                        </div>


                        <div className="dashboard-grid">

                            <div className="dashboard-card purple">
                                <div className="icon">🎓</div>
                                <h3>250</h3>
                                <p>Students</p>
                            </div>

                            <div className="dashboard-card blue">
                                <div className="icon">🛏️</div>
                                <h3>100</h3>
                                <p>Rooms</p>
                            </div>

                            <div className="dashboard-card orange">
                                <div className="icon">📝</div>
                                <h3>05</h3>
                                <p>Complaints</p>
                            </div>

                            <div className="dashboard-card green">
                                <div className="icon">💰</div>
                                <h3>95%</h3>
                                <p>Fees Paid</p>
                            </div>

                        </div>


                        <div className="activity">

                            <div className="activity-title">
                                <strong>Recent Activity</strong>
                                <span>Live Updates</span>
                            </div>

                            <div className="activity-row">
                                <i></i>
                                <div>
                                    <strong>New Student Registered</strong>
                                    <p>Rahul joined Room 204</p>
                                </div>
                                <small>2m</small>
                            </div>

                            <div className="activity-row">
                                <i></i>
                                <div>
                                    <strong>Fee Payment Received</strong>
                                    <p>₹12,500 payment completed</p>
                                </div>
                                <small>10m</small>
                            </div>

                            <div className="activity-row">
                                <i></i>
                                <div>
                                    <strong>New Complaint</strong>
                                    <p>Water issue reported</p>
                                </div>
                                <small>20m</small>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= ROLE SECTION ================= */}
            <section className="roles-section">

                <div className="section-heading">
                    <span>ACCESS PORTAL</span>
                    <h2>
                        Choose Your <b>Role</b>
                    </h2>
                    <p>
                        Select your role and login to your dedicated
                        hostel management portal.
                    </p>
                </div>


                <div className="roles-container">

                    {/* STUDENT */}
                    <div className="role-card student">

                        <div className="role-top">
                            <div className="role-icon">
                                🎓
                            </div>

                            <span>STUDENT</span>
                        </div>

                        <h3>Student Portal</h3>

                        <p>
                            Manage your profile, room details,
                            fees, complaints and notices.
                        </p>

                        <div className="role-list">
                            <div>✓ Room Details</div>
                            <div>✓ Fee Management</div>
                            <div>✓ Complaint Management</div>
                        </div>

                        <button
                            onClick={() => navigate("/login", { state: { role: "student" } })}
                        >
                            Student Login <b>→</b>
                        </button>

                    </div>


                    {/* WARDEN */}
                    <div className="role-card warden">

                        <div className="role-top">
                            <div className="role-icon">
                                👨‍💼
                            </div>

                            <span>WARDEN</span>
                        </div>

                        <h3>Warden Management</h3>

                        <p>
                            Monitor students, manage rooms,
                            complaints and hostel records.
                        </p>

                        <div className="role-list">
                            <div>✓ Student Monitoring</div>
                            <div>✓ Room Management</div>
                            <div>✓ Complaint Management</div>
                        </div>

                        <button
                            onClick={() => navigate("/login", { state: { role: "warden" } })}
                        >
                            Warden Login <b>→</b>
                        </button>

                    </div>


                    {/* DIRECTOR / ADMIN */}
                    <div className="role-card admin">

                        <div className="role-top">
                            <div className="role-icon">
                                🏛️
                            </div>

                            <span>DIRECTOR</span>
                        </div>

                        <h3>Director & Admin</h3>

                        <p>
                            Executive hostel oversight, warden performance,
                            occupancy analytics and audits.
                        </p>

                        <div className="role-list">
                            <div>✓ Executive Oversight</div>
                            <div>✓ Warden Audits</div>
                            <div>✓ Performance Analytics</div>
                        </div>

                        <button
                            onClick={() => navigate("/login", { state: { role: "director" } })}
                        >
                            Director Login <b>→</b>
                        </button>

                    </div>

                </div>

            </section>


            {/* ================= ABOUT ================= */}
            <section className="about">

                <div className="about-box">
                    <div className="home-icon">
                        🏠
                    </div>

                    <h2>One Smart Platform</h2>

                    <p>
                        Everything your hostel needs,
                        available in one place.
                    </p>
                </div>


                <div className="about-text">

                    <span>ABOUT OUR SYSTEM</span>

                    <h2>
                        Making Hostel Management
                        <b> Simple & Digital</b>
                    </h2>

                    <p>
                        Our Hostel Management System helps colleges
                        and hostels replace traditional paperwork with
                        a fast, secure and centralized digital platform.
                    </p>

                    <div className="about-points">
                        <div>✓ Easy to use</div>
                        <div>✓ Secure authentication</div>
                        <div>✓ Real-time information</div>
                        <div>✓ Accessible anywhere</div>
                    </div>

                </div>

            </section>


            {/* ================= FACILITIES ================= */}
            <section className="facilities">

                <div className="section-heading">
                    <span>HOSTEL FACILITIES</span>

                    <h2>
                        Everything For A
                        <b> Better Stay</b>
                    </h2>

                    <p>
                        Designed to make hostel life comfortable,
                        safe and organized.
                    </p>
                </div>


                <div className="facility-container">

                    <div className="facility">
                        <div>🛏️</div>
                        <h3>Comfortable Rooms</h3>
                        <p>Clean and comfortable accommodation.</p>
                    </div>

                    <div className="facility">
                        <div>🍽️</div>
                        <h3>Mess Facility</h3>
                        <p>Healthy and hygienic food services.</p>
                    </div>

                    <div className="facility">
                        <div>🔒</div>
                        <h3>24/7 Security</h3>
                        <p>Safe and secure hostel environment.</p>
                    </div>

                    <div className="facility">
                        <div>📢</div>
                        <h3>Instant Notices</h3>
                        <p>Stay updated with important announcements.</p>
                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="cta">

                <span>SMART HOSTEL • SIMPLE MANAGEMENT</span>

                <h2>
                    Your Hostel,
                    <b> Smarter Than Ever.</b>
                </h2>

                <p>
                    A complete digital solution for students,
                    wardens and college administrators.
                </p>

            </section>

        </div>
    );
}

export default LandingPage;