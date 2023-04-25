import PropTypes from 'prop-types';
// @mui
import {styled} from '@mui/material/styles';
import {
    Box,
    Stack,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Link,
    Popover,
    Grid,
    Button,
    DialogTitle
} from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import {HEADER, NAVBAR} from '../../utils/config';
// components
import Logo from '../../components/Logo';
import Iconify from '../../components/Iconify';
import {IconButtonAnimate} from '../../components/animate';
//
import AccountPopover from './AccountPopover';
import {useMemo, useState} from "react";
import moment from "jalali-moment";
import Image from "../../components/Image";
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {PATH_DASHBOARD} from "../../routes/paths";
import useAuth from "../../hooks/useAuth";

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({isCollapse, isOffset, verticalLayout, theme}) => ({
    ...cssStyles(theme).bgBlur(),
    boxShadow: 'none',
    height: HEADER.MOBILE_HEIGHT,
    zIndex: theme.zIndex.appBar + 1,
    transition: theme.transitions.create(['width', 'height'], {
        duration: theme.transitions.duration.shorter,
    }),
    [theme.breakpoints.up('lg')]: {
        height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
        width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
        ...(isCollapse && {
            width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
        }),
        ...(isOffset && {
            height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
        }),
        ...(verticalLayout && {
            width: '100%',
            height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
            backgroundColor: theme.palette.background.default,
        }),
    },
}));

// ----------------------------------------------------------------------


function AnimateButton(props) {
    return null;
}

AnimateButton.propTypes = {children: PropTypes.node};
export default function DashboardHeader({onOpenSidebar, isCollapse = false, verticalLayout = false}) {

    const isDesktop = useResponsive('up', 'lg');

    return (
        <RootStyle isCollapse={isCollapse} verticalLayout={verticalLayout}>

            <Toolbar
                sx={{minHeight: '100% !important', paddingRight: isDesktop ? '124px !important' : ''}}>

                {!isDesktop && (
                    <IconButtonAnimate onClick={onOpenSidebar} sx={{mr: 1, color: 'text.primary'}}>
                        <Iconify icon="eva:menu-2-fill"/>
                    </IconButtonAnimate>
                )}
                <Box sx={{flexGrow: 1}}/>
                <Stack direction="row" alignItems="center" spacing={{xs: 0.5, sm: 1.5}}>
                    <AccountPopover/>
                </Stack>
            </Toolbar>
        </RootStyle>
    );
}
