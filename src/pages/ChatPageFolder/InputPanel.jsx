import React, {useState, useRef} from "react";
import Cookies from 'js-cookie';
import {useParams} from "react-router";


const InputPanel = () => {

    const [message, setMessage] = useState("");
    const socket = useRef(null);
    const params = useParams();

    socket.current = new WebSocket(`ws://localhost:5000/messages/${params.chat_id}`);

    socket.current.onopen = function () {
        console.log("Соединение установлено");
    };

    const sendMessage = () => {
        if (!message.trim()) return;
        if (socket.current && socket.current.readyState === WebSocket.OPEN) {
            socket.current.send(JSON.stringify({
                user_address: `${Cookies.get('address')}`,
                text: `${message}`
            }));
            setMessage("");
        }
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