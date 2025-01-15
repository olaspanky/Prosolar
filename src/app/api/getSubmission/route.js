import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('yourDatabase');
    const collection = db.collection('prosolar');

    const userData = await collection.find({}).toArray();

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}