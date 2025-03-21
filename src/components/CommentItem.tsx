import { Comment } from './CommentSection';

interface Props {
  comment: Comment & {
    children?: Comment[];
  };
  postId: number;
}

const CommentItem = ({ comment, postId }: Props) => {
  return (
    <div>
      <div>
        <div>
          <span>{comment.author}</span>
          <span>{new Date(comment.created_at).toLocaleDateString()}</span>
        </div>
        <p>{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentItem;
