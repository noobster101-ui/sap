import { NextRequest, NextResponse } from "next/server";
import {
  updateReview,
  addReview,
  deleteReview,
  dbReviews,
} from "@/lib/inMemoryDb";
import { getAdminSession } from "@/lib/auth";

// GET: Admin sees ALL reviews (no filter)
export async function GET() {
  const isAdmin = await getAdminSession();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(dbReviews); // shows ALL (unfiltered)
}

// POST, DELETE same as public API
export async function POST(request: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const { id, name, designation, content, image, star, status = true } = body;

  if (id) {
    const success = await updateReview(id, {
      name,
      designation,
      content,
      image,
      star,
      status,
    });
    if (!success)
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
  } else {
    await addReview({ name, designation, content, image, star, status });
  }
  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") || "0");
  const success = await deleteReview(id);
  if (!success)
    return NextResponse.json({ error: "Review not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
