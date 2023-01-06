import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    likes: { type: Map, of: Boolean },
    comments: {
      type: Array,
      default: [],
    },
    picturePath: String,
    userPicturePath: String,
    location: String,
    description: String,
  },
  { timestamps: true }
);
const Post = mongoose.model('Post', PostSchema);
export default Post;
