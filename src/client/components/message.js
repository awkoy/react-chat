import React from 'react';

export default ({username, content}) => {
    return ( 
        <div className="app__message">
            <span className="app__message__user">
                {username}:
            </span>
            <span className="app__message__content">
                {content}
            </span>
        </div>
    )
}