import { analyzeEvent } from "../../../lib/analyze";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const events = await req.json();
    const analyzed = events.map(analyzeEvent);
    const cutList = analyzed.filter((e: { cancel: any; }) => e.cancel);

    return NextResponse.json(cutList);
}
