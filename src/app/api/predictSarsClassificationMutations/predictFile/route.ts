import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData();
        const file: File | null = data.get("file") as File | null;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const backendEndpoint = `${process.env.SERVER_URL}/api/sars-variants/predictSarsFile`;

        // console.log("🔄 Sending file to backend...");

        // Send FormData to FastAPI without setting "Content-Type"
        const response = await fetch(backendEndpoint, {
            method: "POST",
            body: data, // FormData is sent directly
        });

        if (!response.ok) {
            const errorData = await response.json();
            // console.error("Backend Error:", errorData);
            return NextResponse.json({ error: errorData.detail || "Backend processing failed" }, { status: response.status });
        }
        // console.log("Backend Response Received.");
        const responseData = await response.json();
        // console.log("Backend Response:", responseData);

        return NextResponse.json(responseData);

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Error processing request" }, { status: 500 });
    }
}