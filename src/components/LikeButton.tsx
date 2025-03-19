interface Props {
  postId: number;
}

const LikeButton = ({ postId }: Props) => {
  return (
    <div>
      <button>👍</button>
      <button>👎</button>
    </div>
  );
};

export default LikeButton;
