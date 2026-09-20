import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { sequence } = await req.json();

    if (!sequence || typeof sequence !== "string" || sequence.trim() === "") {
      return NextResponse.json({ error: "No sequence provided" }, { status: 400 });
    }

    const backendEndpoint = `${process.env.SERVER_URL}/api/splice-site-prediction/acceptor/predictSequence`;

    const backendResponse = await fetch(backendEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
