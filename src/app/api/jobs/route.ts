import { NextRequest, NextResponse } from "next/server";
import { getJobs, addJob, updateJob, deleteJob } from "@/lib/inMemoryDb";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  return NextResponse.json(getJobs());
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
      department,
      location,
      type,
      experience,
      description,
      skills,
    } = body;

    if (id) {
      const success = await updateJob(id, body);
      if (!success)
        return NextResponse.json({ error: "Job not found" }, { status: 404 });
    } else {
      await addJob({
        id: Date.now().toString(),
        title,
        department,
        location,
        type,
        experience,
        description,
        skills: skills || [],
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
    const success = await deleteJob(id);
    if (!success) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
