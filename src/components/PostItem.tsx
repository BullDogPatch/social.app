import { Post } from './PostList';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  console.log(post);
  return <div>PostItem</div>;
};

export default PostItem;
