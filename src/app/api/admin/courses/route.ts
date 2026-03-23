import { NextRequest, NextResponse } from "next/server";
import {
  updateCourse,
  addCourse,
  deleteCourse,
  dbCourses,
} from "@/lib/inMemoryDb";
import { getAdminSession } from "@/lib/auth";

// GET: Admin ALL courses (no filter)
export async function GET() {
  const isAdmin = await getAdminSession();
  if (!isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(dbCourses);
}

// POST: Add/update
export async function POST(request: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const { id } = body;

    if (id) {
      const success = await updateCourse(id, body);
      if (!success)
        return NextResponse.json(
          { error: "Course not found" },
          { status: 404 },
        );
    } else {
      await addCourse(body);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

// DELETE
export async function DELETE(request: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";
  const success = await deleteCourse(id);
  if (!success)
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
