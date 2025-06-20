import { AddExpenseDialog } from "@/components/add-expense-dialog";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { format } from "date-fns";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ExpensePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }

  const { data: expenses, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("user_id", user.id)
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching expenses:", error);
    // Handle error display if needed
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#181a20] text-white p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Expense Dashboard</h1>
          <AddExpenseDialog />
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 shadow-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses &&
                expenses.map((expense, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {format(new Date(expense.date), "PPP")}
                    </TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell className="text-right">
                      ${expense.amount.toFixed(2)}
                    </TableCell>
                    <TableCell>{expense.notes}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
