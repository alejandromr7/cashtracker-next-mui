'use client'
import { createBudget } from "@/actions/create-budget-action";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import BudgetForm from "./BudgetForm";
import { Budget } from "@/src/schemas";
import { editBudget } from "@/actions/edit-budget-action";

export default function EditBudgetForm({ budget }: { budget: Budget }) {

  const router = useRouter()
  const editBudgetWithId = editBudget.bind(null, budget.id)
  const [state, dispatch] = useFormState(editBudgetWithId, {
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

        <BudgetForm budget={budget} />

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
          Guardar Cambios
        </Button>
      </Box>
    </Container>
  );
};
