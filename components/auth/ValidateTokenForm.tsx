'use client'
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Box, Container, styled } from '@mui/material';
import { useFormState } from "react-dom";
import { confirmAccount } from "@/actions/confirm-account-action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { validateToken } from "@/actions/validate-token-action";

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

interface Props {
  token: string
  setIsValidToken: Dispatch<SetStateAction<boolean>>;
  setToken: Dispatch<SetStateAction<string>>;

}

export default function ValidateTokenForm({ token, setToken, setIsValidToken }: Props) {
  const router = useRouter()

  const [isComplete, setIsComplete] = useState(false)

  const validateTokenWithToken = validateToken.bind(null, token)
  const [state, dispatch] = useFormState(validateTokenWithToken, {
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
      setIsValidToken(true)
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