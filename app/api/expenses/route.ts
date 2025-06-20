/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const expenseSchema = z.object({
  date: z.string(), // ISO string expected from client
  notes: z.string().min(1),
  category: z.enum([
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Health",
    "Entertainment",
    "Other",
  ]),
  amount: z.number().positive(),
});

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    // Convert date string to Date if needed
    const parsed = expenseSchema.safeParse({
      ...body,
      date:
        typeof body.date === "string"
          ? body.date
          : new Date(body.date).toISOString(),
      amount: Number(body.amount),
    });
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    const { error: dbError } = await supabase
      .from("expenses")
      .insert({ ...parsed.data, user_id: user.id });

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, expense: parsed.data });
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
