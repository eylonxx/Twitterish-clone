import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  const background = theme.palette.background.alt;
  return (
    <Box>
      <Box width="100%" backgroundColor={background} textAlign="center" p="1rem 6%">
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Twitterish
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={background}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Welcome to Twitterish, a some-what clone of Twitter!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};
export default LoginPage;
