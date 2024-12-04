import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("solarApp");
    const commercialPackages = await db.collection("commercialPackages").find({}).toArray(); // Separate collection
    return NextResponse.json(commercialPackages);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("solarApp");
    const body = await request.json();
    const result = await db.collection("commercialPackages").insertOne(body);
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
    const result = await db.collection("commercialPackages").updateOne({ id }, { $set: update });
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
    const result = await db.collection("commercialPackages").deleteOne({ id });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
