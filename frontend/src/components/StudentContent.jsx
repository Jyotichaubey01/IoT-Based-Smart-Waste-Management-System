
function StudentContent() {
    return (
        <main className="min-h-screen w-full bg-gray-50 px-3 py-5 sm:px-5 sm:py-6 md:px-8 lg:px-10">

            {/* ================= PAGE HEADER ================= */}
            <div className="mx-auto mb-6 flex w-full max-w-[1600px] flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:flex-row md:items-center md:justify-between">

                <div className="min-w-0">
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-600 sm:text-xs">
                        STUDENT DASHBOARD
                    </span>

                    <h1 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                        Welcome back, Jyoti 👋
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        Here's an overview of your hostel information.
                    </p>
                </div>

                <div className="flex w-fit items-center rounded-xl bg-gray-50 px-4 py-3 text-xs font-medium text-gray-600 sm:text-sm">
                    📅 September 2026
                </div>
            </div>


            {/* ================= STATISTICS ================= */}
            <section className="mx-auto mb-6 grid w-full max-w-[1600px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {/* Room */}
                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                        🛏️
                    </div>

                    <div className="min-w-0">
                        <span className="block text-xs font-medium text-gray-500">
                            Room Number
                        </span>

                        <strong className="mt-0.5 block text-xl font-bold text-gray-900">
                            205
                        </strong>

                        <small className="block truncate text-xs text-gray-500">
                            Block A • 2nd Floor
                        </small>
                    </div>
                </div>


                {/* Fee */}
                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl">
                        💰
                    </div>

                    <div className="min-w-0">
                        <span className="block text-xs font-medium text-gray-500">
                            Fee Status
                        </span>

                        <strong className="mt-0.5 block text-xl font-bold text-green-600">
                            Paid
                        </strong>

                        <small className="block truncate text-xs text-gray-500">
                            Next due: Oct 10, 2026
                        </small>
                    </div>
                </div>


                {/* Complaints */}
                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                        📝
                    </div>

                    <div className="min-w-0">
                        <span className="block text-xs font-medium text-gray-500">
                            Complaints
                        </span>

                        <strong className="mt-0.5 block text-xl font-bold text-gray-900">
                            02
                        </strong>

                        <small className="block truncate text-xs text-gray-500">
                            1 resolved • 1 pending
                        </small>
                    </div>
                </div>


                {/* Notices */}
                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                        📢
                    </div>

                    <div className="min-w-0">
                        <span className="block text-xs font-medium text-gray-500">
                            New Notices
                        </span>

                        <strong className="mt-0.5 block text-xl font-bold text-gray-900">
                            03
                        </strong>

                        <small className="block truncate text-xs text-gray-500">
                            Updated today
                        </small>
                    </div>
                </div>

            </section>


            {/* ================= MAIN DASHBOARD GRID ================= */}
            <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-5 lg:grid-cols-2">

                {/* ================= ROOM DETAILS ================= */}
                <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <span className="text-[10px] font-bold tracking-wider text-gray-400 sm:text-xs">
                                ACCOMMODATION
                            </span>

                            <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
                                Room Details
                            </h2>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-xl">
                            🛏️
                        </div>
                    </div>


                    {/* Room Number */}
                    <div className="mb-6 rounded-2xl bg-gray-50 p-5 text-center">
                        <span className="block text-xs font-bold tracking-wider text-gray-400">
                            ROOM
                        </span>

                        <strong className="mt-1 block text-4xl font-bold text-purple-600 sm:text-5xl">
                            205
                        </strong>

                        <small className="text-sm font-medium text-gray-500">
                            Block A
                        </small>
                    </div>


                    {/* Room Information */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

                        <div className="rounded-xl bg-gray-50 p-3">
                            <span className="block text-xs text-gray-400">
                                Floor
                            </span>
                            <strong className="mt-1 block text-sm text-gray-800">
                                2nd Floor
                            </strong>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-3">
                            <span className="block text-xs text-gray-400">
                                Room Type
                            </span>
                            <strong className="mt-1 block text-sm text-gray-800">
                                Double Sharing
                            </strong>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-3">
                            <span className="block text-xs text-gray-400">
                                Bed Number
                            </span>
                            <strong className="mt-1 block text-sm text-gray-800">
                                Bed B
                            </strong>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-3">
                            <span className="block text-xs text-gray-400">
                                Hostel
                            </span>
                            <strong className="mt-1 block text-sm text-gray-800">
                                Girls Hostel
                            </strong>
                        </div>

                    </div>


                    <button
                        type="button"
                        className="mt-6 w-full rounded-xl border border-purple-200 px-4 py-3 text-sm font-semibold text-purple-600 transition hover:bg-purple-50"
                    >
                        View Room Details →
                    </button>

                </div>


                {/* ================= FEE DETAILS ================= */}
                <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <span className="text-[10px] font-bold tracking-wider text-gray-400 sm:text-xs">
                                PAYMENT
                            </span>

                            <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
                                Fee Details
                            </h2>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl">
                            💰
                        </div>
                    </div>


                    {/* Amount */}
                    <div className="mb-6">
                        <span className="text-sm text-gray-500">
                            Total Hostel Fee
                        </span>

                        <strong className="mt-1 block text-3xl font-bold text-gray-900 sm:text-4xl">
                            ₹45,000
                        </strong>
                    </div>


                    {/* Progress */}
                    <div className="mb-6">

                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">
                                Payment Progress
                            </span>

                            <strong className="text-sm font-bold text-green-600">
                                100%
                            </strong>
                        </div>

                        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
                            <div className="h-full w-full rounded-full bg-green-500" />
                        </div>

                        <small className="mt-2 block text-xs text-gray-500">
                            All fees have been paid successfully.
                        </small>
                    </div>


                    {/* Fee Summary */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="rounded-xl bg-green-50 p-4">
                            <span className="block text-xs text-gray-500">
                                Paid
                            </span>

                            <strong className="mt-1 block text-lg font-bold text-green-600">
                                ₹45,000
                            </strong>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-4">
                            <span className="block text-xs text-gray-500">
                                Pending
                            </span>

                            <strong className="mt-1 block text-lg font-bold text-gray-800">
                                ₹0
                            </strong>
                        </div>

                    </div>

                </div>


                {/* ================= RECENT NOTICES ================= */}
                <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <span className="text-[10px] font-bold tracking-wider text-gray-400 sm:text-xs">
                                ANNOUNCEMENTS
                            </span>

                            <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
                                Recent Notices
                            </h2>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                            📢
                        </div>
                    </div>


                    {/* Notice 1 */}
                    <div className="flex gap-3 border-b border-gray-100 py-4 first:pt-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                            📅
                        </div>

                        <div className="min-w-0">
                            <strong className="block text-sm font-semibold text-gray-800">
                                Hostel Meeting
                            </strong>

                            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                                Monthly hostel meeting will be held tomorrow at 10 AM.
                            </p>

                            <small className="mt-1 block text-xs text-gray-400">
                                Today
                            </small>
                        </div>
                    </div>


                    {/* Notice 2 */}
                    <div className="flex gap-3 border-b border-gray-100 py-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                            🔔
                        </div>

                        <div className="min-w-0">
                            <strong className="block text-sm font-semibold text-gray-800">
                                Maintenance Notice
                            </strong>

                            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                                Water supply maintenance on Sunday from 8 AM to 11 AM.
                            </p>

                            <small className="mt-1 block text-xs text-gray-400">
                                Yesterday
                            </small>
                        </div>
                    </div>


                    {/* Notice 3 */}
                    <div className="flex gap-3 py-4 last:pb-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                            📚
                        </div>

                        <div className="min-w-0">
                            <strong className="block text-sm font-semibold text-gray-800">
                                Study Hall Timings
                            </strong>

                            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                                Study hall will remain open until 11 PM during exams.
                            </p>

                            <small className="mt-1 block text-xs text-gray-400">
                                2 days ago
                            </small>
                        </div>
                    </div>

                </div>


                {/* ================= COMPLAINTS ================= */}
                <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <span className="text-[10px] font-bold tracking-wider text-gray-400 sm:text-xs">
                                SUPPORT
                            </span>

                            <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
                                My Complaints
                            </h2>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-xl">
                            📝
                        </div>
                    </div>


                    {/* Complaint 1 */}
                    <div className="flex items-center justify-between gap-3 border-b border-gray-100 py-4">
                        <div className="min-w-0">
                            <strong className="block text-sm font-semibold text-gray-800">
                                Water Issue
                            </strong>

                            <small className="text-xs text-gray-400">
                                Room 205
                            </small>
                        </div>

                        <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600">
                            Pending
                        </span>
                    </div>


                    {/* Complaint 2 */}
                    <div className="flex items-center justify-between gap-3 py-4">
                        <div className="min-w-0">
                            <strong className="block text-sm font-semibold text-gray-800">
                                Fan Repair
                            </strong>

                            <small className="text-xs text-gray-400">
                                Room 205
                            </small>
                        </div>

                        <span className="shrink-0 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                            Resolved
                        </span>
                    </div>


                    {/* Submit Complaint */}
                    <button
                        type="button"
                        className="mt-3 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99]"
                    >
                        + Submit New Complaint
                    </button>

                </div>

            </section>

        </main>
    );
}

export default StudentContent;
