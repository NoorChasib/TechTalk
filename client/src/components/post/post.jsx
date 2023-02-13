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
import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const commentRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!commentRef.current.contains(e.target)) {
        setCommentOpen(false);
      }
      if (!menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  });

  const { isLoading: isLoadingLikes, data: likesData } = useQuery(
    ['likes', post.id],
    () =>
      makeRequest.get('/likes?postId=' + post.id).then((res) => {
        return res.data;
      })
  );

  const { data: commentsData } = useQuery(['comments', post.id], () =>
    makeRequest.get('/comments?postId=' + post.id).then((res) => {
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
    mutation.mutate(likesData.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className="post">
      <div className="container" ref={commentRef}>
        <div className="user">
          <div className="userInfo">
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img src={'/upload/' + currentUser.profilePic} alt="" />
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
            className="faMenu"
            ref={menuRef}
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
            {isLoadingLikes ? (
              'loading'
            ) : likesData.includes(currentUser.id) ? (
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
                className="faHeart"
                size="lg"
                fixedWidth
                onClick={handleLike}
              />
            )}
            <span className='likeCursor'>{likesData?.length} Likes </span>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <FontAwesomeIcon
              icon={faCommentDots}
              className="faIcon"
              size="lg"
              fixedWidth
            />
            <span className='postText'>{commentsData?.length} Comments</span>
          </div>
          <div className="item">
            <FontAwesomeIcon
              icon={faShareFromSquare}
              className="faIcon"
              size="lg"
              fixedWidth
            />
            <span className='postText'>Share</span>
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
