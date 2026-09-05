import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">

            {/* =====================================================
                1. HERO SECTION
            ====================================================== */}
            <section
                id="home"
                className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 px-6 py-20 text-white md:px-12 lg:px-20"
            >
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    {/* HERO CONTENT */}
                    <div>
                        <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
                            ✨ Smart & Secure Hostel Management
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                            Manage Your Hostel
                            <span className="block text-blue-200">
                                Smarter & Better
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-indigo-100 md:text-lg">
                            A modern digital platform to manage students,
                            rooms, wardens, fees, complaints and hostel
                            activities — all from one powerful system.
                        </p>

                        {/* HERO FEATURES */}
                        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
                            <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                                ✓ Easy Management
                            </div>

                            <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                                ✓ Secure System
                            </div>

                            <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                                ✓ Real-Time Updates
                            </div>
                        </div>

                        {/* HERO STATS */}
                        <div className="mt-10 flex flex-wrap gap-10">
                            <div>
                                <strong className="block text-3xl font-bold">
                                    500+
                                </strong>
                                <span className="text-sm text-indigo-200">
                                    Students
                                </span>
                            </div>

                            <div>
                                <strong className="block text-3xl font-bold">
                                    100+
                                </strong>
                                <span className="text-sm text-indigo-200">
                                    Rooms
                                </span>
                            </div>

                            <div>
                                <strong className="block text-3xl font-bold">
                                    24/7
                                </strong>
                                <span className="text-sm text-indigo-200">
                                    Support
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* =====================================================
                        DASHBOARD PREVIEW
                    ====================================================== */}
                    <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl md:p-6">

                        <div className="rounded-2xl bg-white p-5 text-slate-800 shadow-xl">

                            {/* PREVIEW HEADER */}
                            <div className="flex items-start justify-between">
                                <div>
                                    <small className="font-semibold tracking-wider text-indigo-500">
                                        HOSTEL MANAGEMENT
                                    </small>

                                    <h3 className="mt-1 text-xl font-bold">
                                        Dashboard Overview
                                    </h3>
                                </div>

                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                                    ● Live
                                </span>
                            </div>

                            {/* WELCOME */}
                            <div className="mt-7">
                                <span className="text-sm text-slate-500">
                                    Welcome back 👋
                                </span>

                                <h3 className="mt-1 text-lg font-bold">
                                    Today's Overview
                                </h3>
                            </div>

                            {/* PREVIEW CARDS */}
                            <div className="mt-5 grid grid-cols-2 gap-3">

                                <div className="rounded-xl bg-indigo-50 p-4">
                                    <div className="text-2xl">👨‍🎓</div>
                                    <strong className="mt-2 block text-xl">
                                        250
                                    </strong>
                                    <small className="text-slate-500">
                                        Students
                                    </small>
                                </div>

                                <div className="rounded-xl bg-blue-50 p-4">
                                    <div className="text-2xl">🛏️</div>
                                    <strong className="mt-2 block text-xl">
                                        100
                                    </strong>
                                    <small className="text-slate-500">
                                        Rooms
                                    </small>
                                </div>

                                <div className="rounded-xl bg-purple-50 p-4">
                                    <div className="text-2xl">📝</div>
                                    <strong className="mt-2 block text-xl">
                                        05
                                    </strong>
                                    <small className="text-slate-500">
                                        Complaints
                                    </small>
                                </div>

                                <div className="rounded-xl bg-green-50 p-4">
                                    <div className="text-2xl">💰</div>
                                    <strong className="mt-2 block text-xl">
                                        95%
                                    </strong>
                                    <small className="text-slate-500">
                                        Fees Paid
                                    </small>
                                </div>
                            </div>

                            {/* RECENT ACTIVITY */}
                            <div className="mt-5 rounded-xl border border-slate-100 p-4">

                                <div className="flex items-center justify-between">
                                    <strong className="text-sm">
                                        Recent Activity
                                    </strong>

                                    <span className="text-xs font-medium text-green-500">
                                        Live Updates
                                    </span>
                                </div>

                                <div className="mt-4 space-y-4">

                                    <div className="flex items-center gap-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

                                        <div className="flex-1">
                                            <strong className="block text-xs">
                                                New Student Registered
                                            </strong>

                                            <small className="text-xs text-slate-400">
                                                Rahul joined Room 204
                                            </small>
                                        </div>

                                        <small className="text-xs text-slate-400">
                                            2m
                                        </small>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

                                        <div className="flex-1">
                                            <strong className="block text-xs">
                                                Fee Payment Received
                                            </strong>

                                            <small className="text-xs text-slate-400">
                                                ₹12,500 payment completed
                                            </small>
                                        </div>

                                        <small className="text-xs text-slate-400">
                                            10m
                                        </small>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

                                        <div className="flex-1">
                                            <strong className="block text-xs">
                                                New Complaint
                                            </strong>

                                            <small className="text-xs text-slate-400">
                                                Water issue reported
                                            </small>
                                        </div>

                                        <small className="text-xs text-slate-400">
                                            20m
                                        </small>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            {/* =====================================================
                2. SERVICES / ROLE SECTION
            ====================================================== */}
            <section
                id="services"
                className="px-6 py-20 md:px-12 lg:px-20"
            >
                <div className="mx-auto max-w-7xl">

                    {/* SECTION HEADING */}
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <span className="text-sm font-bold tracking-widest text-indigo-600">
                            ACCESS PORTAL
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                            Choose Your
                            <span className="text-indigo-600">
                                {" "}Role
                            </span>
                        </h2>

                        <p className="mt-4 text-slate-500">
                            Select your role and login to your dedicated
                            hostel management portal.
                        </p>
                    </div>


                    {/* ROLE CARDS */}
                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                        {/* =================================================
                            STUDENT ROLE
                        ================================================== */}
                        <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
                                    🎓
                                </div>

                                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-600">
                                    STUDENT
                                </span>
                            </div>

                            <h3 className="mt-7 text-2xl font-bold">
                                Student Portal
                            </h3>

                            <p className="mt-3 leading-7 text-slate-500">
                                Students can manage their profile, room
                                details, fees, complaints, notices and
                                hostel activities.
                            </p>

                            <div className="mt-6 space-y-3 text-sm text-slate-600">
                                <div>✓ Room Details</div>
                                <div>✓ Fee Management</div>
                                <div>✓ Complaint Management</div>
                            </div>

                            <button
                                onClick={() => navigate("/login")}
                                className="mt-7 flex w-full items-center justify-between rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
                            >
                                <span>Student Login</span>
                                <span className="text-xl transition group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                        </div>


                        {/* =================================================
                            WARDEN ROLE
                        ================================================== */}
                        <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
                                    👨‍💼
                                </div>

                                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-600">
                                    WARDEN
                                </span>
                            </div>

                            <h3 className="mt-7 text-2xl font-bold">
                                Warden Management
                            </h3>

                            <p className="mt-3 leading-7 text-slate-500">
                                Wardens can monitor students, manage rooms,
                                handle complaints and maintain hostel
                                records.
                            </p>

                            <div className="mt-6 space-y-3 text-sm text-slate-600">
                                <div>✓ Student Monitoring</div>
                                <div>✓ Room Management</div>
                                <div>✓ Complaint Management</div>
                            </div>

                            <button
                                onClick={() => navigate("/login")}
                                className="mt-7 flex w-full items-center justify-between rounded-xl bg-purple-600 px-5 py-3.5 font-semibold text-white transition hover:bg-purple-700"
                            >
                                <span>Warden Login</span>
                                <span className="text-xl transition group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                        </div>


                        {/* =================================================
                            ADMIN ROLE
                        ================================================== */}
                        <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl md:col-span-2 lg:col-span-1">

                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                                    🏫
                                </div>

                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
                                    ADMIN
                                </span>
                            </div>

                            <h3 className="mt-7 text-2xl font-bold">
                                College / Admin
                            </h3>

                            <p className="mt-3 leading-7 text-slate-500">
                                Complete control over students, rooms,
                                wardens, fees and hostel operations.
                            </p>

                            <div className="mt-6 space-y-3 text-sm text-slate-600">
                                <div>✓ Complete Control</div>
                                <div>✓ Reports & Analytics</div>
                                <div>✓ User Management</div>
                            </div>

                            <button
                                onClick={() => navigate("/login")}
                                className="mt-7 flex w-full items-center justify-between rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                            >
                                <span>Admin Login</span>
                                <span className="text-xl transition group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                3. ABOUT SECTION
            ====================================================== */}
            <section
                id="about"
                className="bg-white px-6 py-20 md:px-12 lg:px-20"
            >
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    {/* ABOUT VISUAL */}
                    <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 p-10 text-center text-white shadow-2xl">
                        <div className="text-7xl">
                            🏠
                        </div>

                        <h3 className="mt-6 text-3xl font-bold">
                            One Smart Platform
                        </h3>

                        <p className="mx-auto mt-4 max-w-md text-indigo-100">
                            Everything your hostel needs, available in one
                            place.
                        </p>
                    </div>


                    {/* ABOUT CONTENT */}
                    <div>
                        <span className="text-sm font-bold tracking-widest text-indigo-600">
                            ABOUT OUR SYSTEM
                        </span>

                        <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                            Making Hostel Management
                            <span className="block text-indigo-600">
                                Simple & Digital
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-slate-500">
                            Our Hostel Management System helps colleges and
                            hostels replace traditional paperwork with a
                            fast, secure and centralized digital platform.
                        </p>

                        <div className="mt-7 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl bg-slate-50 p-4 font-medium">
                                ✓ Easy to use
                            </div>

                            <div className="rounded-xl bg-slate-50 p-4 font-medium">
                                ✓ Secure authentication
                            </div>

                            <div className="rounded-xl bg-slate-50 p-4 font-medium">
                                ✓ Real-time information
                            </div>

                            <div className="rounded-xl bg-slate-50 p-4 font-medium">
                                ✓ Accessible anywhere
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* =====================================================
                4. HOSTEL FACILITIES SECTION
            ====================================================== */}
            <section
                id="facilities"
                className="px-6 py-20 md:px-12 lg:px-20"
            >
                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <span className="text-sm font-bold tracking-widest text-indigo-600">
                            HOSTEL FACILITIES
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                            Everything For A
                            <span className="text-indigo-600">
                                {" "}Better Stay
                            </span>
                        </h2>

                        <p className="mt-4 text-slate-500">
                            Designed to make hostel life comfortable, safe
                            and organized.
                        </p>
                    </div>


                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {/* FACILITY 1 */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
                                🛏️
                            </div>

                            <h3 className="mt-5 text-lg font-bold">
                                Comfortable Rooms
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Clean and comfortable accommodation.
                            </p>
                        </div>


                        {/* FACILITY 2 */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                                🍽️
                            </div>

                            <h3 className="mt-5 text-lg font-bold">
                                Mess Facility
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Healthy and hygienic food services.
                            </p>
                        </div>


                        {/* FACILITY 3 */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                                🔒
                            </div>

                            <h3 className="mt-5 text-lg font-bold">
                                24/7 Security
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Safe and secure hostel environment.
                            </p>
                        </div>


                        {/* FACILITY 4 */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
                                📢
                            </div>

                            <h3 className="mt-5 text-lg font-bold">
                                Instant Notices
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Stay updated with important announcements.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                5. CALL TO ACTION (CTA) SECTION
            ====================================================== */}
            <section
                id="contact"
                className="bg-slate-950 px-6 py-20 text-center text-white md:px-12"
            >
                <div className="mx-auto max-w-4xl">

                    <span className="text-sm font-bold tracking-widest text-indigo-400">
                        SMART HOSTEL • SIMPLE MANAGEMENT
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
                        Your Hostel,
                        <span className="block text-indigo-400">
                            Smarter Than Ever.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-slate-400">
                        A complete digital solution for students, wardens
                        and college administrators.
                    </p>

                </div>
            </section>

        </div>
    );
}

export default LandingPage;