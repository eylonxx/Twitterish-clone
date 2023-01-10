import { Box, Divider, Skeleton } from '@mui/material';
import React from 'react';
import WidgetWrapper from './WidgetWrapper';

const UserWidgetSkeletonLoader = () => {
  return (
    <WidgetWrapper p="0.5rem">
      <Box gap="0.4rem" pb="1rem" display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" alignItems="center" pb="0.8rem">
          <Skeleton variant="circular" width={60} height={60} />
          <Skeleton variant="rounded" width="80%" height="40px" />
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column" gap="0.5rem" mt="1rem">
          <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} />
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column" gap="1rem" mt="0.5rem">
          <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} />
          <Skeleton variant="rounded" width="100%" height="50px" />
          <Skeleton variant="rounded" width="100%" height="50px" />
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidgetSkeletonLoader;
