import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import bcrypt from "bcrypt";

import connectMongoDb from "@/libs/db";
import User from "@/models/user";

export async function POST(req: NextRequest) {
  try {
    const { username, email, password }: { username: string; email: string; password: string } = await req.json();

    // Check if all required fields are present
    if (!username || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, {
        status: 400
      });
    }

    await connectMongoDb();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, {
        status: 409
      });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create the new user
    await User.create({ username, email, password: hashPassword });

    return NextResponse.json({ message: "User registered successfully" }, {
      status: 201
    });
  } catch (error: any) {
    console.error('Error registering user:', error);  // Log the error for debugging
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
