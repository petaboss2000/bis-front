import React, {useState, useRef} from "react";
import Cookies from 'js-cookie';


const InputPanel = () => {

	// Это конец на сегодня, просто допиши WS и свободен, молодец!

	const [message, setMessage] = useState("");

	const socket = useRef(null);

	socket.current = new WebSocket("http://localhost:5000/ws");

	socket.current.onopen = function () {
		console.log("Соединение установлено");
		sendMessage("");
		socket.current.send(JSON.stringify({address: document.cookie.split(";")[0].split("=")[1], type: "init"}))
	};

	const sendMessage = () => {
		if (!message.trim()) return;
		if (socket.current && socket.current.readyState === WebSocket.OPEN) {
			socket.current.send(JSON.stringify({
				type: "massage",
				user_id: `${Cookies.get('address')}`,
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