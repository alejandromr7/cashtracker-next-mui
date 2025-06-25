import { Box, Typography, Button, Container } from '@mui/material';
import NextLink from 'next/link';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function NotFoundPage() {
  return (
    <Container maxWidth="md" sx={{}}>
      <Box textAlign="center" sx={{ p: 4, mt: 40 }}>
        <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
        <Typography variant="h2" fontWeight="bold" textAlign='center' gutterBottom>
          404
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Página no encontrada
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Lo sentimos, la página que estás buscando no existe o fue movida.
        </Typography>
        <Button
          component={NextLink}
          href="/admin"
          variant="contained"
          color="primary"
          sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
        >
          Volver al inicio
        </Button>
      </Box>
    </Container>
  );
}