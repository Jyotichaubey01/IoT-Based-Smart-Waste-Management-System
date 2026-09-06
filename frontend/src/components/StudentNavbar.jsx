
import { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function StudentNavbar() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Invalid user data:", error);
            }
        }
    }, []);

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setShowDropdown(false);
        setShowMobileMenu(false);

        navigate("/");
    };

    const handleMobileNavigation = () => {
        setShowMobileMenu(false);
        setShowDropdown(false);
    };

    const userName = user?.name || "Student";
    const userRole = user?.role || "student";

    const firstLetter =
        userName.charAt(0).toUpperCase();

    const navLinks = [
        {
            label: "Home",
            path: "/student",
            end: true,
        },
        {
            label: "My Room",
            path: "/student/room",
        },
        {
            label: "Complaints",
            path: "/student/complaints",
        },
        {
            label: "Fees",
            path: "/student/fees",
        },
    ];

    return (
        <nav className="student-navbar">

            {/* ================= BRAND ================= */}
            <div
                className="student-brand"
                onClick={() => {
                    navigate("/student");
                    setShowMobileMenu(false);
                }}
            >
                <div className="student-brand-icon">
                    🏠
                </div>

                <div className="student-brand-text">
                    <h2>HostelHub</h2>
                    <span>Student Portal</span>
                </div>
            </div>

            {/* ================= DESKTOP NAV ================= */}
            <div className="desktop-nav">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end={link.end}
                        className={({ isActive }) =>
                            `nav-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="student-nav-right">

                {/* Notification */}
                <button
                    type="button"
                    className="notification"
                    onClick={() =>
                        alert("No new notifications")
                    }
                    title="Notifications"
                >
                    🔔
                    <span>3</span>
                </button>

                {/* ================= PROFILE ================= */}
                <div
                    className="profile-dropdown-wrapper"
                    ref={dropdownRef}
                >
                    <button
                        type="button"
                        className="student-profile"
                        onClick={() =>
                            setShowDropdown((prev) => !prev)
                        }
                    >
                        <div className="profile-avatar">
                            {firstLetter}
                        </div>

                        <div className="profile-info">
                            <strong>{userName}</strong>

                            <small>
                                {userRole
                                    .charAt(0)
                                    .toUpperCase() +
                                    userRole.slice(1)}
                            </small>
                        </div>

                        <span className="profile-arrow">
                            {showDropdown ? "▲" : "▼"}
                        </span>
                    </button>

                    {/* Profile Dropdown */}
                    {showDropdown && (
                        <div className="profile-dropdown">

                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => {
                                    navigate(
                                        "/student/profile"
                                    );
                                    setShowDropdown(false);
                                }}
                            >
                                👤
                                <span>Profile</span>
                            </button>

                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => {
                                    navigate(
                                        "/student/settings"
                                    );
                                    setShowDropdown(false);
                                }}
                            >
                                ⚙️
                                <span>Settings</span>
                            </button>

                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => {
                                    navigate(
                                        "/student/change-password"
                                    );
                                    setShowDropdown(false);
                                }}
                            >
                                🔒
                                <span>Change Password</span>
                            </button>

                            <div className="dropdown-divider"></div>

                            <button
                                type="button"
                                className="dropdown-item logout"
                                onClick={handleLogout}
                            >
                                🚪
                                <span>Logout</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* ================= MOBILE BUTTON ================= */}
                <button
                    type="button"
                    className="mobile-menu-button"
                    onClick={() =>
                        setShowMobileMenu((prev) => !prev)
                    }
                    aria-label="Toggle menu"
                >
                    {showMobileMenu ? "✕" : "☰"}
                </button>
            </div>

            {/* ================= MOBILE MENU ================= */}
            {showMobileMenu && (
                <div className="mobile-nav-menu">

                    <div className="mobile-user-info">
                        <div className="mobile-avatar">
                            {firstLetter}
                        </div>

                        <div>
                            <strong>{userName}</strong>
                            <span>
                                {userRole
                                    .charAt(0)
                                    .toUpperCase() +
                                    userRole.slice(1)}
                            </span>
                        </div>
                    </div>

                    <div className="mobile-nav-links">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.end}
                                onClick={
                                    handleMobileNavigation
                                }
                                className={({ isActive }) =>
                                    `mobile-nav-link ${
                                        isActive
                                            ? "active"
                                            : ""
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="mobile-menu-divider"></div>

                    <button
                        type="button"
                        className="mobile-profile-link"
                        onClick={() => {
                            navigate(
                                "/student/profile"
                            );
                            handleMobileNavigation();
                        }}
                    >
                        👤 Profile
                    </button>

                    <button
                        type="button"
                        className="mobile-profile-link"
                        onClick={() => {
                            navigate(
                                "/student/settings"
                            );
                            handleMobileNavigation();
                        }}
                    >
                        ⚙️ Settings
                    </button>

                    <button
                        type="button"
                        className="mobile-logout"
                        onClick={handleLogout}
                    >
                        🚪 Logout
                    </button>
                </div>
            )}
        </nav>
    );
}

export default StudentNavbar;

