import { Link } from 'react-router-dom';
import { Post } from './PostList';

interface Props {
  post: Post;
}
const PostItem = ({ post }: Props) => {
  return (
    <div>
      <div />
      <Link to='/post'>
        <div>
          <div>
            <div />
          </div>
          <div>
            <div>{post.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
