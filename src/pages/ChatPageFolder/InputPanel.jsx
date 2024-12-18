import React, {useState} from "react";
import Cookies from 'js-cookie';
import {useParams} from "react-router";


const InputPanel = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const params = useParams();



    const sendMessage = () => {
        if (!message.trim()) return;
        fetch(`http://127.0.0.1:5000/baseApi/messages/${params.chat_id}/${Cookies.get('address')}/${message}`, {method: 'POST'})
        setMessage("");
    };

    return (
        <div className="InputPanel">
            <input id="MessageInput"
                   type="text"
                   value={message}
                   placeholder="Введите сообщение"
                   onChange={(e) => setMessage(e.target.value)}/>
            {(message === "" || file === null)
                ? <button id="SendMessageButton" onClick={sendMessage}/>
                : <>
                    <input type="file" id="AddFileButton" onChange={e => setFile(e.target.value)}/>
                    <button id="RecordVoiseButton" onClick={sendMessage}/></>
            }
        </div>
    )
        ;
};

export default InputPanel;