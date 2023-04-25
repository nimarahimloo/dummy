import {useSnackbar} from 'notistack';
import {useMemo, useState} from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {alpha} from '@mui/material/styles';
import {Box, Typography, Stack, MenuItem, Avatar} from '@mui/material';
import {PATH_AUTH} from '../../routes/paths';
import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import MenuPopover from '../../components/MenuPopover';
import {IconButtonAnimate} from '../../components/animate';

/**
 * Account PopOver Component
 * @returns {JSX.Element}
 * @constructor
 */

export default function AccountPopover() {
    const isMountedRef = useIsMountedRef();

    const {enqueueSnackbar} = useSnackbar();

    const [openEditProfile, setOpenEditProfile] = useState(null);

    const handleOpenEditProfile = (event) => {
        setOpenEditProfile(event.currentTarget);
    };
    const handleCloseEditProfile = () => {
        setOpenEditProfile(null);
    };

    /**
     * Function Logout
     * @returns {Promise<void>}
     */

    const handleLogout = async () => {
        try {
            if (isMountedRef.current) {
                handleCloseEditProfile();
            }
        } catch (error) {
            enqueueSnackbar('', {variant: 'error'});
        }
    };

    return (
        <Box sx={{position: 'relative', display: 'flex', gap: '1em'}}>
            <Stack>
                <Typography
                    sx={{fontWeight: "normal", fontSize: "16px", color: "#2F3A56"}}>مهمان</Typography>
                <Typography sx={{
                    fontWeight: "normal",
                    fontSize: "12px",
                    color: "#E2474B",
                    textAlign: "right"
                }}>مدیر کل</Typography>
            </Stack>
            <IconButtonAnimate
                onClick={handleOpenEditProfile}
                sx={{
                    p: 0,
                    ...(openEditProfile && {
                        '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                        },
                    }),
                }}
            >
                <Avatar src=""/>
            </IconButtonAnimate>

            <MenuPopover
                open={Boolean(openEditProfile)}
                anchorEl={openEditProfile}
                onClose={handleCloseEditProfile}
                className="dropdown"
                sx={{
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    p: 0,
                    mt: 1.5,

                    '& .MuiMenuItem-root': {
                        typography: 'body2',
                        borderRadius: "0 10px 10px 10px",
                    },
                }}
            >
                <Stack sx={{p: 1}}>
                    <MenuItem>
                        ویرایش
                    </MenuItem>
                    <MenuItem>
                        تغییر کلمه عبور
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        خروج
                    </MenuItem>
                </Stack>
            </MenuPopover>
        </Box>
    );
}
