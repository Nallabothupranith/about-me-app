/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/datepicker";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

const CATEGORIES = [
  "Food",
  "Transport",
  "Shopping",
  "Bills",
  "Health",
  "Entertainment",
  "Other",
];

const expenseSchema = z.object({
  amount: z.coerce.number().positive("Amount must be a positive number"),
  date: z.string().min(1, "Date is required"),
  category: z.string().min(1, "Category is required"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof expenseSchema>;

type AddExpenseFormProps = {
  mode: "add" | "edit";
  initialData?: Partial<FormData> & { id?: number };
  onSuccess?: () => void;
};

export default function AddExpenseForm({
  mode,
  initialData,
  onSuccess,
}: AddExpenseFormProps) {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: initialData || {},
  });
  const { control, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = form;

  React.useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) setValue(key as keyof FormData, value as any);
      });
    }
  }, [initialData, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      let response;
      if (mode === "add") {
        response = await fetch("/api/expenses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } else if (mode === "edit" && initialData?.id) {
        response = await fetch(`/api/expenses/${initialData.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }

      if (!response || !response.ok) {
        const errorData = response ? await response.json() : {};
        throw new Error(errorData.error || "Failed to submit expense");
      }

      reset();
      router.refresh();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-md mx-auto bg-[#161b22] border border-[#30363d] rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          {mode === "add" ? "Add Expense" : "Edit Expense"}
        </h2>
        <FormField
          control={control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input id="date" type="date" {...field} className="mt-1" />
              </FormControl>
              {errors.date && (
                <FormMessage className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={control}
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
              {errors.category && (
                <FormMessage className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  {...field}
                  className="mt-1"
                />
              </FormControl>
              {errors.amount && (
                <FormMessage className="text-red-500 text-sm mt-1">
                  {errors.amount.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={control}
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
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-[#2f81f7] hover:bg-[#1e5bbf] text-white font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? mode === "add"
              ? "Adding..."
              : "Saving..."
            : mode === "add"
            ? "Add Expense"
            : "Save Changes"}
        </Button>
      </form>
    </Form>
  );
}
