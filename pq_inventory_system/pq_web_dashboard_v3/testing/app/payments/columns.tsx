"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  name: string;
  set: string;
  number: number;
  quantity: number;
  condition: string;
  language: string;
  image_url: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "set",
    header: "Set",
  },
  {
    accessorKey: "number",
    header: "Number",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "condition",
    header: "Condition",
  },
  {
    accessorKey: "language",
    header: "Language",
  },
  {
    accessorKey: "image_url",
    header: "Image URL",
  },
];
