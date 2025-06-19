import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function calculateMinutesToRead(content: string) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200)); // 200 wpm
}

export async function POST(request: Request) {
  const { title, content, tags } = await request.json();
  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required." },
      { status: 400 }
    );
  }
  // Validate tags
  let tagsArray: string[] = [];
  if (tags && Array.isArray(tags)) {
    tagsArray = tags.filter(
      (t) => typeof t === "string" && t.trim().length > 0
    );
  }
  const slug = slugify(title);
  const minutes_to_read = calculateMinutesToRead(content);
  const supabase = await createClient();

  // Get the current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("articles")
    .insert([
      {
        title,
        slug,
        content,
        minutes_to_read,
        author_id: user.id,
        tags: tagsArray,
      },
    ])
    .select()
    .single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}
