// src/pages/about.jsx

import { DataTable } from "@/components/about/data-table"
import { columns } from "@/components/about/columns"

export const AboutPage = () => {
 const data = [
  { status: "success", email: "test@example.com", amount: "$100" },
  { status: "pending", email: "user@mail.com", amount: "$50" },
  { status: "failed", email: "fail@mail.com", amount: "$200" },
  { status: "processing", email: "proc@mail.com", amount: "$75" },
]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p className="mb-4">This is the content of the about page.</p>
      
      <DataTable columns={columns} data={data} />
    </div>
  )
}