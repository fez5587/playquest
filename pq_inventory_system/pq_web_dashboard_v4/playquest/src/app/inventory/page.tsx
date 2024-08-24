import { Inventory, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Inventory[]> {
  const res = await fetch(
    "https://66ca03d659f4350f064e2bea.mockapi.io/api/v1/inventory"
  )
  const data = await res.json()
  return data
}

export default async function Page() {
  const data = await getData()

  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto py-10">
      <h1 className ='mb-6 text-3x1 font-bold'>Inventory</h1>
      <DataTable columns={columns} data={data} />
    </div>
    </section>
  )
}
