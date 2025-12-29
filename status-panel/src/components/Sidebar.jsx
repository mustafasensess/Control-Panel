import React from 'react';
import {
    Drawer, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Box, Typography, IconButton, Tooltip
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; // Sağa ok ikonu

const drawerWidth = 260;
const closedDrawerWidth = 0;

function Sidebar({ open, handleDrawer }) {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { text: 'Genel Bakış', icon: <DashboardIcon />, path: '/' },
        { text: 'Sunucu Hizmetleri', icon: <BarChartIcon />, path: '/server' },
        { text: 'Dış Hizmetler', icon: <GroupIcon />, path: '/third-party' },
        { text: 'Entegrasyon Hizmetleri', icon: <SettingsIcon />, path: '/integration' },
    ];

    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    width: open ? drawerWidth : closedDrawerWidth,
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                    [`& .MuiDrawer-paper`]: {
                        width: open ? drawerWidth : closedDrawerWidth,
                        transition: 'width 0.3s ease-in-out',
                        overflowX: 'hidden',
                        height: 'calc(100vh - 48px)',
                        top: '24px',
                        left: '24px',
                        borderRadius: '24px',
                        border: 'none',
                        boxShadow: open ? '0px 10px 30px rgba(0,0,0,0.08)' : 'none',
                        backgroundColor: '#ffffff',
                        color: '#2d3436',
                        visibility: open ? 'visible' : 'hidden',
                    },
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        p: 3, mt: 1, mb: 1
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{
                                minWidth: 45, width: 45, height: 45,
                                bgcolor: '#e3f2fd', borderRadius: '12px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <BusinessCenterIcon sx={{ color: '#1976d2', fontSize: '24px' }} />
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '16px', color: '#1a1a1a' }}>
                                    PERAPOLE
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#999', fontWeight: 500 }}>
                                    Admin Paneli
                                </Typography>
                            </Box>
                        </Box>
                        <IconButton onClick={handleDrawer} sx={{ color: '#636e72' }}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Box>

                    <List sx={{ px: 2 }}>
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 1.5 }}>
                                    <ListItemButton
                                        onClick={() => navigate(item.path)}
                                        sx={{
                                            minHeight: 48, px: 2.5, borderRadius: '16px',
                                            backgroundColor: isActive ? '#1976d2' : 'transparent',
                                            color: isActive ? '#fff' : '#636e72',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                backgroundColor: isActive ? '#1565c0' : '#f5f6fa',
                                                transform: open ? 'translateX(6px)' : 'scale(1.05)',
                                            }
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 0, mr: 2, justifyContent: 'center', color: isActive ? '#fff' : '#636e72' }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text}  />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>

            {!open && (
                <Box
                    onClick={handleDrawer}
                    sx={{
                        position: 'fixed',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1300,
                        width: '20px',
                        height: '60px',
                        backgroundColor: '#fff',
                        borderTopRightRadius: '100px',
                        borderBottomRightRadius: '100px',
                        boxShadow: '4px 0 15px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        '&:hover': {
                            width: '35px',
                            backgroundColor: '#1976d2',
                            color: '#fff',
                            paddingRight: '5px'
                        },
                        color: '#1976d2'
                    }}
                >
                    <ChevronRightIcon sx={{ fontSize: '24px' }} />
                </Box>
            )}
        </>
    );
}

export { drawerWidth, closedDrawerWidth };
export default Sidebar;