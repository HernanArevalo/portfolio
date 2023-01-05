import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './Likes.css'
import { startAddingLike, startLoadLikes, startRemovingLike } from '../../store/likes/thunks.js';

export const Likes = () => {

    const dispatch = useDispatch();
    dispatch( startLoadLikes() )

    const { likesCounter } = useSelector( state => state.likes );
    const { isSaving } = useSelector( state => state.likes );



    const [liked, setLiked] = useState( localStorage.getItem("liked") )    
    const [likes, setLikes] = useState( likesCounter )


    useEffect(() => {
        setLikes( likesCounter )
    }, [ likesCounter ])
    
    if ( localStorage.getItem("liked") == null){
         localStorage.setItem("liked", "false")
    }


    const onLikeClicked = (e) => {
        e.preventDefault()

        if ( localStorage.getItem("liked") == "true" ) {
            dispatch( startRemovingLike() )
            setLiked( "false" )
        }else{
            dispatch( startAddingLike() )
            setLiked( "true" )

        }
    }


  return (
    <button className="likes-container animate__animated animate__flipInY animate__delay-1s" 
         onClick={ onLikeClicked }
         disabled={ isSaving }
         >
        { liked == "false"?
        <box-icon type="regular"
                  name='heart'
                  className="likes-heart"
                  color="rgb(238, 117, 74)">
        </box-icon>
        :
        <box-icon type="solid"
                  name='heart'
                  className="likes-heart"
                  color="rgb(238, 117, 74)">
        </box-icon>


        }
        <div className="likes-counter">{likes}</div>
    </button>
  )
}
