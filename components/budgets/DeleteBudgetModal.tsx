'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ConfirmPasswordForm from './ConfirmPasswordForm';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function DeleteBudgetModal() {

  const router = useRouter()
  const pathname = usePathname()

  const searchParams = useSearchParams()
  const deleteBudgetId = searchParams.get('deleteBudgetId')
  const show = deleteBudgetId ? true : false

  const hidemodal = new URLSearchParams(searchParams.toString())
  hidemodal.delete('deleteBudgetId')

  const handleClose = () => {
    router.replace(`${pathname}?${hidemodal}`)
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        maxWidth="md"
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={show}
      >

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>


        <DialogContent dividers>
          <ConfirmPasswordForm />
        </DialogContent>

      </BootstrapDialog>
    </React.Fragment>
  );
};
