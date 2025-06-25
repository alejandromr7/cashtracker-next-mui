'use client'

import { Budget } from "@/src/schemas";
import { Box, TextField, Typography } from "@mui/material";

export default function BudgetForm({ budget }: { budget?: Budget }) {
  return (
    <>
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
          defaultValue={budget?.name}
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
          defaultValue={budget?.amount}
        />
      </Box>
    </>
  );
};
