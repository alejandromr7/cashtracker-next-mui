import getToken from '@/src/auth/token';
import { BudgetAPIResponseSchema } from '@/src/schemas';
import type { Metadata } from 'next'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import NextLink from 'next/link';
import { notFound } from 'next/navigation';
import EditBudgetForm from '@/components/budgets/EditBudgetForm';
import { cache } from 'react';
import { getBudget } from '@/src/services/budgets';


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const budget = await getBudget(params.id)
  return {
    title: `CASHTRACKER - ${budget.name}`,
    description: `${budget.name}`
  }
}

export default async function EditBudgetPage({ params }: { params: { id: string } }) {
  const { id } = params
  const budget = await getBudget(id)

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
            <Typography variant="h2" >Editar Presupuesto: {budget.name}</Typography>
            <Typography variant="h5" sx={{ mt: 1, color: '' }} >
              Llena el formulario y actualiza tu presupuesto {' '}
              <Typography variant="h5" component="span" fontWeight="bold" sx={{ color: '#ffc107' }}>
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

          <EditBudgetForm budget={budget} />
        </Box>

      </Box>
    </Container >
  );
}



