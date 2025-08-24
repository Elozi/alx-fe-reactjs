import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  return <h2>Viewing blog post #{postId}</h2>;
};

export default BlogPost;
