'use client'

import * as React from 'react';
import NextLink from 'next/link';
import IconButton from '@mui/material/IconButton';
import { Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Budget } from '@/src/schemas';

interface Props {
  budgetId: Budget['id']
}

export default function BudgetMenu({ budgetId }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="budget-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            boxShadow: 3,
            borderRadius: 2,
            mt: 1,
            minWidth: '200px',
          },
        }}
      >
        <MenuItem onClick={handleClose} component={NextLink} href={`/admin/budget/${budgetId}`} >
          <ListItemIcon >
            <VisibilityIcon fontSize="small" color="primary" />
          </ListItemIcon>
          <Typography variant="inherit">Ver presupuesto</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} component={NextLink} href={`/admin/budgets/${budgetId}/edit`} >
          <ListItemIcon>
            <EditIcon fontSize="small" color="info" />
          </ListItemIcon>
          <Typography variant="inherit">Editar presupuesto</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} component={NextLink} href={`/admin/budgets/${budgetId}/delete`} >
          <ListItemIcon>
            <DeleteIcon fontSize="small" color="error" />
          </ListItemIcon>
          <Typography variant="inherit">Eliminar presupuesto</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
