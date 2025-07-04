'use server'
import getToken from "@/src/auth/token"
import { DraftBudgetSchema, ErrorResponseSchema, RegisterSchema, SuccessSchema } from "@/src/schemas"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

interface Props {
  errors: string[],
  success: string
}

export async function createBudget(prevState: Props, formData: FormData) {

  const budget = DraftBudgetSchema.safeParse({
    name: formData.get('name'),
    amount: formData.get('amount')
  })

  console.log(budget)
  if (!budget.success) {
    return {
      errors: budget.error.issues.map(issue => issue.message),
      success: ''
    }
  }

  const token = getToken();
  const url = `${process.env.API_URL}/budgets`;
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: budget.data.name,
      amount: budget.data.amount,
    })
  })

  const json = await req.json()

  if (!req.ok) {
    const error = ErrorResponseSchema.parse(json)
    return {
      errors: [error],
      success: ''
    }
  }

  console.log(json)
  const success = SuccessSchema.parse(json)
  revalidatePath('/admin')

  return {
    errors: [],
    success
  }

}