
function StudentFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-gray-200 bg-white">

            {/* Main Footer */}
            <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-4 py-6 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-7">

                {/* ================= BRAND ================= */}
                <div className="flex items-center gap-3">

                    {/* Logo */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xl shadow-sm sm:h-12 sm:w-12">
                        🏠
                    </div>

                    {/* Brand Text */}
                    <div className="min-w-0">
                        <h3 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">
                            Hostel<span className="text-blue-600">Hub</span>
                        </h3>

                        <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                            Smart Hostel Management System
                        </p>
                    </div>
                </div>

                {/* ================= COPYRIGHT ================= */}
                <div className="text-left lg:text-center">
                    <p className="text-xs text-gray-500 sm:text-sm">
                        © {currentYear} HostelHub. All rights reserved.
                    </p>

                    <span className="mt-1 block text-xs font-medium text-blue-600">
                        Student Portal
                    </span>
                </div>

                {/* ================= LINKS ================= */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:justify-end">

                    <button
                        type="button"
                        onClick={() => alert("Privacy Policy")}
                        className="rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 sm:px-4 sm:text-sm"
                    >
                        Privacy
                    </button>

                    <button
                        type="button"
                        onClick={() => alert("Terms & Conditions")}
                        className="rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 sm:px-4 sm:text-sm"
                    >
                        Terms
                    </button>

                    <button
                        type="button"
                        onClick={() => alert("Help & Support")}
                        className="rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 sm:px-4 sm:text-sm"
                    >
                        Help
                    </button>

                </div>
            </div>

            {/* ================= BOTTOM LINE ================= */}
            <div className="border-t border-gray-100 px-4 py-3 text-center sm:px-6">
                <p className="text-[10px] text-gray-400 sm:text-xs">
                    Designed for a smarter and easier hostel experience.
                </p>
            </div>

        </footer>
    );
}

export default StudentFooter;


