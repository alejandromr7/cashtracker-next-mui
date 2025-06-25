import BudgetMenu from '@/components/budgets/BudgetMenu';
import DeleteBudgetModal from '@/components/budgets/DeleteBudgetModal';
import getToken from '@/src/auth/token';
import { BudgetsAPIResponseSchema } from '@/src/schemas';
import { formatCurrency, formatDay } from '@/src/utils';
import { Box, Button, Container, Divider, Grid, Link, List, ListItem, Typography } from '@mui/material';
import type { Metadata } from 'next'
import NextLink from 'next/link';

export const metadata: Metadata = {
  title: '',
  description: ''
}

async function getBudgets() {
  const token = getToken();
  const url = `${process.env.API_URL}/budgets`;
  const req = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })

  const json = await req.json()
  const budgets = BudgetsAPIResponseSchema.parse(json)
  return budgets

}

export default async function AdminPage() {

  const budgets = await getBudgets();
  console.log(budgets.length)

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

        {budgets.length
          ? (
            <>
              <List sx={{ border: 1, borderColor: 'grey.300', boxShadow: 2, mt: 5, p: 0 }}>
                {budgets.map((budget, index) => (
                  <Box key={budget.id}>
                    <ListItem sx={{ justifyContent: 'space-between', gap: 2, p: 2 }}>
                      <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                        <Typography variant="subtitle1" fontWeight="semibold" color="text.primary">
                          {/* Contenido principal aquí */}
                          <Link href={`/admin/budgets/${budget.id}`} color="textPrimary" component={NextLink} underline="hover" variant='h5' fontWeight='bold'>
                            {budget.name}
                          </Link>
                        </Typography>

                        <Typography variant="h6" color="secondary" fontWeight="bold">
                          {/* Información destacada aquí */}
                          {formatCurrency(budget.amount)}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" fontWeight="bold">
                          Ultima actualizacion {formatDay(budget.updatedAt)}</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <BudgetMenu budgetId={budget.id} />
                      </Box>
                    </ListItem>
                    {index < budgets.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
              <DeleteBudgetModal />
            </>
          )
          : (
            <Grid display='flex' flexDirection='column' alignItems='center' sx={{ mt: 5, }} gap={1}>
              <Typography variant="h5" sx={{ fontWeight: '700' }}>
                No hay presupuestos aun {' '}
                <Link href='/admin/budgets/new' color="primary" component={NextLink} underline="always">
                  comienza creando uno
                </Link>
              </Typography>
            </Grid>
          )}

      </Box>
    </Container >

  );
}
