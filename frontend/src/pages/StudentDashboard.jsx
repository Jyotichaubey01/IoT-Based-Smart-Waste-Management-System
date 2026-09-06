
import StudentNavbar from "../components/StudentNavbar";
import StudentContent from "../components/StudentContent";
import StudentFooter from "../components/StudentFooter";
import "../App.css";

function StudentDashboard() {
    return (
        <div className="student-dashboard">

            {/* =================================================
                NAVBAR
            ================================================== */}
            <StudentNavbar />


            {/* =================================================
                MAIN CONTENT
            ================================================== */}
            <StudentContent />


            {/* =================================================
                FOOTER
            ================================================== */}
            <StudentFooter />

        </div>
    );
}

export default StudentDashboard;