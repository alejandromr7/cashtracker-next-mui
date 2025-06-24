import { Box, Button, Grid, Typography } from '@mui/material';
import type { Metadata } from 'next'
import NextLink from 'next/link';

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default async function AdminPage() {

  return (

    <Box
      sx={{
        px: { xs: 1 },
        py: { xs: 1, sm: 2 },
      }}
    >
      <Grid container gap={5} alignItems="center" justifyContent="space-between">

        <Grid>
          <Typography variant="h2">Crear Presupuesto</Typography>
          <Typography variant="h4">
            Maneja y controla tus{' '}
            <Typography variant="h4" component="span" fontWeight="bold">
              presupuestos
            </Typography>
          </Typography>
        </Grid>



      </Grid>

    </Box>
  );
}
