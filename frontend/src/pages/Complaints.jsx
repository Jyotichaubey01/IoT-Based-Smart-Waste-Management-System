
import { useState } from "react";
import StudentNavbar from "../../components/StudentNavbar";

function Complaints() {

    const [showForm, setShowForm] = useState(false);

    const [complaints, setComplaints] = useState([
        {
            id: 1,
            title: "Bathroom issue",
            description: "Bathroom tap is leaking.",
            date: "04 Sep 2026",
            status: "Pending",
        },
        {
            id: 2,
            title: "Fan not working",
            description: "Room fan is not working properly.",
            date: "02 Sep 2026",
            status: "Resolved",
        },
    ]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Please fill all fields");
            return;
        }

        const newComplaint = {
            id: Date.now(),
            title,
            description,
            date: new Date().toLocaleDateString(),
            status: "Pending",
        };

        setComplaints([
            newComplaint,
            ...complaints,
        ]);

        setTitle("");
        setDescription("");
        setShowForm(false);

        alert("Complaint submitted successfully!");
    };

    return (
        <div className="student-page-wrapper">

            <StudentNavbar />

            <main className="student-main">

                <div className="student-header">

                    <div>
                        <span className="student-label">
                            HOSTEL SUPPORT
                        </span>

                        <h1>Complaints 📝</h1>

                        <p>
                            Submit and track your hostel complaints.
                        </p>
                    </div>

                    <button
                        className="complaint-btn"
                        onClick={() =>
                            setShowForm(!showForm)
                        }
                    >
                        + New Complaint
                    </button>

                </div>

                {/* Complaint Form */}
                {showForm && (
                    <section className="student-panel complaint-form">

                        <div className="panel-heading">
                            <h2>Submit Complaint</h2>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label>
                                    Complaint Title
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter complaint title"
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    Description
                                </label>

                                <textarea
                                    placeholder="Describe your complaint..."
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(
                                            e.target.value
                                        )
                                    }
                                    rows="5"
                                />
                            </div>

                            <button
                                type="submit"
                                className="complaint-btn"
                            >
                                Submit Complaint
                            </button>

                        </form>

                    </section>
                )}

                {/* Complaints List */}
                <section className="student-panel">

                    <div className="panel-heading">
                        <h2>My Complaints</h2>
                    </div>

                    {complaints.length === 0 ? (
                        <p>No complaints found.</p>
                    ) : (
                        complaints.map((complaint) => (

                            <div
                                className="complaint-item"
                                key={complaint.id}
                            >

                                <div>
                                    <h3>
                                        {complaint.title}
                                    </h3>

                                    <p>
                                        {complaint.description}
                                    </p>

                                    <small>
                                        📅 {complaint.date}
                                    </small>
                                </div>

                                <span
                                    className={`status ${
                                        complaint.status ===
                                        "Resolved"
                                            ? "resolved"
                                            : "pending"
                                    }`}
                                >
                                    {complaint.status}
                                </span>

                            </div>

                        ))
                    )}

                </section>

            </main>
        </div>
    );
}

export default Complaints;