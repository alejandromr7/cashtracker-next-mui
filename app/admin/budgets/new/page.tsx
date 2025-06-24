import CreateBudgetForm from '@/components/budgets/CreateBudgetForm';
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
            <Typography variant="h2">Crear Presupuesto</Typography>
            <Typography variant="h4">
              Llena el formulario y crea un nuevo {' '}
              <Typography variant="h4" component="span" fontWeight="bold">
                presupuesto
              </Typography>
            </Typography>
          </Grid>

          <Grid>
            <Button
              href='/admin'
              LinkComponent={NextLink}
              variant="contained"
              sx={{ maxHeight: 35, backgroundColor: '#ffa000', fontWeight: '900' }}
              disableElevation
            >
              Volver
            </Button>


          </Grid>
        </Grid>


        <Box mt={5} boxShadow={2} border={1} borderColor="grey.300"
          sx={{
            paddingX: { xs: 0, md: 5 },
            paddingY: { xs: 5, md: 5 }
          }}
        >
          <CreateBudgetForm />
        </Box>

      </Box>
    </Container >
  );
}
