'use client'
import NextLink from 'next/link';
import { Box, Link, Typography } from '@mui/material';
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      component={NextLink}
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        priority
      />
    </Link>
  );
};