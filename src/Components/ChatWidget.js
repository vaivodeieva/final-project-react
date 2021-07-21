import React, { useEffect } from 'react';
import 'react-chat-widget/lib/styles.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import logo from '../Assets/Images/logo-chat.jpg';
// import { response } from 'express';




function Chat() {

    useEffect(() => {
        addResponseMessage('Type your message here, we will replay soon!');
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
                subtitle="Leave us a note"

            />
        </div>
    )
}

export default Chat;