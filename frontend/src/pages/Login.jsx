
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const response = await axios.post(
                `${API_URL}/api/auth/register`,
                {
                    name,
                    email,
                    password,
                    role
                }
            );

            setSuccess(
                response.data.message || "Registration successful!"
            );

            setName("");
            setEmail("");
            setPassword("");
            setRole("student");

        } catch (error) {
            console.error("Signup Error:", error);

            setError(
                error.response?.data?.message ||
                "Registration failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>

                <h1 style={styles.title}>
                    Hostel Management System
                </h1>

                <h2 style={styles.heading}>
                    Create Account
                </h2>

                {error && (
                    <div style={styles.error}>
                        {error}
                    </div>
                )}

                {success && (
                    <div style={styles.success}>
                        {success}
                    </div>
                )}

                <form onSubmit={handleSignUp}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={styles.input}
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        style={styles.input}
                    />

                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        style={styles.input}
                    >
                        <option value="student">Student</option>
                        <option value="warden">Warden</option>
                        <option value="admin">Admin</option>
                    </select>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            ...styles.button,
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading
                            ? "Creating Account..."
                            : "Sign Up"}
                    </button>

                </form>

                <p style={styles.loginText}>
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        style={styles.loginLink}
                    >
                        Sign In
                    </Link>
                </p>

            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f8",
        padding: "20px"
    },

    card: {
        width: "400px",
        padding: "30px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        textAlign: "center"
    },

    title: {
        marginBottom: "10px",
        color: "#1e293b",
        fontSize: "26px"
    },

    heading: {
        marginBottom: "25px",
        color: "#475569"
    },

    input: {
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px",
        outline: "none"
    },

    button: {
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "5px",
        background: "#2563eb",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
    },

    error: {
        background: "#fee2e2",
        color: "#b91c1c",
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "5px"
    },

    success: {
        background: "#dcfce7",
        color: "#15803d",
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "5px"
    },

    loginText: {
        marginTop: "20px",
        color: "#64748b"
    },

    loginLink: {
        color: "#2563eb",
        fontWeight: "bold",
        textDecoration: "none",
        cursor: "pointer"
    }
};

export default SignUp;

