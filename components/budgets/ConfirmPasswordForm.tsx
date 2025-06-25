'use client'
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import BudgetForm from "./BudgetForm";
import { Budget } from "@/src/schemas";
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { deleteBudget } from "@/actions/delete-budget-action";

export default function ConfirmPasswordForm() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const budgetId = +searchParams.get('deleteBudgetId')!

  const deleteBudgetWithId = deleteBudget.bind(null, budgetId)
  const [state, dispatch] = useFormState(deleteBudgetWithId, {
    errors: [],
    success: ''
  })

  const closeModal = () => {
    const hideModal = new URLSearchParams(searchParams.toString())
    hideModal.delete('deleteBudgetId')
    router.replace(`${pathname}?${hideModal}`)
  }


  useEffect(() => {
    if (state.success) {
      closeModal();
      toast.success(state.success)
    }

    if (state.errors) {
      state.errors.forEach(error => {
        toast.error(error);
      })
    }
  }, [state])


  return (
    <Container>

      <Box
        sx={{
          px: { xs: 1 },
          py: { xs: 1, sm: 2 },
        }}
      >
        <Grid container gap={1} alignItems="center" justifyContent="space-between">

          <Grid>
            <Typography variant="h2">Eliminar Presupuesto</Typography>
            <Typography variant="h4" sx={{ fontSize: 20 }}>
              Ingresa tu password para {' '}
              <Typography variant="h4" component="span" fontWeight="bold" sx={{ fontSize: 20 }}>
                eliminar el presupuesto
              </Typography>
            </Typography>
          </Grid>
        </Grid>

        <Box
          component="form"
          noValidate
          action={dispatch}
          sx={{
            mt: 7,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography textAlign="left" variant="h5" sx={{ fontWeight: '800' }}>Ingresa tu Password para eliminar</Typography>

          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              label="Password de Registro"
              name="password"
              placeholder="Password de Registro"
              variant="outlined"
            />
          </Box>

          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                py: 1,
                fontSize: '1rem',
                backgroundColor: '#2e1065',
                ':hover': {
                  backgroundColor: '#4a148c',
                },
              }}
              disableElevation
            >
              Eliminar Presupuesto
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                py: 1,
                fontSize: '1rem',
                backgroundColor: '#ffa000',
                fontWeight: '900'
              }}
              disableElevation
              onClick={closeModal}
            >
              Cancelar
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container >
  )
}

