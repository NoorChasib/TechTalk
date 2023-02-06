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

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
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
            icon={faEllipsis}
            className="faIcon"
            size="lg"
            fixedWidth
          />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={'./upload/'+post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <FontAwesomeIcon
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
              />
            )}
            132 Likes
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
        {commentOpen && <Comments postId = {post.id} />}
      </div>
    </div>
  );
};

export default Post;
