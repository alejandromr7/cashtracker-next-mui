'use client'

import React from 'react';
import { Box, TextField, Typography, Button, Container } from '@mui/material';

export default function LoginForm() {
  return (
    <Container maxWidth='sm'>
      <Box
        component="form"
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
            backgroundColor: '#4a148c',
            ':hover': {
              backgroundColor: '#6a1b9a',
            },
          }}
        >
          Iniciar Sesion
        </Button>
      </Box>
    </Container>
  );
}