import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { notSaving, removeLike, isSaving, setLikes, addLike } from "./LikesSlice";

export const startLoadLikes = () => {
    return async(dispatch, getState) =>{

        const docRef = doc( FirebaseDB, "likes", "counter");
        const docSnap = await getDoc(docRef);
        const { count } = docSnap.data();

        dispatch( setLikes( count ))

        dispatch( notSaving() )
    }
}

export const startAddingLike = () => {
    return async(dispatch, getState) =>{

        console.log('adding');

        dispatch( isSaving() )
        
        
        const { likesCounter } = getState().likes;
        const newValue = likesCounter+1
        
        dispatch( addLike(newValue) )

        await setDoc(doc( FirebaseDB, "likes", "counter"), {
            count: newValue
          });

        localStorage.setItem("liked", true)

        dispatch( notSaving() )
    }
}

export const startRemovingLike = () => {
    return async(dispatch, getState) =>{

        console.log('removing');

        dispatch( isSaving() )

        const { likesCounter } = getState().likes;
        const newValue = likesCounter-1

        dispatch( removeLike( newValue ) ) 

        await setDoc(doc( FirebaseDB, "likes", "counter"), {
            count: newValue
        });

        localStorage.setItem("liked", false)

        dispatch( notSaving() )

    }
}