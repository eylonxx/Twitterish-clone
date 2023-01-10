import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
  CommentOutlined,
} from '@mui/icons-material';
import { Box, Divider, IconButton, InputBase, Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import Friend from 'components/Friend';
import WidgetWrapper from 'components/WidgetWrapper';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, setPost } from 'state';
import CommentWidget from './CommentWidget';

const PostWidget = ({
  isHome,
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;
  const [comment, setComment] = useState('');
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const createComment = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/comment`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: comment, userId: loggedInUserId, postId: postId }),
    });
    const newComment = await response.json();
    console.log('new comment in widget', newComment);
    dispatch(addComment({ comment: newComment }));
  };

  return (
    <WidgetWrapper m={isHome ? '2rem 0' : '0 0 1rem 0'}>
      <FlexBetween>
        <Friend friendId={postUserId} name={name} subtitle={location} userPicturePath={userPicturePath} />
        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
      <Typography color={main} sx={{ mt: '1rem', ml: '0.5rem' }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? <FavoriteOutlined sx={{ color: primary }} /> : <FavoriteBorderOutlined />}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
      <FlexBetween mt="0.5rem">
        <InputBase
          placeholder="Write a comment..."
          multiline
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          sx={{
            marginRight: '0.5rem',
            fontSize: '0.75rem',
            width: '100%',
            backgroundColor: palette.neutral.light,
            borderRadius: '0.5rem',
            padding: '0.5rem 1rem',
          }}
        />
        <IconButton onClick={() => createComment()}>
          <CommentOutlined />
        </IconButton>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => {
            return (
              <Box key={`${name}-${i}`}>
                <Divider />
                <CommentWidget comment={comment} />
              </Box>
            );
          })}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
