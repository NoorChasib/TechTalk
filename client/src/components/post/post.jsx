import './post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faHeart as faHeartSolid,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCommentDots,
  faHeart as faHeartRegular,
  faShareFromSquare,
} from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';
import Comments from '../comments/comments';
import { useState } from 'react';
import moment from 'moment';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(['likes', post.id], () =>
    makeRequest.get('/likes?postId=' + post.id).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete('/likes?postId=' + post.id);
      return makeRequest.post('/likes', { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['likes']);
      },
    }
  );

  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete('/posts/' + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['posts']);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img src={post.profilePic} alt="" />
            </Link>
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <FontAwesomeIcon
            onClick={() => setMenuOpen(!menuOpen)}
            icon={faEllipsis}
            className="faIcon"
            size="lg"
            fixedWidth
          />
          {menuOpen && post.userId === currentUser.id && (
            <button onClick={handleDelete}>delete?</button>
          )}
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={'./upload/' + post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {isLoading ? (
              'loading'
            ) : data.includes(currentUser.id) ? (
              <FontAwesomeIcon
                style={{ color: 'red' }}
                onClick={handleLike}
                icon={faHeartSolid}
                className="faIcon"
                size="lg"
                fixedWidth
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeartRegular}
                className="faIcon"
                size="lg"
                fixedWidth
                onClick={handleLike}
              />
            )}
            {data?.length} Likes{' '}
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <FontAwesomeIcon
              icon={faCommentDots}
              className="faIcon"
              size="lg"
              fixedWidth
            />
            2 Comments
          </div>
          <div className="item">
            <FontAwesomeIcon
              icon={faShareFromSquare}
              className="faIcon"
              size="lg"
              fixedWidth
            />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
