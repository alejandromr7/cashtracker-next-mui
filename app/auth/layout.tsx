import Logo from '@/components/ui/Logo';
import ToastNotification from '@/components/ui/ToastNotification';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
  description: ''
}


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Lado izquierdo con fondo purple-950 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            height: '100%', backgroundColor: '#2e1065',
            justifyContent: 'center',
            display: { sm: 'flex' },
            alignItems: {
              xs: 'center',
              md: 'start'
            },
            backgroundImage: {
              xs: 'none',
              md: 'url("/grafico.svg")'
            },
            backgroundSize: '30rem',
            backgroundPosition: 'left bottom',
            backgroundRepeat: 'no-repeat',

          }}>
          <Box
            sx={{
              width: 384, // w-96 = 24rem = 384px
              py: { xs: 5, lg: 10 }, // py-10 = 40px, py-20 = 80px
            }}
          >
            <Logo />
          </Box>
        </Box>
      </Grid>

      {/* Lado derecho con padding y centrado */}
      <Grid size={{ xs: 12, md: 6 }} sx={{ mx: 'auto', my: 'auto' }}>
        {children}
      </Grid>

      <ToastNotification />
    </Grid>
  );
}