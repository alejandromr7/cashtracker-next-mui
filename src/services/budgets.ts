import { cache } from "react";
import getToken from "../auth/token";
import { notFound } from "next/navigation";
import { BudgetAPIResponseSchema } from "../schemas";


export const getBudget = cache(
  async (id: string) => {
    const token = getToken();
    const url = `${process.env.API_URL}/budgets/${id}`;
    const req = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    if (!req.ok) {
      notFound()
    }

    const json = await req.json()
    const budget = BudgetAPIResponseSchema.parse(json)
    return budget
  }
)
