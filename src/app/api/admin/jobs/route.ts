import { NextRequest, NextResponse } from "next/server";
import { updateJob, addJob, deleteJob, dbJobs } from "@/lib/inMemoryDb";
import { getAdminSession } from "@/lib/auth";

// GET: Admin sees ALL jobs (no filter)
export async function GET() {
  const isAdmin = await getAdminSession();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(dbJobs); // ALL jobs
}

// POST: Add/update job
export async function POST(request: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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
    active = true,
  } = body;

  if (id) {
    const success = await updateJob(id, {
      title,
      department,
      location,
      type,
      experience,
      description,
      skills,
      active,
    });
    if (!success)
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
  } else {
    await addJob({
      id,
      title,
      department,
      location,
      type,
      experience,
      description,
      skills,
      active,
    });
  }
  return NextResponse.json({ success: true });
}

// DELETE: Delete job
export async function DELETE(request: NextRequest) {
  const isAdmin = await getAdminSession();
  if (!isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";
  const success = await deleteJob(id);
  if (!success)
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
