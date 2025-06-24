'use server'
import { ErrorResponseSchema, SuccessSchema, TokenSchema } from "@/src/schemas"


interface Props {
  errors: string[],
  success: string
}

export async function validateToken(token: string, prevState: Props) {

  const validateToken = TokenSchema.safeParse(token)

  if (!validateToken.success) {
    return {
      errors: validateToken.error.issues.map(error => error.message),
      success: ''
    }
  }


  const url = `${process.env.API_URL}/auth/validate-token`;
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: validateToken.data })
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