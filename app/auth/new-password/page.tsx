import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import NextLink from 'next/link';
import { Box, Link, Typography } from '@mui/material';
import type { Metadata } from 'next'
import PasswordResetHandler from '@/components/auth/PasswordResetHandler';

export const metadata: Metadata = {
  title: 'Cashtracker - Login',
  description: 'Cashtracker - Login'
}

export default function NewPasswordPage() {
  return (
    <Box>
      <Typography variant='h1'>Reestablecer Password
      </Typography>
      <Typography variant='h4'>Ingresa el código que recibiste {' '}
        <Typography variant='h4' component='span'>por email</Typography>
      </Typography>

      <PasswordResetHandler />

    </Box>
  );
}
