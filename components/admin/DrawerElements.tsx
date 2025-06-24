import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SavingsIcon from '@mui/icons-material/Savings';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NextLink from 'next/link';

interface Props {
  open: boolean;
  handleDrawerClose: () => void;
}

export default function DrawerElements({ open, handleDrawerClose }: Props) {
  return (
    <List>

      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          component={NextLink}
          href="/admin/budgets/new"
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            borderRadius: 2,
            transition: 'background-color 0.2s',
            '&:hover': {
              backgroundColor: '#d1c4e9',
              color: 'primary.contrastText',
            },
          }}
          onClick={handleDrawerClose}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              color: 'primary.main',
            }}
          >
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText
            primary='Charts'
            sx={{
              fontSize: 55,
              opacity: open ? 1 : 0,
              color: 'text.primary',
              transition: 'opacity 0.3s',
              whiteSpace: 'nowrap',
              fontWeight: '900'
            }}
          />
        </ListItemButton>
      </ListItem>


      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          component={NextLink}
          href="/admin/budgets/new"
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            borderRadius: 2,
            transition: 'background-color 0.2s',
            '&:hover': {
              backgroundColor: '#d1c4e9',
              color: 'primary.contrastText',
            },
          }}
          onClick={handleDrawerClose}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              color: 'primary.main',
            }}
          >
            <SavingsIcon />
          </ListItemIcon>
          <ListItemText
            primary='Budgets'
            sx={{
              opacity: open ? 1 : 0,
              color: 'text.primary',
              transition: 'opacity 0.3s',
              whiteSpace: 'nowrap',
            }}
          />
        </ListItemButton>
      </ListItem>


      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          component={NextLink}
          href="/profile"
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            borderRadius: 2,
            transition: 'background-color 0.2s',
            '&:hover': {
              backgroundColor: '#d1c4e9',
              color: 'primary.contrastText',
            },
          }}
          onClick={handleDrawerClose}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              color: 'primary.main',
            }}
          >
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText
            primary='Profile'
            sx={{
              opacity: open ? 1 : 0,
              color: 'text.primary',
              transition: 'opacity 0.3s',
              whiteSpace: 'nowrap',
            }}
          />
        </ListItemButton>
      </ListItem>

    </List>
  );
};
