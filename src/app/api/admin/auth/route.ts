import { NextRequest, NextResponse } from "next/server";
import {
  verifyAdmin,
  setAdminSessionServer as setAdminSession,
  clearAdminSessionServer as clearAdminSession,
} from "@/lib/auth";

// POST: Login
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!verifyAdmin(email, password)) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }
    await setAdminSession();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}

// DELETE: Logout
export async function DELETE() {
  await clearAdminSession();
  return NextResponse.json({ success: true });
}
