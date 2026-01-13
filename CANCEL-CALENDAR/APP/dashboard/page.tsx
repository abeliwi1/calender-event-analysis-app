"use client";

import { useEffect, useState } from "react"; 

export default function Dashboard() {
    const [cutList, setCutList] = useState<any[]>([]);

    useEffect(() => {
        async function run() {
            const events = await fetch("/api/calendar").then(r => r.json());
            const cut = await fetch("/api/analyze", {
                method: "POST",
                body: JSON.stringify(events),
            }).then(r => r.json());

            setCutList(cut);
        }
        run();
    }, []);

    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">This Week — Cancel These</h2>

            {cutList.map(e => (
                <div key={e.id} className="border p-4 mb-2 rounded">
                    <p className="font-semibold">{e.title}</p>
                    <p className="text-sm text-gray-500">
                        Score: {e.score} — Low Value, High Energy
                    </p>
                </div>
            ))}
        </div>
    );
}
