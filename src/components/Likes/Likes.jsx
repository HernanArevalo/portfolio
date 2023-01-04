import { useEffect, useState } from 'react';
import './Likes.css'

export const Likes = () => {

    if (localStorage.getItem("liked") == null){
        localStorage.setItem("liked", true )
    }

    const [liked, setLiked] = useState( localStorage.getItem("liked") )    

    useEffect(() => {
      console.log(liked);
      localStorage.setItem("liked", liked )
    }, [ liked ])
    

    const onLikeClicked = () => {
        setLiked(!liked)
    }


  return (
    <div className="likes-container animate__animated animate__flipInY" onClick={ onLikeClicked }>
        { liked ?
        <box-icon type="solid"
                  name='heart'
                  className="likes-heart"
                  color="rgb(238, 117, 74)">
        </box-icon>
        :
        <box-icon type="regular"
                  name='heart'
                  className="likes-heart"
                  color="rgb(238, 117, 74)">
        </box-icon>


        }
        <div className="likes-counter">{liked}</div>
    </div>
  )
}
