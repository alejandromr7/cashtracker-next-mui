'use server'
import { ErrorResponseSchema, RegisterSchema, SuccessSchema } from "@/src/schemas"


interface Props {
  errors: string[],
  success: string
}

export async function register(prevState: Props, formData: FormData) {

  const registerData = {
    email: formData.get('email'),
    name: formData.get('name'),
    password: formData.get('password'),
    password_confirmation: formData.get('password_confirmation')


  }
  const register = RegisterSchema.safeParse(registerData)

  if (!register.success) {
    return {
      errors: register.error.issues.map(err => err.message),
      success: ''
    }
  }


  const url = `${process.env.API_URL}/auth/create-account`;
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: registerData.email,
      name: registerData.name,
      password: registerData.password,
      password_confirmation: registerData.password_confirmation,
    })
  })

  const json = await req.json()
  const success = SuccessSchema.parse(json)

  if (!req.ok) {
    const error = ErrorResponseSchema.parse(json)
    return {
      errors: [error],
      success: ''
    }
  }


  return {
    errors: [],
    success
  }

}