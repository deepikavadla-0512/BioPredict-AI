import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const backendEndpoint = `${process.env.SERVER_URL}/api/splice-site-prediction/donor/predictFile`;

        const backendResponse = await fetch(backendEndpoint, {
            method: "POST",
            body: formData, // sending FormData directly
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
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}