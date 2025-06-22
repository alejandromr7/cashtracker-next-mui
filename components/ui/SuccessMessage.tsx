import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { AlertTitle } from '@mui/material';

export default function SuccessMessage({ children }: { children: React.ReactNode }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert
        severity="success"
        variant="standard"
        sx={{
          borderRadius: 1,
          fontSize: '1rem',
          boxShadow: 0,
          alignItems: 'center',
        }}
      >
        <AlertTitle sx={{ fontWeight: 'bold' }}>¡Éxito!</AlertTitle>
        {children}
      </Alert>
    </Stack>
  );
}