import React from 'react';

import './Post.css';

import Avatar from '@mui/material/Avatar';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendIcon from '@mui/icons-material/Send';

function Post({
  name,
  description,
  photoUrl,
  message,
  image,
  timestamp
}) {

  return (
    <div className="post">

      <div className="post__header">

        <Avatar src={photoUrl} />

        <div className="post__info">

          <h3>{name}</h3>

          <p>{description}</p>

          <small>
            {timestamp?.toDate?.().toLocaleString?.() ||
              new Date(timestamp).toLocaleString()}
          </small>

        </div>

      </div>

      <div className="post__body">

        <p>{message}</p>

        {image && (
          <img
            src={image}
            alt=""
            className="post__image"
          />
        )}

      </div>

      <div className="post__buttons">

        <div className="post__button">
          <ThumbUpOffAltIcon />
          <p>Like</p>
        </div>

        <div className="post__button">
          <ChatOutlinedIcon />
          <p>Comment</p>
        </div>

        <div className="post__button">
          <ShareOutlinedIcon />
          <p>Share</p>
        </div>

        <div className="post__button">
          <SendIcon />
          <p>Send</p>
        </div>

      </div>

    </div>
  );
}

export default Post;