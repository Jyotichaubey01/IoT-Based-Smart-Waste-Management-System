import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  // Role can be 'student' | 'warden' | 'director'
  const initialRole = location.state?.role || "student";
  const [selectedRole, setSelectedRole] = useState(initialRole);

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Update role if passed from navigation state
  useEffect(() => {
    if (location.state?.role) {
      setSelectedRole(location.state.role);
    }
  }, [location.state]);

  // Demo accounts helper
  const demoAccounts = {
    student: {
      email: "student@hostel.com",
      password: "Student@123",
      label: "Student Demo",
      desc: "Room allocation, live complaints tracking & student profile",
      badge: "🎓 Student Portal",
    },
    warden: {
      email: "warden@hostel.com",
      password: "Warden@123",
      label: "Warden Demo",
      desc: "Manage room inventory, approve allocations & resolve student issues",
      badge: "👨‍💼 Warden Portal",
    },
    director: {
      email: "director@hostel.com",
      password: "Director@123",
      label: "Director Demo",
      desc: "Executive hostel oversight, audit logs & warden performance analytics",
      badge: "🏛️ Director Portal",
    },
  };

  const handleFillDemo = (role) => {
    setSelectedRole(role);
    setIdentifier(demoAccounts[role].email);
    setPassword(demoAccounts[role].password);
    setErrorMessage("");
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setErrorMessage("");
    // Clear credentials when changing role tab if they were from demo
    if (identifier.includes("@hostel.com")) {
      setIdentifier(demoAccounts[role].email);
      setPassword(demoAccounts[role].password);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Form Validation
    if (!identifier.trim()) {
      setErrorMessage("Please enter your registered Email or ID.");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);

    // Save mock session user for UI preview
    setTimeout(() => {
      setIsLoading(false);

      const mockUser = {
        name:
          selectedRole === "student"
            ? "Ayush Sharma"
            : selectedRole === "warden"
            ? "Dr. Rajesh Sharma"
            : "Prof. K. N. Verma",
        email: identifier,
        role: selectedRole,
        studentId: selectedRole === "student" ? "HST-2026-104" : undefined,
      };

      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("token", "demo_jwt_token_" + selectedRole);

      // Navigate to respective dashboard
      if (selectedRole === "student") {
        navigate("/student");
      } else if (selectedRole === "warden") {
        navigate("/warden");
      } else {
        navigate("/director");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans">
      {/* Background Decorative Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header / Brand Bar */}
      <div className="w-full max-w-5xl mb-6 flex items-center justify-between z-10">
        <Link
          to="/"
          className="flex items-center gap-3 text-white group transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
            🏠
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              Hostel<span className="text-blue-400">Hub</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">
                Campus Portal
              </span>
            </h1>
            <p className="text-xs text-slate-400">Smart Hostel Management System</p>
          </div>
        </Link>

        <Link
          to="/"
          className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-1.5 rounded-lg border border-slate-700/60 hover:bg-slate-800"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main Container Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10 border border-slate-100">
        
        {/* Left Side: Campus Branding & Role Highlights (Desktop only) */}
        <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-10 flex-col justify-between text-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold mb-6">
              ✨ Official College Portal
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight leading-snug">
              Secure Access for <span className="text-blue-400">Hostel Community</span>
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Sign in with your institutional credentials to manage hostel bookings, track room allocations, report issues, and monitor campus living facilities.
            </p>

            {/* Role highlights banner */}
            <div className="mt-8 space-y-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3">
                <span className="text-xl">🛏️</span>
                <div>
                  <h4 className="text-xs font-semibold text-white">Interactive Room Availability</h4>
                  <p className="text-[11px] text-slate-300">View room directions (Garden View, Road View) and bed allocations.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3">
                <span className="text-xl">🛠️</span>
                <div>
                  <h4 className="text-xs font-semibold text-white">Automated Maintenance Desk</h4>
                  <p className="text-[11px] text-slate-300">Submit complaints for water, electricity, and cleanliness with live status tracking.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3">
                <span className="text-xl">📊</span>
                <div>
                  <h4 className="text-xs font-semibold text-white">Director & Warden Audits</h4>
                  <p className="text-[11px] text-slate-300">Complete performance analytics and hostel occupancy oversight.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>© 2026 HostelHub System</span>
            <span>256-bit SSL Encrypted</span>
          </div>
        </div>

        {/* Right Side: Tabbed Login Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-white">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Authentication Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Sign In to Your Account
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Select your role and enter your institutional credentials.
            </p>
          </div>

          {/* 1. THREE ROLE SELECTOR TABS */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Login Role
            </label>
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              
              {/* Student Role Tab */}
              <button
                type="button"
                onClick={() => handleRoleChange("student")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedRole === "student"
                    ? "bg-white text-blue-700 shadow-md shadow-slate-200 border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                <span className="text-base sm:text-lg">🎓</span>
                <span>Student</span>
              </button>

              {/* Warden Role Tab */}
              <button
                type="button"
                onClick={() => handleRoleChange("warden")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedRole === "warden"
                    ? "bg-white text-indigo-700 shadow-md shadow-slate-200 border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                <span className="text-base sm:text-lg">👨‍💼</span>
                <span>Warden</span>
              </button>

              {/* Director Role Tab */}
              <button
                type="button"
                onClick={() => handleRoleChange("director")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedRole === "director"
                    ? "bg-white text-slate-900 shadow-md shadow-slate-200 border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                <span className="text-base sm:text-lg">🏛️</span>
                <span>Director</span>
              </button>

            </div>

            {/* Dynamic Role Badge & Description */}
            <div className="mt-3 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-700">
                {demoAccounts[selectedRole].badge}
              </span>
              <span className="text-slate-500 hidden sm:inline text-[11px]">
                {demoAccounts[selectedRole].desc}
              </span>
            </div>
          </div>

          {/* Error Alert */}
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2 animate-shake">
              <span className="text-base">⚠️</span>
              <span className="leading-tight">{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email / ID Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                {selectedRole === "student"
                  ? "Student Email or ID"
                  : selectedRole === "warden"
                  ? "Warden Email or Staff ID"
                  : "Director Official Email"}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                  ✉️
                </span>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={
                    selectedRole === "student"
                      ? "student@hostel.com or Roll No"
                      : selectedRole === "warden"
                      ? "warden@hostel.com"
                      : "director@hostel.com"
                  }
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-800 text-sm outline-none transition placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => alert("Password reset instructions have been sent to your registered hostel email.")}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                  🔒
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your secret password"
                  className="w-full pl-10 pr-11 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-800 text-sm outline-none transition placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 text-sm focus:outline-none"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-slate-600 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
                />
                <span>Remember this device</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm tracking-wide shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                selectedRole === "student"
                  ? "bg-blue-600 hover:bg-blue-700 shadow-blue-500/25 active:bg-blue-800"
                  : selectedRole === "warden"
                  ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/25 active:bg-indigo-800"
                  : "bg-slate-900 hover:bg-slate-800 shadow-slate-900/25 active:bg-black"
              } ${isLoading ? "opacity-75 cursor-not-allowed" : "hover:scale-[1.01]"}`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credentials Autofill Helper */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                ⚡ Quick Demo Accounts (One-Click Fill)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleFillDemo("student")}
                className="text-left p-2.5 rounded-xl border border-blue-100 bg-blue-50/50 hover:bg-blue-50 transition text-xs"
              >
                <div className="font-semibold text-blue-900">🎓 Student</div>
                <div className="text-[10px] text-slate-500 truncate">student@hostel.com</div>
              </button>

              <button
                type="button"
                onClick={() => handleFillDemo("warden")}
                className="text-left p-2.5 rounded-xl border border-indigo-100 bg-indigo-50/50 hover:bg-indigo-50 transition text-xs"
              >
                <div className="font-semibold text-indigo-900">👨‍💼 Warden</div>
                <div className="text-[10px] text-slate-500 truncate">warden@hostel.com</div>
              </button>

              <button
                type="button"
                onClick={() => handleFillDemo("director")}
                className="text-left p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition text-xs"
              >
                <div className="font-semibold text-slate-900">🏛️ Director</div>
                <div className="text-[10px] text-slate-500 truncate">director@hostel.com</div>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Info */}
      <div className="mt-6 text-center text-xs text-slate-400 z-10">
        <p>Hostel Management System • Final Year Academic Project Portal</p>
      </div>
    </div>
  );
}
