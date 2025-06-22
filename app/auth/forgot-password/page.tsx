import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import NextLink from 'next/link';
import { Box, Link, Typography } from '@mui/material';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cashtracker - Login',
  description: 'Cashtracker - Login'
}

export default function ForgotPage() {
  return (
    <Box>
      <Typography variant='h1'>¿Olvidaste tu contraseña?

      </Typography>
      <Typography variant='h4'>aquí puedes {' '}
        <Typography variant='h4' component='span'>reestablecerla</Typography>
      </Typography>

      <ForgotPasswordForm />


      <Box component="nav" sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <Link
          href="/auth/login"
          color="textSecondary"
          component={NextLink}
          sx={{
            fontWeight: '500',
            fontSize: '1.2rem',
            textDecoration: 'none', // 👈 quita el subrayado
            '&:hover': {
              textDecoration: 'underline',
              fontWeight: '550',
            },
          }}>
          ¿Ya tienes cuenta? Inicia Sesion
        </Link>
        <Link
          href="/auth/register"
          component={NextLink}
          color="textSecondary"
          sx={{
            fontWeight: '500',
            fontSize: '1.2rem',
            textDecoration: 'none', // 👈 quita el subrayado
            '&:hover': {
              textDecoration: 'underline',
              fontWeight: '550'
            },
          }}>
          ¿No tienes cuenta? Crea una
        </Link>
      </Box>

    </Box>
  );
}
