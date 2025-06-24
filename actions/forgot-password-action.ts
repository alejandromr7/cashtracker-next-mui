'use server'
import SuccessMessage from "@/components/ui/SuccessMessage"
import { ErrorResponseSchema, ForgotPasswordSchema, SuccessSchema } from "@/src/schemas"

interface Props {
  errors: string[],
  success: string
}

export async function forgotPassword(prevState: Props, formData: FormData) {

  const forgotPassword = ForgotPasswordSchema.safeParse({
    email: formData.get('email')
  })

  if (!forgotPassword.success) {

    return {
      errors: forgotPassword.error.issues.map(e => e.message),
      success: ''
    }
  }

  const url = `${process.env.API_URL}/auth/forgot-password`;
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: forgotPassword.data.email
    })
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