// app/api/deleteSubmissions/route.js
import { NextResponse } from 'next/server';

export async function DELETE(request) {
  try {
    const { ids } = await request.json(); // Parse the request body

    // Perform deletion logic here (e.g., delete from database)
    // Example: await User.deleteMany({ _id: { $in: ids } });

    return NextResponse.json(
      { message: 'Users deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting users:', error);
    return NextResponse.json(
      { error: 'Failed to delete users' },
      { status: 500 }
    );
  }
}