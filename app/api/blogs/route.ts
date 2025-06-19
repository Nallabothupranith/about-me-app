import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// GET: Fetch all blogs
export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("id, tittle, content");
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

// POST: Create a new blog
export async function POST(request: Request) {
  const { tittle, content } = await request.json();
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .insert([{ tittle, content }])
    .select();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data[0]);
}

// PUT: Update a blog by id
export async function PUT(request: Request) {
  const { id, tittle, content } = await request.json();
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .update({ tittle, content })
    .eq("id", id)
    .select();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data[0]);
}

// DELETE: Delete a blog by id
export async function DELETE(request: Request) {
  const { id } = await request.json();
  const supabase = await createClient();
  const { error } = await supabase.from("blogs").delete().eq("id", id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
