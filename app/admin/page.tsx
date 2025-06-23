import { Box, Typography } from '@mui/material';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default async function AdminPage() {

  return (

    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, sm: 6 },
      }}
    >
      <Typography variant='h1'>Mis Presupuestos</Typography>
      <Typography variant='h4'>Maneja y controla tus {' '}
        <Typography variant='h4' component='span'>presupuestos</Typography>
      </Typography>

    </Box>
  );
}
