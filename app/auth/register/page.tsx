import RegisterForm from '@/components/auth/RegisterForm';
import { Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cashtracker - Create an Account',
  description: 'Cashtracker - Create an Account'
}

export default function RegisterPage() {
  return (
    <Box>
      <Typography variant='h1'>Crea una cuenta</Typography>
      <Typography variant='h4'>Y controla tus {' '}
        <Typography variant='h4' component='span'>fianazas</Typography>
      </Typography>

      <RegisterForm />

      <Box component="nav" sx={{ mt: 10, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <Link
          href="/auth/login"
          color="textSecondary"
          component={NextLink}
          sx={{
            fontWeight: '500',
            fontSize: '1.2rem',
            textDecoration: 'none', // 👈 quita el subrayado
            '&:hover': {
              textDecoration: 'underline', // opcional: subrayar al pasar el mouse
            },
          }}>
          ¿Ya tienes cuenta? Inicia Sesion
        </Link>
        <Link
          href="/auth/forgot-password"
          color="textSecondary"
          component={NextLink}
          sx={{
            fontWeight: '500',
            fontSize: '1.2rem',
            textDecoration: 'none', // 👈 quita el subrayado
            '&:hover': {
              textDecoration: 'underline', // opcional: subrayar al pasar el mouse
            },
          }}>
          ¿Olvidaste tu contrasena?  Reestablecer
        </Link>
      </Box>

    </Box>
  );
}
