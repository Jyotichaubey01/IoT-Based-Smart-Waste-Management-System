
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000";

function Auth() {
    const [isLogin, setIsLogin] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // =========================
    // SIGN UP
    // =========================
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
                response.data.message ||
                "Account created successfully!"
            );

            // Clear form
            setName("");
            setEmail("");
            setPassword("");
            setRole("student");

            // After signup, show login
            setTimeout(() => {
                setSuccess("");
                setIsLogin(true);
            }, 1500);

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

    // =========================
    // SIGN IN
    // =========================
    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const response = await axios.post(
                `${API_URL}/api/auth/login`,
                {
                    email,
                    password
                }
            );

            console.log("Login Response:", response.data);

            // Save JWT token
            if (response.data.token) {
                localStorage.setItem(
                    "token",
                    response.data.token
                );
            }

            // Save user
            if (response.data.user) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
            }

            setSuccess("Login successful!");

            // Get role
            const userRole =
                response.data.user?.role;

            // Redirect
            setTimeout(() => {

                if (userRole === "admin") {
                    window.location.href = "/admin";
                }

                else if (userRole === "warden") {
                    window.location.href = "/warden";
                }

                else {
                    window.location.href = "/student";
                }

            }, 1000);

        } catch (error) {
            console.error("Login Error:", error);

            setError(
                error.response?.data?.message ||
                "Invalid email or password."
            );
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // SWITCH LOGIN / SIGNUP
    // =========================
    const switchMode = () => {
        setIsLogin(!isLogin);

        setError("");
        setSuccess("");

        setName("");
        setEmail("");
        setPassword("");
        setRole("student");
    };

    return (
        <div style={styles.container}>

            <div style={styles.card}>

                {/* Header */}
                <h1 style={styles.title}>
                    Hostel Management System
                </h1>

                <h2 style={styles.heading}>
                    {isLogin
                        ? "Sign In"
                        : "Create Account"}
                </h2>

                {/* Error */}
                {error && (
                    <div style={styles.error}>
                        {error}
                    </div>
                )}

                {/* Success */}
                {success && (
                    <div style={styles.success}>
                        {success}
                    </div>
                )}

                {/* =========================
                    SIGN UP FORM
                ========================= */}

                {!isLogin && (
                    <form onSubmit={handleSignUp}>

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            required
                            style={styles.input}
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                            style={styles.input}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                            minLength={6}
                            style={styles.input}
                        />

                        <select
                            value={role}
                            onChange={(e) =>
                                setRole(e.target.value)
                            }
                            style={styles.input}
                        >
                            <option value="student">
                                Student
                            </option>

                            <option value="warden">
                                Warden
                            </option>

                            <option value="admin">
                                Admin
                            </option>
                        </select>

                        <button
                            type="submit"
                            disabled={loading}
                            style={styles.button}
                        >
                            {loading
                                ? "Creating Account..."
                                : "Sign Up"}
                        </button>

                    </form>
                )}

                {/* =========================
                    SIGN IN FORM
                ========================= */}

                {isLogin && (
                    <form onSubmit={handleLogin}>

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                            style={styles.input}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                            style={styles.input}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            style={styles.button}
                        >
                            {loading
                                ? "Signing In..."
                                : "Sign In"}
                        </button>

                    </form>
                )}

                {/* =========================
                    SWITCH OPTION
                ========================= */}

                <p style={styles.switchText}>

                    {isLogin
                        ? "Don't have an account?"
                        : "Already have an account?"}

                    {" "}

                    <button
                        type="button"
                        onClick={switchMode}
                        style={styles.linkButton}
                    >
                        {isLogin
                            ? "Sign Up"
                            : "Sign In"}
                    </button>

                </p>

            </div>

        </div>
    );
}


// =========================
// STYLES
// =========================

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
        boxShadow:
            "0 4px 15px rgba(0,0,0,0.1)",
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

    switchText: {
        marginTop: "20px",
        color: "#64748b"
    },

    linkButton: {
        border: "none",
        background: "none",
        color: "#2563eb",
        fontWeight: "bold",
        fontSize: "15px",
        cursor: "pointer",
        padding: 0
    }
};

export default Auth;

