// app/api/submit/route.js
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, address, powerNeeds, paymentPlan, contactMethod, more } = body;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("yourDatabase"); // Replace with your database name
    const collection = db.collection("prosolar-leads"); // Use the correct collection name

    // Insert the form data into the collection
    const result = await collection.insertOne({
      firstName,
      lastName,
      phone,
      email,
      address,
      powerNeeds,
      paymentPlan,
      contactMethod,
      more,
      createdAt: new Date(), // Add a timestamp
    });

    // Check if the insertion was successful
    if (result.insertedId) {
      return NextResponse.json(
        { message: "Form submitted successfully!", data: body },
        { status: 200 }
      );
    } else {
      throw new Error("Failed to insert data into MongoDB");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { message: "Failed to submit form", error: error.message },
      { status: 500 }
    );
  }
}