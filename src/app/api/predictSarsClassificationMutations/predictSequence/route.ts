import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        let sequence: string | null = null;
        
        // Determine which backend endpoint to use based on content type
        const backendEndpoint = `${process.env.SERVER_URL}/api/sars-variants/predictSarsSequence`;


        // console.log(" Handling JSON request...");
        const json = await req.json();
        sequence = json.sequence;
        // console.log(" Extracted sequence from JSON:", sequence?.substring(0, 50));
        
        // Use predictSequence endpoint for JSON sequence data
        
        if (!sequence || sequence.trim() === "") {
            console.error(" No sequence provided!");
            return NextResponse.json({ error: "No sequence provided" }, { status: 400 });
        }
        
        // Log what we're sending to backend
        // console.log("Sending to backend:", {
        //     url: backendEndpoint,
        //     payload: { sequence: sequence.trim().substring(0, 100) + "..." },
        //     contentType: "application/json"
        // });
        
        // Forward request to backend API
        const backendResponse = await fetch(backendEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sequence: sequence.trim() }),
        });
        
        if (!backendResponse.ok) {
            const errorData = await backendResponse.json();
            console.error(" Backend error:", errorData);
            return NextResponse.json(
                { error: errorData.detail || "Backend processing failed" },
                { status: backendResponse.status }
            );
        }
        
        const responseData = await backendResponse.json();
        // console.log(" Backend response:", responseData);
        return NextResponse.json(responseData);

        
    } catch (error) {
        console.error(" Internal Server Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}