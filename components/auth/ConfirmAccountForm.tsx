'use client'
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import React, { useEffect, useState } from 'react';
import { Box, Container, styled } from '@mui/material';
import { useFormState } from "react-dom";
import { confirmAccount } from "@/actions/confirm-account-action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const StyledPinInputField = styled(PinInputField)(({ theme }) => ({
  width: 40,
  height: 40,
  border: '1px solid #ccc',
  borderRadius: 8,
  boxShadow: theme.shadows[1],
  fontSize: '1.2rem',
  textAlign: 'center',
  '&:focus': {
    borderColor: theme.palette.primary.main,
    outline: 'none',
  },
  '::placeholder': {
    color: 'transparent',
  },
}))

export default function ConfirmAccountForm() {
  const router = useRouter()
  const [token, setToken] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  const confirmAccountWithToken = confirmAccount.bind(null, token)
  const [state, dispatch] = useFormState(confirmAccountWithToken, {
    errors: [],
    success: ''
  })


  useEffect(() => {
    if (isComplete) {
      dispatch()
    }
  }, [isComplete])

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => {
        toast.error(error)
      })
    }

    if (state.success) {
      toast.success(state.success)
      router.push('/auth/login')
    }
  }, [state])

  const handleChange = (token: string) => {
    setIsComplete(false)
    setToken(token)
  }

  const handleComplete = () => {
    setIsComplete(true)
  }

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
        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}
        >
          <PinInput
            value={token}
            onChange={handleChange}
            onComplete={handleComplete}
          >
            <StyledPinInputField />
            <StyledPinInputField />
            <StyledPinInputField />
            <StyledPinInputField />
            <StyledPinInputField />
            <StyledPinInputField />
          </PinInput>
        </Box>

      </Box>
    </Container>
  );
}