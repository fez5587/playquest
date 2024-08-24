"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

//Checkboxes
import { Checkbox } from "@/components/ui/checkbox"

//Sorting
import { ArrowUpDown } from "lucide-react"

//Adding Button Support
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Inventory = {
  id: string;
  name: string;
  set: string;
  number: number;
  quantity: number;
  condition: string;
  language: string;
  image_url: string;
};

export const columns: ColumnDef<Inventory>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
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
  {
    id: "actions",
    cell: ({ row }) => {
      const inventory = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(inventory.name)}
        >
          Copy Card Name
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href={`https://scryfall.com/card/${inventory.set}/${inventory.number}`} target="_blank" rel="noopener noreferrer">See Card on Scryfall</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];
