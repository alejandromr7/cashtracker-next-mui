import { Box, Typography } from '@mui/material';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default function Page() {
  return (
    <Box>
      <Typography variant='h1'>Welcome</Typography>
    </Box>
  );
}
