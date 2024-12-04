import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("solarApp");
    const homePackages = await db.collection("solarHomePackages").find({}).toArray(); // Use a separate collection
    return NextResponse.json(homePackages);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("solarApp");
    const body = await request.json();
    const result = await db.collection("solarHomePackages").insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db("solarApp");
    const body = await request.json();
    const { id, ...update } = body;
    const result = await db.collection("solarHomePackages").updateOne({ id }, { $set: update });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db("solarApp");
    const { id } = await request.json();
    const result = await db.collection("solarHomePackages").deleteOne({ id });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
