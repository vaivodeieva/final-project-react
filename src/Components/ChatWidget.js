import React, { useEffect } from 'react';
import 'react-chat-widget/lib/styles.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import logo from '../Assets/Images/logo-chat.jpg';
// import { response } from 'express';




function Chat() {

    useEffect(() => {
        addResponseMessage('Welcome to our customer service! ');
    }, []);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming!  ${newMessage}`);
        // Now send the message throught the backend API
        // addResponseMessage(response);

    };

    return (

        <div>
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                profileAvatar={logo}
                title="Do you have a question?"
                subtitle="Type a message here"

            />
        </div>
    )
}

export default Chat;