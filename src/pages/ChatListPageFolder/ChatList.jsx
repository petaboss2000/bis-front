import React, {useEffect, useRef} from "react";
import Cookies from 'js-cookie';
import Chat from "./Chat";

const ChatList = () => {

	const usersDivRef = useRef(null);
	const socket = useRef(null);

	useEffect(() => {
		const cookieValue = Cookies.get('address')
		socket.current = new WebSocket(`ws://localhost:5000/chats/${cookieValue}`);

		socket.current.onopen = function () {
			console.log("Соединение установлено!!");
		};

		socket.current.onmessage = function (event) {
			console.log("Get message");
			console.log(event.data);
			const data = JSON.parse(event.data);
				usersDivRef.current.replaceChildren()
				data.chats.forEach(chat => {
					if (usersDivRef.current) {
						const chatComponent = React.createElement(Chat, {chat_id: chat.chat_id}, null);
						usersDivRef.current.appendChild(chatComponent);
					}
				});
		};

		socket.current.onclose = function (event) {
			console.log("Соединение закрыто");
		};

		socket.current.onerror = function (error) {
			console.log(`Ошибка: ${error.message}`);
		};

		return () => {
			if (socket.current) {
				socket.current.close();
			}
		};
	}, []);

	return (
		<div className="ChatList" ref={usersDivRef}>
		</div>
	);
};

export default ChatList;