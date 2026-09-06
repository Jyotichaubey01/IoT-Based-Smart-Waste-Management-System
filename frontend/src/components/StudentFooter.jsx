function StudentFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="student-footer">

            {/* Brand */}
            <div className="student-footer-brand">
                <div className="footer-logo">
                    🏠
                </div>

                <div>
                    <h3>
                        Hostel<span>Hub</span>
                    </h3>

                    <p>
                        Smart Hostel Management System
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className="student-footer-copyright">
                <p>
                    © {currentYear} HostelHub. All rights reserved.
                </p>

                <span>
                    Student Portal
                </span>
            </div>

            {/* Links */}
            <div className="student-footer-links">
                <button onClick={() => alert("Privacy Policy")}>
                    Privacy
                </button>

                <button onClick={() => alert("Terms & Conditions")}>
                    Terms
                </button>

                <button onClick={() => alert("Help & Support")}>
                    Help
                </button>
            </div>

        </footer>
    );
}

export default StudentFooter;