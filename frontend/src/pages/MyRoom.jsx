import StudentNavbar from "../../components/StudentNavbar";

function MyRoom() {
    return (
        <div className="student-page-wrapper">
            <StudentNavbar />

            <main className="student-main">
                <div className="student-header">
                    <div>
                        <span className="student-label">ACCOMMODATION</span>
                        <h1>My Room 🛏️</h1>
                        <p>View your room and roommate details.</p>
                    </div>
                </div>

                <div className="student-grid">
                    {/* Room Details */}
                    <section className="student-panel">
                        <div className="panel-heading">
                            <h2>🛏️ Room Details</h2>
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

                            <div>
                                <span>Capacity</span>
                                <strong>2 Students</strong>
                            </div>
                        </div>
                    </section>

                    {/* Roommate */}
                    <section className="student-panel">
                        <div className="panel-heading">
                            <h2>👤 Roommate</h2>
                        </div>

                        <div className="roommate-card">
                            <div className="profile-avatar">
                                A
                            </div>

                            <div>
                                <h3>Ayush Kumar</h3>
                                <p>Computer Science & Engineering</p>
                                <small>Roll No: CSE2026-102</small>
                            </div>
                        </div>
                    </section>

                    {/* Room Rules */}
                    <section className="student-panel">
                        <div className="panel-heading">
                            <h2>📋 Room Rules</h2>
                        </div>

                        <div className="notice-item">
                            <div className="notice-icon">✓</div>
                            <div>
                                <strong>Keep the room clean</strong>
                                <p>Maintain cleanliness regularly.</p>
                            </div>
                        </div>

                        <div className="notice-item">
                            <div className="notice-icon">✓</div>
                            <div>
                                <strong>No loud music</strong>
                                <p>Maintain a peaceful environment.</p>
                            </div>
                        </div>

                        <div className="notice-item">
                            <div className="notice-icon">✓</div>
                            <div>
                                <strong>Follow hostel timings</strong>
                                <p>Follow the hostel entry and exit rules.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default MyRoom;