import React, { createContext, useState } from 'react'

export const CommentContext = createContext({

    addCommentHandler: () => {},

})

const CommentContextProvider = (props) => {

    const [comment, setComment] = useState([])


    const addCommentHandler = (commentInfo) => {

        console.log(comment)
    
        fetch(`https://sarao-18c59-default-rtdb.firebaseio.com/events/${commentInfo.eventId}/comments.json`, {
          method: 'POST',
          body: JSON.stringify(commentInfo),
          headers: { 'Content-Type': 'application/json'}
        })
          .then(response => response.json())
          .then(responseData => {
            setComment((prevState) => [
                ...prevState,
                { id: responseData.id, ...commentInfo}
              ])
        })
    
    }

    return (
        <CommentContext.Provider value={ { addCommentHandler: addCommentHandler } }>
            {props.children}
        </CommentContext.Provider>
    )
}

export default CommentContextProvider