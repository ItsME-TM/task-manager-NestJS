import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 2, textAlign: 'center', bgcolor: 'grey.200', mt: 4, backgroundColor: '#00796b' }}>
      <Typography variant="body2" color="white" sx={{ fontSize: '0.875rem' }}>
        Task Manager &copy; {new Date().getFullYear()} | Built with React and NestJS
      </Typography>
    </Box>
  );
};

export default Footer;