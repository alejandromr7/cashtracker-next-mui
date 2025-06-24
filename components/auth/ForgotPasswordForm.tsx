'use client'

import React, { useEffect } from 'react';
import { Box, TextField, Typography, Button, Container } from '@mui/material';
import { useFormState } from 'react-dom';
import { forgotPassword } from '@/actions/forgot-password-action';
import { toast } from 'react-toastify';

export default function ForgotPasswordForm() {


  const [state, dispatch] = useFormState(forgotPassword, {
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
    }
  }, [state])
  return (
    <Container maxWidth='sm'>
      <Box
        component="form"
        action={dispatch}
        noValidate
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
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
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
          Enviar Instrucciones
        </Button>
      </Box>
    </Container>
  );
}