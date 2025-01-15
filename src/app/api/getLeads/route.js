// app/api/submit/route.js
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("yourDatabase"); // Replace with your database name
    const collection = db.collection("prosolar-leads"); // Use the correct collection name

    // Fetch all submissions from the collection
    const submissions = await collection.find({}).toArray();

    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { message: "Failed to fetch submissions", error: error.message },
      { status: 500 }
    );
  }
}