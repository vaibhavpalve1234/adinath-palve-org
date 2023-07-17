import React, { useState } from 'react';
// import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'


const LikeVideo = ({ videoId }) => {
  const [likes, setLikes] = useState(0);
  const [like, setLike] = useState(false);
  

  const handleLike = async () => {
    try {
    //   const response = await axios.post(
    //     'https://www.googleapis.com/youtube/v3/videos/rate',
    //     {
    //       id: videoId,
    //       rating: 'like',
    //       key: 'YOUR_API_KEY',
    //     }
    //   );
    
    if (like) {
        setLikes(likes - 1);
        setLike(false);
      } else {
        setLikes(likes + 1);
        setLike(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <p style={{"margin-left":"130px","margin-top":"10", "justifyContent":"center"}} onClick={handleLike}>
      <FavoriteIcon color={like ? 'secondary' :''} /> {likes}
        </p>
    </div>
  );
};

export default LikeVideo;
