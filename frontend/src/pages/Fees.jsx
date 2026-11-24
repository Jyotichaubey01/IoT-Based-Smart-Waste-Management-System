
import StudentNavbar from "../components/StudentNavbar";

function Fees() {

    return (
        <div className="student-page-wrapper">

            <StudentNavbar />

            <main className="student-main">

                <div className="student-header">

                    <div>
                        <span className="student-label">
                            FEE MANAGEMENT
                        </span>

                        <h1>My Fees 💰</h1>

                        <p>
                            Check your hostel fee payment status.
                        </p>
                    </div>

                </div>

                {/* Fee Summary */}
                <div className="student-stats">

                    <div className="student-stat-card">
                        <div className="stat-icon">💰</div>

                        <div>
                            <span>Total Fees</span>
                            <h2>₹10,000</h2>
                        </div>
                    </div>

                    <div className="student-stat-card">
                        <div className="stat-icon">✅</div>

                        <div>
                            <span>Paid</span>
                            <h2>₹7,500</h2>
                        </div>
                    </div>

                    <div className="student-stat-card">
                        <div className="stat-icon">⏳</div>

                        <div>
                            <span>Pending</span>
                            <h2>₹2,500</h2>
                        </div>
                    </div>

                </div>

                {/* Fee Details */}
                <section className="student-panel">

                    <div className="panel-heading">
                        <h2>📋 Fee Details</h2>
                    </div>

                    <div className="fee-table-wrapper">

                        <table className="fee-table">

                            <thead>
                                <tr>
                                    <th>Fee Type</th>
                                    <th>Amount</th>
                                    <th>Due Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>Hostel Fee</td>
                                    <td>₹7,500</td>
                                    <td>01 Sep 2026</td>
                                    <td>
                                        <span className="status resolved">
                                            Paid
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Mess Fee</td>
                                    <td>₹2,500</td>
                                    <td>10 Sep 2026</td>
                                    <td>
                                        <span className="status pending">
                                            Pending
                                        </span>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="fee-summary">

                        <div>
                            <span>Total Amount</span>
                            <strong>₹10,000</strong>
                        </div>

                        <div>
                            <span>Paid Amount</span>
                            <strong>₹7,500</strong>
                        </div>

                        <div>
                            <span>Pending Amount</span>
                            <strong>₹2,500</strong>
                        </div>

                    </div>

                    <button
                        className="complaint-btn"
                        onClick={() =>
                            alert("Payment gateway coming soon!")
                        }
                    >
                        Pay Pending Fees
                    </button>

                </section>

            </main>
        </div>
    );
}

export default Fees;