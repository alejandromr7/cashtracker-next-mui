import { Box, Typography } from '@mui/material';
import type { Metadata } from 'next'
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default function Page() {


  redirect('/auth/login')
  return (
    <Box>
      <Typography variant='h1'>Welcome</Typography>
    </Box>
  );
}
