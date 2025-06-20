/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/datepicker";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const CATEGORIES = [
  "Food",
  "Transport",
  "Shopping",
  "Bills",
  "Health",
  "Entertainment",
  "Other",
];

const expenseSchema = z
  .object({
    date: z.date({ required_error: "Date is required." }),
    notes: z.string().min(1, "Notes are required."),
    category: z.enum(
      [
        "Food",
        "Transport",
        "Shopping",
        "Bills",
        "Health",
        "Entertainment",
        "Other",
      ],
      { required_error: "Category is required." }
    ),
    amount: z.preprocess((val) => {
      if (val === "" || val === undefined || val === null) return undefined;
      const num = Number(val);
      return isNaN(num) ? undefined : num;
    }, z.number({ invalid_type_error: "Amount is required." })),
  })
  .refine((data) => typeof data.amount === "number" && data.amount > 0, {
    message: "Amount must be a positive number.",
    path: ["amount"],
  });

type Expense = z.infer<typeof expenseSchema>;

export default function AddExpenseForm() {
  const form = useForm<Expense>({
    resolver: zodResolver(expenseSchema) as any,
    defaultValues: {
      date: undefined,
      notes: "",
      category: undefined,
      amount: undefined,
    },
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
    }
  }, [form.formState.isSubmitSuccessful, form.reset]);

  const onFormSubmit: SubmitHandler<Expense> = async (data) => {
    console.log("onFormSubmit", data);
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        setError(err.error || "Failed to add expense.");
      } else {
        setSuccess("Expense added!");
        form.reset();
      }
    } catch {
      setError("Failed to add expense.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onFormSubmit)}
        className="space-y-6 max-w-md mx-auto bg-[#161b22] border border-[#30363d] rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Add Expense</h2>
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <DatePicker value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full mt-1 rounded-md border border-[#30363d] bg-[#181a20] text-white px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2f81f7]"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {CATEGORIES.map((cat) => (
                    <option
                      key={cat}
                      value={cat}
                      className="bg-[#161b22] text-white"
                    >
                      {cat}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="0.01"
                  step="0.01"
                  {...field}
                  value={field.value === undefined ? "" : field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="Enter amount"
                  className="mt-1"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  placeholder="Add a note..."
                  className="w-full mt-1 rounded-md border border-[#30363d] bg-[#181a20] text-white px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2f81f7] min-h-[80px] resize-y"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {success && <div className="text-green-500 font-medium">{success}</div>}
        {error && <div className="text-red-500 font-medium">{error}</div>}
        <Button
          type="submit"
          className="w-full bg-[#2f81f7] hover:bg-[#1e5bbf] text-white font-semibold"
          disabled={form.formState.isSubmitting || loading}
        >
          {form.formState.isSubmitting || loading ? "Adding..." : "Add Expense"}
        </Button>
      </form>
    </Form>
  );
}
