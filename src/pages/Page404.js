import {m} from 'framer-motion';
import {Link as RouterLink} from 'react-router-dom';
// @mui
import {styled} from '@mui/material/styles';
import {Box, Button, Typography, Container, Stack} from '@mui/material';
// components
import Page from '../components/Page';
import {MotionContainer, varBounce} from '../components/animate';
import Logo from "../components/Logo";

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({theme}) => ({
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Page404() {
    return (
        <Page title="404 Page Not Found" sx={{height: 1}}>
            <RootStyle>
                <Container component={MotionContainer}>
                    <Box sx={{maxWidth: 520, margin: 'auto', textAlign: 'center'}}>
                        <Stack sx={{mb: 2}}>
                            <Logo/>
                        </Stack>
                        <m.div variants={varBounce().in}>
                            <Typography sx={{fontSize: "100px", fontWeight: "bold"}}>404</Typography>
                            <Typography variant="h3" paragraph>
                                متاسفانه صفحه مورد نظر یافت نشد!
                            </Typography>
                        </m.div>
                        <Button onClick={(e) => window.history.back()} size="large" variant="contained" sx={{
                            mt: 3, '&:hover': {
                                background: "#E2474B", color: "#fff !important"
                            }
                        }} component={RouterLink}>
                            بازگشت
                        </Button>
                    </Box>
                </Container>
            </RootStyle>
        </Page>
    );
}
