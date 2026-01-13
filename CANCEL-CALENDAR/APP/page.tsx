
export default function Home() {
    console.log("HIYA");
    return (
        <main className="flex flex-col items-center p-10">
            <h1 className="text-4xl font-bold">Cancel My Calendar</h1>
            <p className="mt-4">Your time is valuable. Let’s protect it.</p>

            <a
                href="/api/auth/google"
                className="mt-6 px-6 py-3 bg-black text-white rounded"
            >
                Connect Google Calendar
            </a>
        </main>
    );
}
