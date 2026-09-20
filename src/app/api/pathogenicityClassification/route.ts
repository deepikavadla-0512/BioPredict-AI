import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        if (!data.spdi || !data.consequences) {
            return NextResponse.json(
                { error: "Missing required fields: spdi and consequences" }, 
                { status: 400 }
            );
        }

        const formattedData = {
            spdi: data.spdi,
            consequences: data.consequences // Transform to match backend expectation
        };
        const backendEndpoint = `${process.env.SERVER_URL}/api/pathogenicity/predictPathogenicity`;

        const response = await fetch(backendEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedData) // Send formatted data instead of raw data
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json(
                { error: errorData.detail || "Backend processing failed" }, 
                { status: response.status }
            );
        }

        const responseData = await response.json();
        return NextResponse.json(responseData);

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Error processing request" }, 
            { status: 500 }
        );
    }
}