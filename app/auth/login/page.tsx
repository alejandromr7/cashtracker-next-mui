import LoginForm from '@/components/auth/LoginForm';
import NextLink from 'next/link';
import { Box, Link, Typography } from '@mui/material';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cashtracker - Login',
  description: 'Cashtracker - Login'
}

export default function LoginPage() {
  return (
    <Box>
      <Typography variant='h1'>Inicia Sesion</Typography>
      <Typography variant='h4'>Y controla tus {' '}
        <Typography variant='h4' component='span'>fianazas</Typography>
      </Typography>

      <LoginForm />

      <Box component="nav" sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <Link
          href="/auth/register"
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
          ¿No tienes cuenta? Crea una
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
