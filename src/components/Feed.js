import React, { useState, useEffect } from 'react';

import './Feed.css';

import CreateIcon from '@mui/icons-material/Create';

import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import Post from './Post';

import { db } from '../firebase';

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore';

function Feed({ user }) {

  const [input, setInput] = useState('');

  const [imageUrl, setImageUrl] = useState('');

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const q = query(
      collection(db, 'posts'),
      orderBy('timestamp', 'desc')
    );

    onSnapshot(q, (snapshot) => {

      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );

    });

  }, []);

  const sendPost = async (e) => {

    e.preventDefault();

    if (!input) return;

    await addDoc(collection(db, 'posts'), {

      name: user.displayName,

      description: user.email,

      photoUrl: user.photoURL,

      message: input,

      image: imageUrl,

      timestamp: new Date(),
    });

    setInput('');

    setImageUrl('');
  };

  return (
    <div className="feed">

      <div className="feed__inputContainer">

        <div className="feed__input">

          <CreateIcon />

          <form onSubmit={sendPost}>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />

            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              type="text"
              placeholder="Image URL (optional)"
            />

            <button type="submit">
              Send
            </button>

          </form>

        </div>

        <div className="feed__options">

          <div className="feed__option">
            <ImageIcon />
            <h4>Photo</h4>
          </div>

          <div className="feed__option">
            <SubscriptionsIcon />
            <h4>Video</h4>
          </div>

          <div className="feed__option">
            <EventNoteIcon />
            <h4>Event</h4>
          </div>

          <div className="feed__option">
            <CalendarViewDayIcon />
            <h4>Write Article</h4>
          </div>

        </div>

      </div>

      {posts.map(({ id, data }) => (

        <Post
          key={id}
          name={data.name}
          description={data.description}
          photoUrl={data.photoUrl}
          message={data.message}
          image={data.image}
          timestamp={data.timestamp}
        />

      ))}

    </div>
  );
}

export default Feed;