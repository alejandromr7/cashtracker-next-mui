'use client'

import React from 'react';
import { Box, TextField, Typography, Button, Grid, Container } from '@mui/material';

export default function RegisterForm() {
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
            Nombre
          </Typography>
          <TextField
            fullWidth
            type="text"
            label="Nombre de Registro"
            name="name"
            placeholder="Nombre de Registro"
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

        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Repetir Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            label="Confirma Password de Registro"
            placeholder="Confirma Password de Registro"
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
          Registrarme
        </Button>
      </Box>
    </Container>
  );
}