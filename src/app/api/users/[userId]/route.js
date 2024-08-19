

import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { userId } = params;

  // Example of fetching user data based on userId (this would typically be from a database)
  const user = {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`,
  };

  return NextResponse.json(user);
}

export async function POST(request, { params }) {
  const { userId } = params;
  const data = await request.json();

  // Example of updating user data based on userId (in a real application, you'd update the database here)
  const updatedUser = {
    id: userId,
    ...data,
  };

  return NextResponse.json({
    message: `User ${userId} updated successfully!`,
    user: updatedUser,
  });
}
