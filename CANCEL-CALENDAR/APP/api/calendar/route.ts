import { calendar } from "@/../../lib/google";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await calendar.events.list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        maxResults: 50,
        singleEvents: true,
        orderBy: "startTime",
    });

    const events = res.data.items?.map(e => ({
        id: e.id!,
        title: e.summary || "Untitled",
        start: e.start?.dateTime,
        end: e.end?.dateTime,
    }));

    return NextResponse.json(events);
}
