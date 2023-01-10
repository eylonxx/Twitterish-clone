import mongoose, { Schema } from 'mongoose';

const PostSchema = new mongoose.Schema({}, { timestamps: true });
PostSchema.add({
  parent: {
    type: PostSchema || null,
  },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
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
  comments: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  picturePath: String,
  userPicturePath: String,
  location: String,
  description: String,
});
const Post = mongoose.model('Post', PostSchema);
export default Post;
