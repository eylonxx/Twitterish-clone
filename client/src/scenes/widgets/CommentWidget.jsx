import { Box, Typography, useTheme } from '@mui/material';
import UserImage from 'components/UserImage';
import React from 'react';

const CommentWidget = ({ comment }) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.neutral.main;

  const getTimeAgo = () => {
    const currTime = Date.now();
    const createdAtTime = new Date(comment.createdAt).getTime();
    let timeAgo = (currTime - createdAtTime) / 1000;
    if (timeAgo < 3600) return `${Math.floor(timeAgo / 60)}m ago`;
    if (timeAgo < 86400) return `${Math.floor(timeAgo / 3600)}h ago`;
    return comment.createdAt.slice(0, 10).split('-').reverse().join('-');
  };

  return (
    <Box display="flex" mt="0.25rem">
      <UserImage image={comment.userId.picturePath} size="25px" />
      <Box display="flex" flexDirection="column">
        <Typography sx={{ color: primary, pl: '0.5rem' }}>{comment.description}</Typography>
        <Typography sx={{ color: main, fontSize: '0.5rem', pl: '0.5rem' }}>{getTimeAgo()}</Typography>
      </Box>
    </Box>
  );
};

export default CommentWidget;
