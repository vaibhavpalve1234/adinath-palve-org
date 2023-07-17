import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [like, setLike] = useState(false);
    const handleLike = async () => {
        try {
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
        <p style={{ "margin-left": "50%", "margin-top": "10px", "justifyContent": "center" }} onClick={handleLike}>
            <FavoriteIcon color={like ? 'secondary' : ''} /> {likes}
        </p>
    )
}
