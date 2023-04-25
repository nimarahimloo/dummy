import PropTypes from 'prop-types';
import {m} from 'framer-motion';
// @mui
import {styled} from '@mui/material/styles';
//
import Logo from './Logo';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({theme}) => ({
    right: 0,
    bottom: 0,
    zIndex: 99999,
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

LoadingScreen.propTypes = {
    isDashboard: PropTypes.bool,
};

export default function LoadingScreen({isDashboard, ...other}) {
    return (
        <>
            {!isDashboard && (
                <RootStyle {...other}>
                    <m.div
                        initial={{rotateY: 0}}
                        animate={{rotateY: 360}}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            repeatDelay: 1,
                            repeat: Infinity,
                        }}
                    >
                        <Logo disabledLink sx={{width: 300, height: 300}}/>
                    </m.div>
                </RootStyle>
            )}
        </>
    );
}
