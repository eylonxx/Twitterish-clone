import { Box, Divider, Skeleton } from '@mui/material';
import React from 'react';
import WidgetWrapper from './WidgetWrapper';

const UserWidgetSkeletonLoader = () => {
  return (
    <WidgetWrapper p="0.5rem">
      <Box gap="0.625rem" pb="1.5rem" display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Skeleton variant="circular" width={60} height={60} />
          <Skeleton variant="rounded" width={190} height={40} />
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column" gap="1rem">
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column" gap="1rem">
          <Skeleton variant="rounded" width={240} height={40} />
          <Skeleton variant="rounded" width={240} height={60} />
          <Skeleton variant="rounded" width={240} height={60} />
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidgetSkeletonLoader;
