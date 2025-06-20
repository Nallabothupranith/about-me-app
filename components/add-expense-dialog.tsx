"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import AddExpenseForm from "@/components/add-expense-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddExpenseDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#2f81f7] hover:bg-[#1e5bbf] text-white font-semibold">
          Add Expense
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Expense</DialogTitle>
        </DialogHeader>
        <AddExpenseForm />
      </DialogContent>
    </Dialog>
  );
}
