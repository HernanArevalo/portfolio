import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, setDoc, getDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config.js';
import './Likes.css'

export const Likes = () => {

    const [liked, setLiked] = useState( false )    
    const [likes, setLikes] = useState( null )  // ? CREAR SLICE PARA LEER LOS LIKES DESDE REDUX



    async() => {

        const docRef = doc( FirebaseDB, "likes", "counter");
        const docSnap = await getDoc(docRef);
    
        setLikes(docSnap.data().count );
    }




    if ( localStorage.getItem("liked") == null ) {
        localStorage.setItem("liked", false )
        
    }


    useEffect(() => {
      localStorage.setItem("liked", liked )
    }, [ liked ])
    


    const onLikeClicked = async() => {
        
        if (liked == false) {
            setLikes( likes+1 )
            await setDoc(doc( FirebaseDB, "likes", "counter"), {
                count: likes+1,
            });
            
        }else{
            setLikes( likes-1 )
            await setDoc(doc( FirebaseDB, "likes", "counter"), {
                count: likes-1,
            });
        }
        
        
        
        
        setLiked( !liked)
    }


  return (
    <div className="likes-container animate__animated animate__flipInY animate__delay-1s" onClick={ onLikeClicked }>
        { liked == false?
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
        <div className="likes-counter">{`${likes}`}</div>
    </div>
  )
}
