import { NextRequest, NextResponse } from "next/server";
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "@/lib/inMemoryDb";
import { getAdminSession } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const division = searchParams.get("division");
  if (division === "ECC" || division === "S/4HANA") {
    return NextResponse.json(
      getCourses().filter((c) => c.division === division),
    );
  }

  return NextResponse.json(getCourses());
}

export async function POST(request: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      id,
      title,
      shortDescription,
      fullDescription,
      division,
      image,
      brochure,
    } = body;

    if (id) {
      const success = await updateCourse(id, body);
      if (!success)
        return NextResponse.json(
          { error: "Course not found" },
          { status: 404 },
        );
    } else {
      await addCourse({
        id: Date.now().toString(),
        title,
        shortDescription,
        fullDescription,
        division,
        image,
        brochure,
      });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") || "";
    const success = await deleteCourse(id);
    if (!success) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
