'use client'

import { createBudget } from "@/actions/create-budget-action";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function CreateBudgetForm() {

  const router = useRouter()
  const [state, dispatch] = useFormState(createBudget, {
    errors: [],
    success: ''
  })


  useEffect(() => {

    if (state.errors) {
      state.errors.forEach(e => {
        toast.error(e)
      })
    }

    if (state.success) {
      toast.success(state.success)
      router.push('/admin')
    }

  }, [state])

  return (
    <Container maxWidth='lg'>
      <Box
        // ref={ref}
        action={dispatch}
        component="form"
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >

        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Nombre Presupuesto
          </Typography>
          <TextField
            fullWidth
            type="text"
            label="Nombre Presupuesto"
            name="name"
            placeholder="Nombre Presupuesto"
            variant="outlined"
          />
        </Box>

        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Cantidad Presupuesto
          </Typography>
          <TextField
            fullWidth
            type="text"
            label="Cantidad Presupuesto"
            name="amount"
            placeholder="Cantidad Presupuesto"
            variant="outlined"
          />
        </Box>


        <Button
          type="submit"
          fullWidth
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: '#ffa000',
            fontWeight: '900',
            mt: 1,
            py: 1,
            fontSize: '1rem',
            ':hover': {
              backgroundColor: '#ffa000',
            },
          }}
        >
          Crear Presupuesto
        </Button>
      </Box>
    </Container>
  );
};
