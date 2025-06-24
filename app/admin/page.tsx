import { Box, Button, Container, Grid, Typography } from '@mui/material';
import type { Metadata } from 'next'
import NextLink from 'next/link';

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default async function AdminPage() {

  return (
    <Container>


      <Box
        sx={{
          px: { xs: 1 },
          py: { xs: 1, sm: 2 },
        }}
      >
        <Grid container gap={5} alignItems="center" justifyContent="space-between">

          <Grid>
            <Typography variant="h2">Mis Presupuestos</Typography>
            <Typography variant="h4">
              Maneja y controla tus{' '}
              <Typography variant="h4" component="span" fontWeight="bold">
                presupuestos
              </Typography>
            </Typography>
          </Grid>

          <Grid>
            <Button href='/admin/budgets/new' LinkComponent={NextLink} variant="contained" sx={{ maxHeight: 35, backgroundColor: '#ffa000', fontWeight: '900' }} disableElevation>
              Crear Presupuesto
            </Button>
          </Grid>


        </Grid>

      </Box>
    </Container>

  );
}
