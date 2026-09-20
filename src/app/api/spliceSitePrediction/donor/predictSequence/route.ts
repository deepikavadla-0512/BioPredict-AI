import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        let sequence: string | null = null;

        const backendEndpoint = `${process.env.SERVER_URL}/api/splice-site-prediction/donor/predictSequence`;

        const json = await req.json();
        sequence = json.sequence;

        if (!sequence || sequence.trim() === "") {
            return NextResponse.json({ error: "No sequence provided" }, { status: 400 });
        }

        const backendResponse = await fetch(backendEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sequence: sequence.trim() }),
        });

        if (!backendResponse.ok) {
            const errorData = await backendResponse.json();
            return NextResponse.json(
                { error: errorData.detail || "Backend processing failed" },
                { status: backendResponse.status }
            );
        }

        const responseData = await backendResponse.json();
        return NextResponse.json(responseData);

    } catch (error) {
        console.error("Internal Server Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
