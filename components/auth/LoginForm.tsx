'use client'

import React, { useEffect } from 'react';
import { Box, TextField, Typography, Button, Container } from '@mui/material';
import { useFormState } from 'react-dom';
import { authenticate } from '@/actions/authenticate-user-action';
import { toast } from 'react-toastify';

export default function LoginForm() {


  const [state, dispatch] = useFormState(authenticate, {
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
      toast.success(`Welcome`)
    }

  }, [state])

  return (
    <Container maxWidth='sm'>
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
        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Email
          </Typography>
          <TextField
            fullWidth
            id="email"
            label="Email de Registro"
            type="email"
            name="email"
            placeholder="Email de Registro"
            variant="outlined"
          />
        </Box>

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
        >
          Iniciar Sesion
        </Button>
      </Box>
    </Container>
  );
}