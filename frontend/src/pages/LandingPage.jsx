import { useNavigate } from "react-router-dom";
import "../App.css";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">

            {/* =====================================================
                1. HERO SECTION
            ====================================================== */}
            <section className="hero-section" id="home">

                <div className="hero-content">

                    <div className="hero-badge">
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

                    <div className="hero-features">
                        <div>✓ Easy Management</div>
                        <div>✓ Secure System</div>
                        <div>✓ Real-Time Updates</div>
                    </div>

                    <div className="hero-stats">

                        <div>
                            <strong>500+</strong>
                            <span>Students</span>
                        </div>

                        <div>
                            <strong>100+</strong>
                            <span>Rooms</span>
                        </div>

                        <div>
                            <strong>24/7</strong>
                            <span>Support</span>
                        </div>

                    </div>

                </div>


                {/* =====================================================
                    DASHBOARD PREVIEW
                ====================================================== */}
                <div className="hero-visual">

                    <div className="dashboard-preview">

                        <div className="preview-top">

                            <div>
                                <small>HOSTEL MANAGEMENT</small>
                                <h3>Dashboard Overview</h3>
                            </div>

                            <span className="online-status">
                                ● Live
                            </span>

                        </div>


                        <div className="preview-welcome">
                            <span>Welcome back 👋</span>
                            <h3>Today's Overview</h3>
                        </div>


                        {/* Dashboard Cards */}
                        <div className="preview-cards">

                            <div className="preview-card">
                                <div className="preview-icon">
                                    👨‍🎓
                                </div>

                                <div>
                                    <strong>250</strong>
                                    <small>Students</small>
                                </div>
                            </div>


                            <div className="preview-card">
                                <div className="preview-icon">
                                    🛏️
                                </div>

                                <div>
                                    <strong>100</strong>
                                    <small>Rooms</small>
                                </div>
                            </div>


                            <div className="preview-card">
                                <div className="preview-icon">
                                    📝
                                </div>

                                <div>
                                    <strong>05</strong>
                                    <small>Complaints</small>
                                </div>
                            </div>


                            <div className="preview-card">
                                <div className="preview-icon">
                                    💰
                                </div>

                                <div>
                                    <strong>95%</strong>
                                    <small>Fees Paid</small>
                                </div>
                            </div>

                        </div>


                        {/* Recent Activity */}
                        <div className="activity-box">

                            <div className="activity-header">
                                <strong>Recent Activity</strong>
                                <span>Live Updates</span>
                            </div>


                            <div className="activity-item">

                                <span className="activity-dot"></span>

                                <div>
                                    <strong>
                                        New Student Registered
                                    </strong>

                                    <small>
                                        Rahul joined Room 204
                                    </small>
                                </div>

                                <small>2m</small>

                            </div>


                            <div className="activity-item">

                                <span className="activity-dot"></span>

                                <div>
                                    <strong>
                                        Fee Payment Received
                                    </strong>

                                    <small>
                                        ₹12,500 payment completed
                                    </small>
                                </div>

                                <small>10m</small>

                            </div>


                            <div className="activity-item">

                                <span className="activity-dot"></span>

                                <div>
                                    <strong>
                                        New Complaint
                                    </strong>

                                    <small>
                                        Water issue reported
                                    </small>
                                </div>

                                <small>20m</small>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                2. SERVICES / ROLE SECTION
            ====================================================== */}
            <section className="services-section" id="services">

                {/* Section Heading */}
                <div className="section-heading">

                    <span>ACCESS PORTAL</span>

                    <h2>
                        Choose Your
                        <b> Role</b>
                    </h2>

                    <p>
                        Select your role and login to your
                        dedicated hostel management portal.
                    </p>

                </div>


                {/* Role Cards */}
                <div className="service-grid">


                    {/* =================================================
                        STUDENT ROLE
                    ================================================== */}
                    <div className="service-card student-card">

                        <div className="card-top">

                            <div className="service-icon">
                                🎓
                            </div>

                            <span className="role-tag">
                                STUDENT
                            </span>

                        </div>


                        <h3>
                            Student Portal
                        </h3>


                        <p>
                            Students can manage their profile,
                            room details, fees, complaints,
                            notices and hostel activities.
                        </p>


                        <div className="card-features">

                            <span>
                                ✓ Room Details
                            </span>

                            <span>
                                ✓ Fee Management
                            </span>

                            <span>
                                ✓ Complaint Management
                            </span>

                        </div>


                        <button
                            className="login-btn"
                            onClick={() => navigate("/login")}
                        >
                            <span>Student Login</span>
                            <span>→</span>
                        </button>

                    </div>


                    {/* =================================================
                        WARDEN ROLE
                    ================================================== */}
                    <div className="service-card warden-card">

                        <div className="card-top">

                            <div className="service-icon">
                                👨‍💼
                            </div>

                            <span className="role-tag">
                                WARDEN
                            </span>

                        </div>


                        <h3>
                            Warden Management
                        </h3>


                        <p>
                            Wardens can monitor students,
                            manage rooms, handle complaints
                            and maintain hostel records.
                        </p>


                        <div className="card-features">

                            <span>
                                ✓ Student Monitoring
                            </span>

                            <span>
                                ✓ Room Management
                            </span>

                            <span>
                                ✓ Complaint Management
                            </span>

                        </div>


                        <button
                            className="login-btn"
                            onClick={() => navigate("/login")}
                        >
                            <span>Warden Login</span>
                            <span>→</span>
                        </button>

                    </div>


                    {/* =================================================
                        ADMIN ROLE
                    ================================================== */}
                    <div className="service-card admin-card">

                        <div className="card-top">

                            <div className="service-icon">
                                🏫
                            </div>

                            <span className="role-tag">
                                ADMIN
                            </span>

                        </div>


                        <h3>
                            College / Admin
                        </h3>


                        <p>
                            Complete control over students,
                            rooms, wardens, fees and hostel
                            operations.
                        </p>


                        <div className="card-features">

                            <span>
                                ✓ Complete Control
                            </span>

                            <span>
                                ✓ Reports & Analytics
                            </span>

                            <span>
                                ✓ User Management
                            </span>

                        </div>


                        <button
                            className="login-btn"
                            onClick={() => navigate("/login")}
                        >
                            <span>Admin Login</span>
                            <span>→</span>
                        </button>

                    </div>

                </div>

            </section>


            {/* =====================================================
                3. ABOUT SECTION
            ====================================================== */}
            <section className="about-section" id="about">

                {/* About Visual */}
                <div className="about-visual">

                    <div className="about-box">

                        <div className="about-big-icon">
                            🏠
                        </div>

                        <h3>
                            One Smart Platform
                        </h3>

                        <p>
                            Everything your hostel needs,
                            available in one place.
                        </p>

                    </div>

                </div>


                {/* About Content */}
                <div className="about-content">

                    <span className="section-label">
                        ABOUT OUR SYSTEM
                    </span>


                    <h2>
                        Making Hostel Management
                        <span>
                            Simple & Digital
                        </span>
                    </h2>


                    <p>
                        Our Hostel Management System helps
                        colleges and hostels replace traditional
                        paperwork with a fast, secure and
                        centralized digital platform.
                    </p>


                    <div className="about-points">

                        <div>
                            ✓ Easy to use
                        </div>

                        <div>
                            ✓ Secure authentication
                        </div>

                        <div>
                            ✓ Real-time information
                        </div>

                        <div>
                            ✓ Accessible anywhere
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                4. HOSTEL FACILITIES SECTION
            ====================================================== */}
            <section
                className="facilities-section"
                id="facilities"
            >

                {/* Section Heading */}
                <div className="section-heading">

                    <span>
                        HOSTEL FACILITIES
                    </span>

                    <h2>
                        Everything For A
                        <b> Better Stay</b>
                    </h2>

                    <p>
                        Designed to make hostel life
                        comfortable, safe and organized.
                    </p>

                </div>


                {/* Facilities Grid */}
                <div className="facility-grid">


                    {/* Comfortable Rooms */}
                    <div className="facility">

                        <div className="facility-icon">
                            🛏️
                        </div>

                        <h3>
                            Comfortable Rooms
                        </h3>

                        <p>
                            Clean and comfortable
                            accommodation.
                        </p>

                    </div>


                    {/* Mess Facility */}
                    <div className="facility">

                        <div className="facility-icon">
                            🍽️
                        </div>

                        <h3>
                            Mess Facility
                        </h3>

                        <p>
                            Healthy and hygienic
                            food services.
                        </p>

                    </div>


                    {/* Security */}
                    <div className="facility">

                        <div className="facility-icon">
                            🔒
                        </div>

                        <h3>
                            24/7 Security
                        </h3>

                        <p>
                            Safe and secure hostel
                            environment.
                        </p>

                    </div>


                    {/* Notices */}
                    <div className="facility">

                        <div className="facility-icon">
                            📢
                        </div>

                        <h3>
                            Instant Notices
                        </h3>

                        <p>
                            Stay updated with important
                            announcements.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                5. CALL TO ACTION (CTA) SECTION
            ====================================================== */}
            <section
                className="cta-section"
                id="contact"
            >

                <div className="cta-content">

                    <span>
                        SMART HOSTEL • SIMPLE MANAGEMENT
                    </span>


                    <h2>
                        Your Hostel,
                        <strong>
                            Smarter Than Ever.
                        </strong>
                    </h2>


                    <p>
                        A complete digital solution for
                        students, wardens and college
                        administrators.
                    </p>

                </div>

            </section>

        </div>
    );
}

export default LandingPage;