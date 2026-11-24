import { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function StudentNavbar() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const dropdownRef = useRef(null);

    // Get user from localStorage
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
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setShowDropdown(false);
        setShowMobileMenu(false);

        navigate("/");
    };

    // Mobile navigation
    const handleMobileNavigation = () => {
        setShowMobileMenu(false);
        setShowDropdown(false);
    };

    const userName = user?.name || "Student";
    const userRole = user?.role || "student";

    const firstLetter = userName.charAt(0).toUpperCase();

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
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">

            {/* ================= NAVBAR ================= */}
            <div className="mx-auto flex min-h-[68px] w-full max-w-[1600px] items-center justify-between px-3 sm:px-5 md:px-8 lg:px-10">

                {/* ================= BRAND ================= */}
                <button
                    type="button"
                    onClick={() => {
                        navigate("/student");
                        setShowMobileMenu(false);
                    }}
                    className="flex shrink-0 items-center gap-2 sm:gap-3"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-lg shadow-sm sm:h-10 sm:w-10 sm:text-xl">
                        🏠
                    </div>

                    <div className="text-left">
                        <h2 className="text-base font-bold leading-tight text-gray-900 sm:text-lg md:text-xl">
                            HostelHub
                        </h2>

                        <span className="hidden text-[10px] text-gray-500 xs:block sm:text-xs">
                            Student Portal
                        </span>
                    </div>
                </button>

                {/* ================= DESKTOP NAV ================= */}
                <div className="hidden items-center gap-1 md:flex lg:gap-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.end}
                            className={({ isActive }) =>
                                `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 lg:px-4
                                ${
                                    isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">

                    {/* Notification */}
                    <button
                        type="button"
                        onClick={() => alert("No new notifications")}
                        title="Notifications"
                        className="relative flex h-9 w-9 items-center justify-center rounded-full text-lg transition hover:bg-gray-100 sm:h-10 sm:w-10"
                    >
                        🔔

                        <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                            3
                        </span>
                    </button>

                    {/* ================= PROFILE ================= */}
                    <div
                        ref={dropdownRef}
                        className="relative hidden sm:block"
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setShowDropdown((prev) => !prev)
                            }
                            className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-gray-100 md:px-3"
                        >
                            {/* Avatar */}
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white sm:h-10 sm:w-10">
                                {firstLetter}
                            </div>

                            {/* User information */}
                            <div className="hidden text-left md:block">
                                <strong className="block max-w-[120px] truncate text-sm font-semibold text-gray-800 lg:max-w-[160px]">
                                    {userName}
                                </strong>

                                <small className="block text-xs capitalize text-gray-500">
                                    {userRole}
                                </small>
                            </div>

                            <span className="hidden text-xs text-gray-500 md:block">
                                {showDropdown ? "▲" : "▼"}
                            </span>
                        </button>

                        {/* Profile Dropdown */}
                        {showDropdown && (
                            <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-xl">

                                <button
                                    type="button"
                                    onClick={() => {
                                        navigate("/student/profile");
                                        setShowDropdown(false);
                                    }}
                                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-50"
                                >
                                    👤
                                    <span>Profile</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        navigate("/student/settings");
                                        setShowDropdown(false);
                                    }}
                                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-50"
                                >
                                    ⚙️
                                    <span>Settings</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        navigate("/student/change-password");
                                        setShowDropdown(false);
                                    }}
                                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-50"
                                >
                                    🔒
                                    <span>Change Password</span>
                                </button>

                                <div className="my-1 border-t border-gray-100" />

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
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
                        onClick={() =>
                            setShowMobileMenu((prev) => !prev)
                        }
                        aria-label="Toggle menu"
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-gray-700 transition hover:bg-gray-100 md:hidden"
                    >
                        {showMobileMenu ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}
            {showMobileMenu && (
                <div className="border-t border-gray-200 bg-white shadow-lg md:hidden">

                    {/* Mobile User */}
                    <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4 sm:px-6">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                            {firstLetter}
                        </div>

                        <div className="min-w-0">
                            <strong className="block truncate text-sm font-semibold text-gray-800">
                                {userName}
                            </strong>

                            <span className="text-xs capitalize text-gray-500">
                                {userRole}
                            </span>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex flex-col gap-1 px-3 py-3 sm:px-5">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.end}
                                onClick={handleMobileNavigation}
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-3 text-sm font-medium transition
                                    ${
                                        isActive
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-gray-700 hover:bg-gray-50"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="mx-4 border-t border-gray-100 sm:mx-6" />

                    {/* Mobile Profile */}
                    <div className="flex flex-col gap-1 px-3 py-3 sm:px-5">

                        <button
                            type="button"
                            onClick={() => {
                                navigate("/student/profile");
                                handleMobileNavigation();
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                            👤 Profile
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                navigate("/student/settings");
                                handleMobileNavigation();
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                            ⚙️ Settings
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                navigate("/student/change-password");
                                handleMobileNavigation();
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                            🔒 Change Password
                        </button>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                        >
                            🚪 Logout
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default StudentNavbar;