import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { z } from "zod";

const expenseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  amount: z.coerce.number().positive("Amount must be a positive number"),
  date: z.string().min(1, "Date is required"),
  category: z.string().min(1, "Category is required"),
  notes: z.string().optional(),
});

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const expenseId = params.id;

  if (!expenseId) {
    return NextResponse.json(
      { error: "Expense ID is required" },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from("expenses")
    .delete()
    .eq("id", expenseId)
    .eq("user_id", user.id); // Ensure users can only delete their own expenses

  if (error) {
    console.error("Error deleting expense:", error);
    return NextResponse.json(
      { error: "Failed to delete expense" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const expenseId = params.id;
  if (!expenseId) {
    return NextResponse.json(
      { error: "Expense ID is required" },
      { status: 400 }
    );
  }

  const body = await request.json();
  const validation = expenseSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { amount, date, category, notes } = validation.data;

  const { error } = await supabase
    .from("expenses")
    .update({
      amount,
      date,
      category,
      notes,
    })
    .eq("id", expenseId)
    .eq("user_id", user.id);

  if (error) {
    console.error("Error updating expense:", error);
    return NextResponse.json(
      { error: "Failed to update expense" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
