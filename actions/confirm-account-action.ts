'use server'
import { ErrorResponseSchema, SuccessSchema, TokenSchema } from "@/src/schemas"


interface Props {
  errors: string[],
  success: string
}

export async function confirmAccount(token: string, prevState: Props) {

  const confirmAccount = TokenSchema.safeParse(token)

  if (!confirmAccount.success) {
    return {
      errors: confirmAccount.error.issues.map(error => error.message),
      success: ''
    }
  }

  console.log(confirmAccount)


  const url = `${process.env.API_URL}/auth/confirm-account`;
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: confirmAccount.data })
  })

  const json = await req.json()

  if (!req.ok) {
    const error = ErrorResponseSchema.parse(json.error)
    return {
      errors: [error],
      success: ''
    }
  }

  const success = SuccessSchema.parse(json)

  return {
    errors: [],
    success
  }

}