import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {

  const [like, setLike] = useState(0);
  const [disLike, setDislike] = useState(0);
  return (
    <div className='counter-container'>
      <IconButton className="like-dislike" onClick={() => setLike(like + 1)} aria-label="like-button" color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton className="like-dislike" onClick={() => setDislike(disLike + 1)} aria-label="dislike-button" color="error">
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>


      {/* <button className="like-dislike"onClick={()=>setLike(like+1)}>{like}👍</button>
            <button className="like-dislike"onClick={()=>setDislike(disLike+1)}>{disLike}👎</button> */}
    </div>
  );
}
