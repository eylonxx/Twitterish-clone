import { Box, Divider, Skeleton } from '@mui/material';
import React from 'react';
import WidgetWrapper from './WidgetWrapper';

const PostWidgetSkeletonLoader = () => {
  return (
    <WidgetWrapper>
      <Box display="flex" flexDirection="column">
        <Box display="flex">
          <Skeleton variant="circular" width={60} height={60} />
          <Skeleton variant="rounded" width="80%" height={60} />
        </Box>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={60} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={60} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} height={60} />
      </Box>
    </WidgetWrapper>
  );
};

export default PostWidgetSkeletonLoader;
