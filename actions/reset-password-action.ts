'use server'
import SuccessMessage from "@/components/ui/SuccessMessage"
import { ErrorResponseSchema, ForgotPasswordSchema, ResetPasswordSchema, SuccessSchema } from "@/src/schemas"

interface Props {
  errors: string[],
  success: string
}

export async function resetPassword(token: string, prevState: Props, formData: FormData) {

  const resetPasswordInput = ResetPasswordSchema.safeParse({
    password: formData.get('password'),
    password_confirmation: formData.get('password_confirmation'),
  })

  if (!resetPasswordInput.success) {
    return {
      errors: resetPasswordInput.error.issues.map(e => e.message),
      success: ''
    }
  }

  const url = `${process.env.API_URL}/auth/reset-password/${token}`;
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: resetPasswordInput.data.password
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

  console.log(resetPasswordInput.data.password)

  const success = SuccessSchema.parse(json)

  return {
    errors: [],
    success
  }
}