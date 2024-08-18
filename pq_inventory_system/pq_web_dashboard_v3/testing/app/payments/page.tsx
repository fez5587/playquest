import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
return [
    {
        id: "728ed52f",
        name: "Sample Card 000",
        set: "Sample Set 1",
        number: 123,
        quantity: 1,
        condition: "Near Mint",
        language: "English",
        image_url: "https://example.com/sample-card1.jpg",
    },
    {
        id: "9c4a7b3e",
        name: "Sample Card 2",
        set: "Sample Set 2",
        number: 456,
        quantity: 2,
        condition: "Lightly Played",
        language: "Spanish",
        image_url: "https://example.com/sample-card2.jpg",
    },
    {
        id: "3f6b8a1d",
        name: "Sample Card 3",
        set: "Sample Set 3",
        number: 789,
        quantity: 3,
        condition: "Moderately Played",
        language: "French",
        image_url: "https://example.com/sample-card3.jpg",
    },
    {
        id: "2e9d5c6b",
        name: "Sample Card 4",
        set: "Sample Set 4",
        number: 1011,
        quantity: 4,
        condition: "Heavily Played",
        language: "German",
        image_url: "https://example.com/sample-card4.jpg",
    },
    {
        id: "5a1b3c7d",
        name: "Sample Card 5",
        set: "Sample Set 5",
        number: 1213,
        quantity: 5,
        condition: "Damaged",
        language: "Italian",
        image_url: "https://example.com/sample-card5.jpg",
    },
    {
        id: "6d8f9a2b",
        name: "Sample Card 6",
        set: "Sample Set 6",
        number: 1415,
        quantity: 6,
        condition: "Played",
        language: "Japanese",
        image_url: "https://example.com/sample-card6.jpg",
    },
    {
        id: "3c7d5a1b",
        name: "Sample Card 7",
        set: "Sample Set 7",
        number: 1617,
        quantity: 7,
        condition: "Mint",
        language: "Korean",
        image_url: "https://example.com/sample-card7.jpg",
    },
];
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
