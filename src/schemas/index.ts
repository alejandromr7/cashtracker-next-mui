import { error } from 'console'
import { z } from 'zod'

export const RegisterSchema = z.object({
  email: z.string().min(1, { message: 'The email is required!' }).email({ message: 'Please enter a valid email' }),
  name: z.string().min(1, { message: 'Please enter a valid name' }),
  password: z.string().min(8, { message: 'Must be greater than 8' }),
  password_confirmation: z.string()
}).refine(data => data.password === data.password_confirmation, {
  message: 'Passwords must match',
  path: ['password_confirmation']
})

export const LoginSchema = z.object({
  email: z.string()
    .min(1, { message: 'El Email es Obligatorio' })
    .email({ message: 'Email no válido' }),
  password: z.string()
    .min(1, { message: 'El Password no puede ir vacio' })
})

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  role: z.object({
    name: z.string()
  })
})

export const ForgotPasswordSchema = z.object({
  email: z.string()
    .min(1, { message: 'El Email es Obligatorio' })
    .email({ message: 'Email no válido' }),
})

export const ResetPasswordSchema = z.object({
  password: z.string()
    .min(8, { message: 'El Password debe ser de al menos 8 caracteres' }),
  password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
  message: "Los Passwords no son iguales",
  path: ["password_confirmation"]
});

export type User = z.infer<typeof UserSchema>
export type Budget = z.infer<typeof BudgetAPIResponseSchema>

export const SuccessSchema = z.string()
export const ErrorResponseSchema = z.string()

export const TokenSchema = z.string({ message: 'Toen is not valid' }).length(6, { message: 'Must be 6 digits' })


export const DraftBudgetSchema = z.object({
  name: z.string()
    .min(1, { message: 'El Nombre del presupuesto es obligatorio' }),
  amount: z.coerce.
    number({ message: 'Cantidad no válida' })
    .min(1, { message: 'Cantidad no válida' }),
})


export const BudgetAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  amount: z.number(),
  userId: z.number(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export const BudgetsAPIResponseSchema = z.array(BudgetAPIResponseSchema)

export const PasswordValidationSchema = z.string().min(8, { message: 'La contrase;a es obligatoria' })
