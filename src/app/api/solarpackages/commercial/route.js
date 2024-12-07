import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb'; // Add this import



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
    
    // Don't remove commas. Keep them as is.
    const { _id, ...update } = body;

    const result = await db.collection("commercialPackages").updateOne(
      { _id: new ObjectId(_id) }, 
      { $set: update }
    );
    
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ 
      error: error.message, 
      stack: error.stack 
    }, { status: 500 });
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
