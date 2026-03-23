import { NextRequest, NextResponse } from "next/server";
import {
  updateReview,
  addReview,
  deleteReview,
  getReviews,
} from "@/lib/inMemoryDb";
import { getAdminSession } from "@/lib/auth";

// GET: Public enabled reviews (status true only)
export async function GET() {
  return NextResponse.json(getReviews());
}

// POST: Admin add/update (full data)
export async function POST(request: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, name, designation, content, image, star, status = true } = body;

    if (id) {
      // Update - merge full data
      const success = await updateReview(id, {
        name,
        designation,
        content,
        image,
        star,
        status,
      });
      if (!success) {
        return NextResponse.json(
          { error: "Review not found" },
          { status: 404 },
        );
      }
    } else {
      // Create - use all fields
      await addReview({ name, designation, content, image, star, status });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Review API error:", error);
    return NextResponse.json(
      { error: "Failed to save review" },
      { status: 500 },
    );
  }
}

// DELETE: Admin delete
export async function DELETE(request: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") || "0");
    const success = await deleteReview(id);
    if (!success) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
