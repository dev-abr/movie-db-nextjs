import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "@/models/user";
import connectMongoDb from "@/libs/db";

export async function POST(request: NextRequest) {
  try {
    await connectMongoDb();
    const reqBody = await request.json();
    const { email, password }: { email: string; password: string } = reqBody;

    const user = await User.findOne({ email });
    console.log('User found:', user); // Debugging log

    if (!user)
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword)
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });


    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenData, "mysecret", { expiresIn: "24h" });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
