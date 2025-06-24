import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Avatar, Box, Button, CssBaseline, IconButton, Link, Menu, MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';
import NextLink from 'next/link';
import { logout } from '@/actions/logout-user-action';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const drawerWidth = 240;
const pages = ['Products', 'Pricing', 'Blog'];
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));


interface Props {
  handleDrawerOpen: () => void;
  open: boolean;
  user: any
}

export default function AppBarHeader({ handleDrawerOpen, open, user }: Props) {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" open={open}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            open && { display: { xs: 'none', sm: 'block' } },
          ]}
        >
          <MenuIcon sx={{
            display: { xs: 'none', sm: 'block' }
          }} />
        </IconButton>

        <Link
          href="/admin"
          component={NextLink}
          sx={{
            mr: 2,
            display: { xs: 'flex' },
            fontWeight: 900,
            letterSpacing: '.2rem',
            color: 'white',
            textDecoration: 'none',
            fontSize: { xs: 15, md: 20 }
          }}>
          Cashtracker
        </Link>


        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

        {/* profile */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Travis Howard" src="https://e1.pngegg.com/pngimages/248/746/png-clipart-rick-and-morty-hq-resource-rick-and-morty.png" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >


            <MenuItem onClick={async () => {
              handleCloseUserMenu()
            }}>
              <Typography sx={{ textAlign: 'center' }}>
                Profile:  {user.name}
              </Typography>
            </MenuItem>

            <MenuItem
              component={NextLink}
              href="/admin/budgets/new"
              onClick={handleCloseUserMenu}
            >
              <Typography sx={{ textAlign: 'center' }}>
                Budgets
              </Typography>
            </MenuItem>

            <MenuItem onClick={async () => {
              await logout()
              handleCloseUserMenu()
            }}>
              <Typography sx={{ textAlign: 'center' }}>
                Logout
              </Typography>
            </MenuItem>

          </Menu>
        </Box>


      </Toolbar>
    </AppBar >
  );
};
