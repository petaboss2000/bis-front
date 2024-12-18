import React, {useState} from "react";
import Cookies from 'js-cookie';
import {useParams} from "react-router";


const InputPanel = () => {

    const [message, setMessage] = useState("");
    const params = useParams();

    const sendMessage = () => {
        if (!message.trim()) return;
        fetch(`http://127.0.0.1:5000/baseApi/add_user/${params.chat_id}/${Cookies.get('address')}/${message}`, {method: 'POST'})
        setMessage("");
    };

    return (
        <div className="InputPanel">
            <input id="MessageInput"
                   type="text"
                   value={message}
                   placeholder="Введите сообщение"
                   onChange={(e) => setMessage(e.target.value)}/>
            <button id="SendMessageButton" onClick={sendMessage}>{">"}</button>
        </div>
    );
};

export default InputPanel;