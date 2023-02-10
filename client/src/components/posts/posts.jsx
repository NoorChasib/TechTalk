import Post from '../post/post';
import './posts.scss';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Posts = ({ userId }) => {
  //{{ userId }}
  const { isLoading, error, data } = useQuery(['posts'], () => {
    
    return makeRequest.get('/posts?userId=' + userId).then((res) => {
      return res.data;
    });
    
  });

  console.log('error', error);
  return (
    <div className="posts">
      {error
        ? 'Something went wrong!'
        : isLoading
        ? 'loading'
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
