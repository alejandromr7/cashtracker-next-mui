import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { AlertTitle } from '@mui/material';

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {/* <Alert
        severity="error"
        variant="standard"
        sx={{
          borderRadius: 1,
          fontSize: '1rem',
          boxShadow: 0,
          alignItems: 'center',
        }}
      >
        <AlertTitle sx={{ fontWeight: 'bold' }}>¡Éxito!</AlertTitle>
        Tu cuenta ha sido creada correctamente.
      </Alert> */}
      {/* <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      */}
      <Alert severity="error">{children}</Alert>
    </Stack>
  );
}