import React from 'react';
import Message from './message';

export default ({message}) => {

    const list = message.map(mess => 
        <Message
            key={Date.now()}
            username={mess.username}
            content={mess.content}
        />
    ); 

    return ( 
        <div className="app__list"> 
            {list}
        </div>
    )
}